import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const DEFAULT_FAQS = [
  {
    id: 'faq-1',
    question: 'Is the food safe to donate and distribute?',
    answer: 'Yes. Every donation goes through a quality check aligned with local food safety standards. We only accept surplus food that meets freshness and handling requirements, and our partner NGOs are trained to inspect and safely redistribute meals.'
  },
  {
    id: 'faq-2',
    question: 'What is the minimum donation size we can offer?',
    answer: 'There is no strict minimum. Whether you have 10 meals or 10,000, we match your surplus with a nearby recipient. Restaurants, events, and households of all sizes participate in our network every day.'
  },
  {
    id: 'faq-3',
    question: 'What happens to leftover food that is not collected in time?',
    answer: 'Our platform sends real-time alerts to volunteers and NGOs closest to you. If a pickup cannot be arranged before the expiry window closes, the system logs the event so we can improve coverage in that area. No confirmed pickup is left incomplete.'
  },
  {
    id: 'faq-4',
    question: 'Can I track where my donated food ends up?',
    answer: 'Absolutely. Donors receive a confirmation with the name of the receiving organization, approximate number of beneficiaries served, and an impact summary after each successful redistribution. Full transparency is a core promise of this platform.'
  },
  {
    id: 'faq-5',
    question: 'How are NGOs and shelters vetted before joining?',
    answer: 'Every organization undergoes a verification process: legal registration check, physical address confirmation, and a capacity review. Approved partners are reviewed annually and must maintain compliance with food safety handling guidelines to remain active on the platform.'
  },
  {
    id: 'faq-6',
    question: 'Is my personal or business information kept private?',
    answer: 'We treat your data with strict confidentiality. Donor details are never sold or shared with third parties. Only the matched NGO or volunteer coordinator receives the information necessary to complete the pickup. All data handling complies with applicable privacy regulations.'
  },
  {
    id: 'faq-7',
    question: 'How does volunteering work logistically?',
    answer: 'After signing up, volunteers set their availability and service radius. When a donation nearby becomes available, you receive a notification with pickup location, drop-off point, and time window. Most runs take under 45 minutes and require only a vehicle and a willingness to help.'
  },
  {
    id: 'faq-8',
    question: 'How do I get started as a donor, NGO, or volunteer?',
    answer: 'Click the Sign Up button at the top of the page, select your role, and complete a short profile. Donors can post their first surplus within minutes. NGOs and volunteers are activated after a brief verification step, typically completed within 24 hours.'
  }
];

function AccordionItem({ faq, index, isOpen, onToggle }) {
  const ChevronDown = Icons['ChevronDown'] || Icons['HelpCircle'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className={`relative rounded-2xl overflow-hidden bg-[#F9F9F2] border border-[#E8E8D8] ${
        isOpen ? 'shadow-md' : 'shadow-sm'
      } transition-shadow duration-300`}
    >
      <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[#179D3D]" />

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq?.id}`}
        className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#179D3D] focus-visible:ring-offset-2 rounded-2xl group"
      >
        <span
          data-imagine-id={`faqaccordion-question-${index}`}
          className="font-nunito font-700 text-[#1A1A1A] text-base md:text-lg leading-snug group-hover:text-[#179D3D] transition-colors duration-200"
          style={{fontWeight: 700}}
        >
          {faq?.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-[#E8E8D8] text-[#179D3D] shadow-sm"
        >
          <ChevronDown size={18} strokeWidth={2.2} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq?.id}`}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-7 pt-0">
              <div className="w-full h-px bg-[#E8E8D8] mb-5" />
              <p
                data-imagine-id={`faqaccordion-answer-${index}`}
                className="font-inter text-[#4A4A4A] text-sm md:text-base leading-relaxed"
              >
                {faq?.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQAccordion({ faqs }) {
  const items = faqs ?? DEFAULT_FAQS;
  const [openId, setOpenId] = useState(null);

  const LeafIcon = Icons['Leaf'] || Icons['HelpCircle'];
  const MessageCircleIcon = Icons['MessageCircle'] || Icons['HelpCircle'];

  function handleToggle(id) {
    setOpenId(prev => (prev === id ? null : id));
  }

  return (
    <section
      id="faq"
      className="relative w-full bg-[#F5F5E8] py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #179D3D 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 md:mb-18"
        >
          <div className="inline-flex items-center gap-2 bg-[#179D3D]/10 border border-[#179D3D]/20 rounded-full px-4 py-2 mb-5">
            <LeafIcon size={15} className="text-[#179D3D]" strokeWidth={2} />
            <span
              data-imagine-id="faqaccordion-badge"
              className="font-inter text-[#179D3D] text-xs font-semibold tracking-widest uppercase"
            >
              Common Questions
            </span>
          </div>

          <h2
            data-imagine-id="faqaccordion-heading"
            className="font-nunito text-[#1A1A1A] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 max-w-2xl"
          >
            Everything You Need to Know
          </h2>
          <p
            data-imagine-id="faqaccordion-subheading"
            className="font-inter text-[#5C5C4E] text-base md:text-lg max-w-xl leading-relaxed"
          >
            Quick answers to the questions donors, NGOs, and volunteers ask us most.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {items?.map((faq, index) => (
            <AccordionItem
              key={faq?.id ?? index}
              faq={faq}
              index={index}
              isOpen={openId === (faq?.id ?? index)}
              onToggle={() => handleToggle(faq?.id ?? index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="mt-14 flex flex-col items-center text-center gap-4"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-[#E8E8D8] rounded-2xl px-7 py-5 shadow-sm">
            <MessageCircleIcon size={20} className="text-[#179D3D]" strokeWidth={2} />
            <p
              data-imagine-id="faqaccordion-contact-prompt"
              className="font-inter text-[#4A4A4A] text-sm md:text-base"
            >
              Still have questions?{' '}
              <a
                href="mailto:hello@redistribute.org"
                data-imagine-id="faqaccordion-contact-link"
                className="font-semibold text-[#179D3D] underline underline-offset-2 hover:text-[#0f7a2d] transition-colors duration-200"
              >
                Reach out to our team
              </a>
              {' '}— we reply within one business day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQAccordion;
