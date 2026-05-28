import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import * as Icons from 'lucide-react';

const ROLES = [
  { icon: 'Truck', label: 'Food Pickup Driver' },
  { icon: 'PackageCheck', label: 'Sorting & Packing' },
  { icon: 'Users', label: 'Community Coordinator' },
];

export default function VolunteerCallToAction({ onVolunteerClick }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeOut' } },
  };

  return (
    <section
      id="volunteer"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#F5F5E8] via-white to-[#eef7ee] py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={undefined}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vol-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#179D3D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vol-dots)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 md:px-12 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16"
        >
          <motion.div
            variants={imageVariants}
            className="relative w-full flex-shrink-0 lg:w-[46%]"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                data-imagine-id="volunteercalltoaction-image"
                src="https://placehold.co/720x520/d4edda/179D3D?text=Volunteers+in+Action"
                alt="A team of volunteers sorting and packing surplus food for redistribution"
                className="h-[340px] w-full object-cover md:h-[440px] lg:h-[520px]"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/720x520/d4edda/179D3D?text=Volunteers';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#179D3D]/30 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ delay: 0.55, duration: 0.5, ease: 'easeOut' }}
              className="absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg md:-bottom-6 md:-right-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#179D3D]/10">
                {(() => {
                  const HeartIcon = Icons['HeartHandshake'] || Icons['Heart'];
                  return <HeartIcon className="h-5 w-5 text-[#179D3D]" strokeWidth={2} />;
                })()}
              </div>
              <div>
                <p data-imagine-id="volunteercalltoaction-badge-stat" className="text-sm font-bold text-gray-900 font-nunito leading-tight">1,200+</p>
                <p data-imagine-id="volunteercalltoaction-badge-label" className="text-xs text-gray-500 font-inter">Active Volunteers</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex w-full flex-col items-start gap-7 lg:w-[54%]"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              {(() => {
                const LeafIcon = Icons['Leaf'] || Icons['HelpCircle'];
                return <LeafIcon className="h-4 w-4 text-[#179D3D]" strokeWidth={2.5} />;
              })()}
              <span
                data-imagine-id="volunteercalltoaction-eyebrow"
                className="text-xs font-semibold uppercase tracking-widest text-[#179D3D] font-inter"
              >
                Make a Difference
              </span>
            </motion.div>

            <motion.h2
              data-imagine-id="volunteercalltoaction-headline"
              variants={fadeUp}
              className="text-4xl font-extrabold leading-tight text-gray-900 font-nunito md:text-5xl"
            >
              Join as a{' '}
              <span className="text-[#179D3D]">Volunteer</span>
            </motion.h2>

            <motion.p
              data-imagine-id="volunteercalltoaction-body"
              variants={fadeUp}
              className="text-lg leading-relaxed text-gray-600 font-inter"
            >
              Every meal saved starts with someone like you. Our volunteers are the backbone of the food redistribution chain — picking up surplus, sorting donations, and delivering hope directly to shelters and families in need. No special skills required, just a willingness to act.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 w-full">
              <p
                data-imagine-id="volunteercalltoaction-roles-label"
                className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-inter"
              >
                Open Roles
              </p>
              <div className="flex flex-wrap gap-3">
                {ROLES.map((role, idx) => {
                  const RoleIcon = Icons[role?.icon] || Icons['HelpCircle'];
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.04, y: -2 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="flex items-center gap-2 rounded-full border border-[#179D3D]/20 bg-white px-4 py-2 shadow-sm"
                    >
                      <RoleIcon className="h-4 w-4 text-[#179D3D]" strokeWidth={2} />
                      <span
                        data-imagine-id={`volunteercalltoaction-role-${idx}-label`}
                        className="text-sm font-medium text-gray-700 font-inter"
                      >
                        {role?.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <motion.button
                data-imagine-id="volunteercalltoaction-cta-button"
                onClick={() => onVolunteerClick?.()}
                whileHover={{ scale: 1.045, boxShadow: '0 8px 32px 0 rgba(23,157,61,0.28)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="inline-flex items-center gap-3 rounded-full bg-[#179D3D] px-10 py-4 text-base font-bold text-white shadow-md font-nunito focus:outline-none focus-visible:ring-4 focus-visible:ring-[#179D3D]/50"
                aria-label="Become a Volunteer — sign up now"
              >
                {(() => {
                  const ArrowIcon = Icons['ArrowRight'] || Icons['HelpCircle'];
                  return (
                    <>
                      Become a Volunteer
                      <ArrowIcon className="h-5 w-5" strokeWidth={2.5} />
                    </>
                  );
                })()}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
