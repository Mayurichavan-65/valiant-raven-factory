import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';

const STEPS = [
  {
    id: 1,
    iconName: 'HandHeart',
    label: 'Step 1',
    title: 'Donate Surplus Food',
    description:
      'Restaurants, grocery stores, and households log surplus food in minutes. Our smart intake form ensures every donation is safe, dated, and categorized.',
  },
  {
    id: 2,
    iconName: 'MapPin',
    label: 'Step 2',
    title: 'Smart Matching',
    description:
      'Our algorithm instantly pairs each donation with the nearest verified NGO, shelter, or community kitchen — maximizing impact and minimizing waste.',
  },
  {
    id: 3,
    iconName: 'Truck',
    label: 'Step 3',
    title: 'Fast, Safe Delivery',
    description:
      'A network of trained volunteers picks up and delivers food within hours, ensuring freshness and dignity for every recipient.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const arrowVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.35,
    },
  },
};

export default function HowItWorksSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-[#F5F5E8]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#179D3D]/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#7ED957]/8 blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{}}
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <span
            data-imagine-id="howitworkssteps-eyebrow"
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#179D3D] bg-[#179D3D]/10 px-4 py-1.5 rounded-full mb-5 font-inter"
          >
            How It Works
          </span>
          <h2
            data-imagine-id="howitworkssteps-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 font-nunito leading-tight mb-4"
          >
            From Surplus to Smiles —{' '}
            <span className="text-[#179D3D]">Three Simple Steps</span>
          </h2>
          <p
            data-imagine-id="howitworkssteps-subheading"
            className="max-w-xl mx-auto text-neutral-500 text-base md:text-lg leading-relaxed font-inter"
          >
            Our platform makes food redistribution effortless, efficient, and dignified for everyone involved.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative flex flex-col md:flex-row items-stretch gap-6 md:gap-0"
        >
          {STEPS.map((step, idx) => {
            const IconComp = Icons[step?.iconName] || Icons['HelpCircle'];
            const isLast = idx === STEPS.length - 1;

            return (
              <div key={step?.id} className="relative flex flex-col md:flex-row items-center flex-1">
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    boxShadow:
                      '0 20px 48px 0 rgba(23,157,61,0.13), 0 4px 16px 0 rgba(0,0,0,0.06)',
                    transition: { duration: 0.28, ease: 'easeOut' },
                  }}
                  className="flex-1 w-full bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-neutral-100 flex flex-col items-start gap-5 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#179D3D]/10 shrink-0">
                      <IconComp
                        size={26}
                        strokeWidth={1.75}
                        className="text-[#179D3D]"
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      data-imagine-id={`howitworkssteps-step-${idx}-label`}
                      className="text-xs font-semibold tracking-widest uppercase text-[#7ED957] font-inter"
                    >
                      {step?.label}
                    </span>
                  </div>

                  <div>
                    <h3
                      data-imagine-id={`howitworkssteps-step-${idx}-title`}
                      className="text-xl md:text-2xl font-bold text-neutral-900 font-nunito mb-3 leading-snug"
                    >
                      {step?.title}
                    </h3>
                    <p
                      data-imagine-id={`howitworkssteps-step-${idx}-description`}
                      className="text-neutral-500 text-sm md:text-base leading-relaxed font-inter"
                    >
                      {step?.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-2 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#179D3D] flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold font-inter">{step?.id}</span>
                    </div>
                    <div className="h-px flex-1 bg-[#179D3D]/20 rounded-full" />
                  </div>
                </motion.div>

                {!isLast && (
                  <motion.div
                    variants={arrowVariants}
                    className="flex items-center justify-center shrink-0 origin-left"
                    aria-hidden="true"
                  >
                    <div className="hidden md:flex flex-col items-center justify-center px-3">
                      <div className="flex items-center gap-0.5">
                        <div className="w-6 h-px bg-[#179D3D]/40" />
                        <div className="w-6 h-px bg-[#179D3D]/60" />
                        <div className="w-6 h-px bg-[#179D3D]/80" />
                        <div
                          className="w-0 h-0"
                          style={{
                            borderTop: '5px solid transparent',
                            borderBottom: '5px solid transparent',
                            borderLeft: '8px solid #179D3D',
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex md:hidden items-center justify-center w-full py-1">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-px h-4 bg-[#179D3D]/40" />
                        <div className="w-px h-4 bg-[#179D3D]/70" />
                        <div
                          className="w-0 h-0"
                          style={{
                            borderLeft: '5px solid transparent',
                            borderRight: '5px solid transparent',
                            borderTop: '8px solid #179D3D',
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="flex justify-center mt-14"
        >
          <button
            data-imagine-id="howitworkssteps-cta"
            type="button"
            className="inline-flex items-center gap-2 bg-[#179D3D] hover:bg-[#138a34] text-white font-semibold font-inter text-base py-4 px-10 rounded-full shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#179D3D]/50 focus:ring-offset-2"
          >
            {(() => {
              const ArrowIcon = Icons['ArrowRight'] || Icons['HelpCircle'];
              return (
                <>
                  <span>Start Donating Today</span>
                  <ArrowIcon size={18} strokeWidth={2} aria-hidden="true" />
                </>
              );
            })()}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
