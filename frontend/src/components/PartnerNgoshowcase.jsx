import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const DEFAULT_PARTNERS = [
  {
    id: 1,
    name: 'World Food Programme',
    location: 'Rome, Italy',
    yearsActive: 14,
    abbreviation: 'WFP',
    color: '#179D3D',
    bg: '#E8F5ED',
  },
  {
    id: 2,
    name: 'Feeding America',
    location: 'Chicago, USA',
    yearsActive: 9,
    abbreviation: 'FA',
    color: '#E07B39',
    bg: '#FDF0E8',
  },
  {
    id: 3,
    name: 'Action Against Hunger',
    location: 'Paris, France',
    yearsActive: 12,
    abbreviation: 'AAH',
    color: '#C0392B',
    bg: '#FDECEA',
  },
  {
    id: 4,
    name: 'Food For All',
    location: 'London, UK',
    yearsActive: 6,
    abbreviation: 'FFA',
    color: '#2980B9',
    bg: '#EAF4FB',
  },
  {
    id: 5,
    name: 'No Kid Hungry',
    location: 'Washington, USA',
    yearsActive: 8,
    abbreviation: 'NKH',
    color: '#8E44AD',
    bg: '#F5EEF8',
  },
  {
    id: 6,
    name: 'Rescue Food',
    location: 'Toronto, Canada',
    yearsActive: 5,
    abbreviation: 'RF',
    color: '#16A085',
    bg: '#E8F8F5',
  },
  {
    id: 7,
    name: 'Second Harvest',
    location: 'New York, USA',
    yearsActive: 11,
    abbreviation: 'SH',
    color: '#D4AC0D',
    bg: '#FEF9E7',
  },
  {
    id: 8,
    name: 'Global FoodBanking',
    location: 'Brussels, Belgium',
    yearsActive: 7,
    abbreviation: 'GFB',
    color: '#1A5276',
    bg: '#EAF2F8',
  },
];

const MapPinIcon = Icons['MapPin'] || Icons['HelpCircle'];
const CalendarIcon = Icons['Calendar'] || Icons['HelpCircle'];
const UsersIcon = Icons['Users'] || Icons['HelpCircle'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

function PartnerCard({ partner, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        className="relative bg-white rounded-2xl p-8 flex flex-col items-center justify-center cursor-default overflow-hidden"
        style={{}}
        animate={{
          boxShadow: hovered
            ? '0 16px 48px 0 rgba(23,157,61,0.13), 0 2px 8px 0 rgba(0,0,0,0.07)'
            : '0 2px 12px 0 rgba(0,0,0,0.06), 0 1px 3px 0 rgba(0,0,0,0.04)',
          y: hovered ? -6 : 0,
        }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-xl font-bold font-inter tracking-tight select-none"
          style={{ backgroundColor: partner?.bg, color: partner?.color }}
          animate={{
            scale: hovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <span data-imagine-id={`partner-ngoshowcase-abbr-${index}`}>{partner?.abbreviation}</span>
        </motion.div>

        <p
          data-imagine-id={`partner-ngoshowcase-name-${index}`}
          className="text-sm font-semibold font-inter text-center text-gray-800 leading-snug"
        >
          {partner?.name}
        </p>

        <AnimatePresence>
          {hovered && (
            <motion.div
              key="tooltip"
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-2 px-5 py-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(4px)' }}
            >
              <p
                data-imagine-id={`partner-ngoshowcase-tooltip-name-${index}`}
                className="text-sm font-bold font-inter text-gray-900 text-center leading-snug"
              >
                {partner?.name}
              </p>
              <div className="flex items-center gap-1.5 text-gray-500">
                <MapPinIcon className="w-3.5 h-3.5 shrink-0" style={{ color: partner?.color }} />
                <span
                  data-imagine-id={`partner-ngoshowcase-location-${index}`}
                  className="text-xs font-inter"
                >
                  {partner?.location}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <CalendarIcon className="w-3.5 h-3.5 shrink-0" style={{ color: partner?.color }} />
                <span
                  data-imagine-id={`partner-ngoshowcase-years-${index}`}
                  className="text-xs font-inter"
                >
                  {partner?.yearsActive} years active
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function PartnerNgoshowcase({ partners }) {
  const partnerList = partners ?? DEFAULT_PARTNERS;

  return (
    <section
      id="partners"
      className="relative w-full py-24 px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5E8] via-white to-[#F0FAF3]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-20 blur-3xl bg-[#7ED957]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-10 blur-2xl bg-[#179D3D]" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#179D3D" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headingVariants}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#E8F5ED] text-[#179D3D] rounded-full px-4 py-1.5 mb-5">
            <UsersIcon className="w-4 h-4" />
            <span
              data-imagine-id="partner-ngoshowcase-badge"
              className="text-xs font-semibold font-inter tracking-wide uppercase"
            >
              Our Network
            </span>
          </div>

          <h2
            data-imagine-id="partner-ngoshowcase-heading"
            className="text-4xl md:text-5xl font-bold font-inter text-gray-900 leading-tight tracking-tight mb-4"
          >
            Trusted by{' '}
            <span className="text-[#179D3D]">leading organizations</span>
          </h2>

          <p
            data-imagine-id="partner-ngoshowcase-subheading"
            className="text-base md:text-lg text-gray-500 font-inter max-w-xl mx-auto leading-relaxed"
          >
            We partner with world-class NGOs, shelters, and food banks across the globe to ensure no meal goes to waste.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
        >
          {partnerList?.map((partner, index) => (
            <PartnerCard key={partner?.id ?? index} partner={partner} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.45, ease: 'easeOut' }}
          className="mt-14 text-center"
        >
          <p
            data-imagine-id="partner-ngoshowcase-footnote"
            className="text-sm font-inter text-gray-400"
          >
            +{partnerList?.length > 8 ? partnerList.length - 8 : 40} more organizations worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PartnerNgoshowcase;
