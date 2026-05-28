import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import * as Icons from 'lucide-react';

const ArrowRight = Icons['ArrowRight'] || Icons['HelpCircle'];
const Leaf = Icons['Leaf'] || Icons['HelpCircle'];
const HeartHandshake = Icons['HeartHandshake'] || Icons['HelpCircle'];

const DEFAULT_STATS = [
  { label: 'Meals Served', value: 1240000, suffix: '+', icon: 'UtensilsCrossed' },
  { label: 'Kg Food Saved', value: 890000, suffix: 'kg', icon: 'Package' },
  { label: 'Active NGOs', value: 340, suffix: '+', icon: 'Building2' },
  { label: 'Volunteers', value: 12500, suffix: '+', icon: 'Users' },
];

function AnimatedCounter({ target, suffix, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration, motionVal]);

  const formatted = display >= 1000
    ? display >= 1000000
      ? `${(display / 1000000).toFixed(1)}M`
      : `${(display / 1000).toFixed(0)}K`
    : `${display}`;

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}{suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: 'easeOut' },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function HeroFoodRelief({ onDonateClick, onRequestClick, stats }) {
  const resolvedStats = stats && stats.length > 0 ? stats : DEFAULT_STATS;

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-[#F5F5E8]"
      aria-label="Hero section"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#179D3D]/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full bg-[#7ED957]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[360px] h-[320px] rounded-full bg-[#179D3D]/8 blur-2xl" />
        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.035]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,224 C240,320 480,160 720,224 C960,288 1200,128 1440,224 L1440,320 L0,320 Z"
            fill="#179D3D"
          />
        </svg>
        <div
          className="absolute inset-0"
          style={{}}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-[#179D3D]/10"
              style={{
                width: `${120 + i * 80}px`,
                height: `${120 + i * 80}px`,
                top: `${10 + i * 5}%`,
                right: `${5 + i * 2}%`,
                opacity: 0.4 - i * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#179D3D]/10 border border-[#179D3D]/20 text-[#179D3D] text-sm font-semibold font-nunito tracking-wide"
            data-imagine-id="herofoodrelief-badge"
          >
            <Leaf size={15} strokeWidth={2.2} />
            Zero Hunger. Zero Waste.
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-inter font-black text-[#1A1A1A] text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.04] tracking-tight w-full md:w-[90%] mx-auto"
          data-imagine-id="herofoodrelief-headline"
        >
          Nourishing{' '}
          <span className="text-[#179D3D] relative">
            Communities.
            <motion.span
              className="absolute -bottom-1 left-0 h-1 rounded-full bg-[#7ED957]"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' }}
              aria-hidden="true"
            />
          </span>{' '}
          Reducing Food Waste.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 md:mt-8 max-w-xl mx-auto font-nunito text-[#555550] text-lg md:text-xl leading-relaxed"
          data-imagine-id="herofoodrelief-subheadline"
        >
          Connect surplus food with those who need it most: seamless, safe, impactful.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => onDonateClick?.()}
            whileHover={{ scale: 1.04, boxShadow: '0 0 28px 6px rgba(23,157,61,0.28)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 340, damping: 22 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#179D3D] text-white font-inter font-semibold text-base md:text-lg shadow-lg shadow-[#179D3D]/25 hover:bg-[#148836] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#179D3D]/40"
            aria-label="Donate Food"
            data-imagine-id="herofoodrelief-donate-btn"
          >
            <HeartHandshake size={20} strokeWidth={2} />
            Donate Food
            <ArrowRight size={18} strokeWidth={2.2} />
          </motion.button>

          <motion.button
            onClick={() => onRequestClick?.()}
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px 4px rgba(23,157,61,0.15)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 340, damping: 22 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#179D3D] font-inter font-semibold text-base md:text-lg border-2 border-[#179D3D] hover:bg-[#F5F5E8] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#179D3D]/30"
            aria-label="Request Food"
            data-imagine-id="herofoodrelief-request-btn"
          >
            Request Food
            <ArrowRight size={18} strokeWidth={2.2} />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 pb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
      >
        <div className="rounded-2xl md:rounded-3xl bg-white/70 backdrop-blur-sm border border-[#179D3D]/12 shadow-xl shadow-[#179D3D]/8 px-6 py-8 md:px-10 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {resolvedStats.map((stat, idx) => {
              const IconComp = Icons[stat?.icon] || Icons['HelpCircle'];
              return (
                <motion.div
                  key={stat?.label ?? idx}
                  variants={statVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#179D3D]/10">
                    <IconComp size={22} strokeWidth={1.8} className="text-[#179D3D]" />
                  </span>
                  <span
                    className="font-inter font-black text-3xl md:text-4xl text-[#1A1A1A] leading-none"
                    data-imagine-id={`herofoodrelief-stat-${idx}-value`}
                  >
                    <AnimatedCounter
                      target={stat?.value ?? 0}
                      suffix={stat?.suffix ?? ''}
                      duration={2.2}
                    />
                  </span>
                  <span
                    className="font-nunito text-sm md:text-base text-[#777770] font-medium"
                    data-imagine-id={`herofoodrelief-stat-${idx}-label`}
                  >
                    {stat?.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroFoodRelief;
