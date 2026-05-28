import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../components/Header';
import HeroFoodRelief from '../components/HeroFoodRelief';
import HowItWorksSteps from '../components/HowItWorksSteps';
import ImpactStatsStrip from '../components/ImpactStatsStrip';
import CoreModulesFeatureGrid from '../components/CoreModulesFeatureGrid';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import PartnerNgoshowcase from '../components/PartnerNgoshowcase';
import VolunteerCallToAction from '../components/VolunteerCallToAction';
import Footer from '../components/Footer';
import { X, CheckCircle2, HelpCircle, ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'How does FoodRelief work?',
    answer: 'FoodRelief connects food donors—restaurants, supermarkets, and individuals—with NGOs and community kitchens. Donors list surplus food, and our platform matches them with nearby recipients for quick, efficient pickup or delivery.',
  },
  {
    question: 'Who can donate food?',
    answer: 'Anyone can donate! Restaurants, grocery stores, caterers, event venues, farms, and even individuals with surplus home-cooked food are all welcome to register and start donating.',
  },
  {
    question: 'Is the food safe to consume?',
    answer: 'Yes. All food listed must meet basic safety standards. Our platform provides guidelines for safe food handling, and NGO partners are trained to assess food quality before distribution.',
  },
  {
    question: 'How do I volunteer?',
    answer: 'Click the "Volunteer" button on our site, fill in your details, and choose your preferred role—driver, sorter, or coordinator. We will match you with local opportunities based on your availability.',
  },
  {
    question: 'Is FoodRelief available in my city?',
    answer: 'We are expanding rapidly! Currently active in 40+ cities. Enter your location on the platform to see nearby donors, recipients, and volunteer opportunities in your area.',
  },
  {
    question: 'How are impact stats calculated?',
    answer: 'Our impact metrics are tracked in real time. Every confirmed donation logs the weight of food saved and an estimated number of meals provided, calculated using standard nutritional equivalency data.',
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 px-4 bg-[#F5F5E8]" aria-label="Frequently Asked Questions">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#179D3D]/10 text-[#179D3D] text-xs font-semibold uppercase tracking-widest font-inter mb-4">
            FAQ
          </span>
          <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-gray-500 text-base max-w-xl mx-auto">
            Everything you need to know about FoodRelief. Can't find the answer? Reach out to our team.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-200 ${isOpen ? 'border-[#179D3D]/30 bg-white shadow-md' : 'border-gray-200 bg-white hover:border-[#179D3D]/20'}`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="font-nunito font-bold text-gray-900 text-base md:text-lg leading-snug">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    className="flex-shrink-0 text-[#179D3D]"
                  >
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-inter text-gray-600 text-sm md:text-base px-6 pb-5 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const MODAL_VARIANTS = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.94, y: 16, transition: { duration: 0.2, ease: 'easeIn' } },
};

function AuthModal({ mode, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const isLogin = mode === 'login';

  const validate = () => {
    if (!email.includes('@')) return 'Please enter a valid email address.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => onClose(), 1400);
    }, 1200);
  };

  const XI = X || HelpCircle;
  const CI = CheckCircle2 || HelpCircle;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label={isLogin ? 'Log in' : 'Sign up'}
    >
      <motion.div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        variants={MODAL_VARIANTS}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative z-10 w-full max-w-md bg-[#F5F5E8] rounded-3xl shadow-2xl px-8 py-10 border border-[#179D3D]/10"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          data-imagine-id="home-modal-close-btn"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#179D3D] hover:border-[#179D3D]/40 transition-colors"
        >
          <XI size={16} strokeWidth={2.5} />
        </button>

        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-6"
          >
            <div className="w-14 h-14 rounded-full bg-[#179D3D]/15 flex items-center justify-center">
              <CI size={28} className="text-[#179D3D]" strokeWidth={2} />
            </div>
            <p data-imagine-id="home-modal-success" className="text-gray-900 font-nunito font-semibold text-lg text-center">
              {isLogin ? 'Welcome back!' : 'Account created!'}
            </p>
            <p className="text-gray-500 font-inter text-sm text-center">Redirecting you now…</p>
          </motion.div>
        ) : (
          <>
            <h2
              data-imagine-id="home-modal-title"
              className="font-nunito font-extrabold text-2xl text-gray-900 mb-1"
            >
              {isLogin ? 'Log In' : 'Create Account'}
            </h2>
            <p
              data-imagine-id="home-modal-subtitle"
              className="font-inter text-sm text-gray-500 mb-7"
            >
              {isLogin ? 'Welcome back to FoodRelief.' : 'Join the movement. Zero hunger, zero waste.'}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="modal-email"
                  data-imagine-id="home-modal-email-label"
                  className="text-xs font-semibold uppercase tracking-widest text-gray-500 font-inter"
                >
                  Email
                </label>
                <input
                  id="modal-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-inter text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#179D3D]/40 focus:border-[#179D3D] transition-colors placeholder:text-gray-300"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="modal-password"
                  data-imagine-id="home-modal-password-label"
                  className="text-xs font-semibold uppercase tracking-widest text-gray-500 font-inter"
                >
                  Password
                </label>
                <input
                  id="modal-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-inter text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#179D3D]/40 focus:border-[#179D3D] transition-colors placeholder:text-gray-300"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                />
              </div>

              {error && (
                <p
                  data-imagine-id="home-modal-error"
                  className="text-xs text-red-500 font-inter bg-red-50 border border-red-100 rounded-lg px-3 py-2"
                >
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={loading ? {} : { scale: 1.03, boxShadow: '0 8px 24px rgba(23,157,61,0.28)' }}
                whileTap={loading ? {} : { scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                data-imagine-id="home-modal-submit-btn"
                className="mt-2 w-full py-3.5 rounded-full bg-[#179D3D] text-white font-inter font-semibold text-sm shadow-md hover:bg-[#148836] transition-colors disabled:opacity-60"
              >
                {loading ? 'Please wait…' : isLogin ? 'Log In' : 'Create Account'}
              </motion.button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [modal, setModal] = useState(null);

  const openLogin = useCallback(() => setModal('login'), []);
  const openSignup = useCallback(() => setModal('signup'), []);
  const closeModal = useCallback(() => setModal(null), []);

  return (
    <div className="min-h-screen bg-[#F5F5E8] font-inter">
      <Header onLoginClick={openLogin} onSignupClick={openSignup} />

      <main>
        <HeroFoodRelief
          onDonateClick={openSignup}
          onRequestClick={openSignup}
        />

        <HowItWorksSteps />

        <ImpactStatsStrip />

        <CoreModulesFeatureGrid />

        <TestimonialsCarousel />

        <PartnerNgoshowcase />

        <VolunteerCallToAction onVolunteerClick={openSignup} />

        <FaqAccordion />
      </main>

      <Footer />

      <AnimatePresence>
        {modal && (
          <AuthModal key={modal} mode={modal} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
}