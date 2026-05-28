import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const ChevronDownIcon = Icons['ChevronDown'] || Icons['HelpCircle'];

const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Who can donate food through FoodRelief?',
    answer:
      'Any individual, restaurant, grocery store, event caterer, or food business with surplus food can donate. Our platform guides you through safe food logging — just register, log your surplus, and we handle the matching and pickup coordination.',
  },
  {
    id: 'faq-2',
    question: 'How does the smart matching algorithm work?',
    answer:
      'Our system factors in proximity, food type, NGO capacity, and urgency to pair each donation with the most suitable verified recipient. Matches happen in real time — typically within minutes of a donation being logged.',
  },
  {
    id: 'faq-3',
    question: 'Are donations tracked for food safety compliance?',
    answer:
      'Yes. Every donation is timestamped, categorized by food type, and assessed against safety guidelines. NGOs and volunteers receive safety briefings, and our system flags any donation that does not meet quality thresholds before it enters the redistribution chain.',
  },
  {
    id: 'faq-4',
    question: 'How do NGOs and shelters join the network?',
    answer:
      'Organizations apply through our NGO registration flow. After a brief verification process — including documentation review and a short onboarding call — they gain access to the partner dashboard to receive matched donations and manage requests.',
  },
  {
    id: 'faq-5',
    question: 'Is there a cost to use FoodRelief?',
    answer:
      'Core donor and volunteer access is free. NGO partners on our network receive a subsidized tier. Enterprise features — analytics, API access, and branded dashboards — are available under our paid plans launching soon.',
  },
];

function AccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
        isOpen
          ? 'border-[#179D3D]/30 bg-white shadow-md shadow-[#179D3D]/8'
          : 'border-gray-100 bg-white hover:border-[#179D3D]/20'
      }`}
    >
      <button
        onClick={() => onToggle(item?.id)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item?.id}`}
        data-imagine-id={`faqaccordion-question-${index}`}
        className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#179D3D]/50 focus-visible:ring-inset"
      >
        <span
          className={`font-inter font-semibold text-base md:text-lg leading-snug transition-colors duration-200 ${
            isOpen ? 'text-[#179D3D]' : 'text-gray-900'
          }`}
        >
          {item?.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-200 ${
            isOpen
              ? 'border-[#179D3D] text-[#179D3D] bg-[#179D3D]/8'
              : 'border-gray-200 text-gray-400'
          }`}
        >
          <ChevronDownIcon size={16} strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item?.id}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p
              data-imagine-id={`faqaccordion-answer-${index}`}
              className="px-7 pb-6 font-inter text-gray-600 text-base leading-relaxed"
            >
              {item?.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqAccordion({ faqs }) {
  const items = faqs ?? FAQ_ITEMS;
  const [openId, setOpenId] = useState(items?.[0]?.id ?? null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden"
      aria-label="Frequently asked questions"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#F5F5E8] to-[#edf7ee]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#7ED957]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#179D3D]/8 blur-2xl"
      />

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-16"
        >
          <span
            data-imagine-id="faqaccordion-eyebrow"
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#179D3D] bg-[#179D3D]/10 px-4 py-1.5 rounded-full mb-5 font-inter"
          >
            Got Questions?
          </span>
          <h2
            data-imagine-id="faqaccordion-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-nunito leading-tight mb-4"
          >
            Frequently Asked{' '}
            <span className="text-[#179D3D]">Questions</span>
          </h2>
          <p
            data-imagine-id="faqaccordion-subheading"
            className="max-w-xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed font-inter"
          >
            Everything you need to know about donating, volunteering, or joining as a partner NGO.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {items?.map((item, idx) => (
            <AccordionItem
              key={item?.id ?? idx}
              item={item}
              index={idx}
              isOpen={openId === item?.id}
              onToggle={handleToggle}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
          <p
            data-imagine-id="faqaccordion-contact-prompt"
            className="text-gray-500 font-inter text-sm mb-4"
          >
            Still have questions?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(23,157,61,0.22)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            data-imagine-id="faqaccordion-contact-link"
            className="inline-flex items-center gap-2 bg-[#179D3D] text-white font-inter font-semibold text-sm px-8 py-3.5 rounded-full shadow-md hover:bg-[#148836] transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#179D3D]/40"
          >
            {(() => {
              const MailIcon = Icons['Mail'] || Icons['HelpCircle'];
              return (
                <>
                  <MailIcon size={15} strokeWidth={2.2} />
                  Contact Our Team
                </>
              );
            })()}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
