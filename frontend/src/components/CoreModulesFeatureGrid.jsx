import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';

const MODULES = [
  {
    id: 'donor-dashboard',
    iconName: 'LayoutDashboard',
    title: 'Donor Dashboard',
    description:
      'Empower food businesses and individuals to log surplus inventory, schedule pickups, and track donation impact — all from a single, intuitive interface.',
    gradient: 'from-emerald-50 to-green-100',
    borderColor: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    accentColor: '#179D3D',
  },
  {
    id: 'ngo-matching',
    iconName: 'GitMerge',
    title: 'NGO Matching',
    description:
      'Smart algorithmic pairing connects verified NGOs and shelters with nearby surplus sources based on capacity, need, and food type — reducing waste at scale.',
    gradient: 'from-lime-50 to-green-50',
    borderColor: 'border-lime-200',
    iconBg: 'bg-lime-100',
    iconColor: 'text-lime-700',
    accentColor: '#7ED957',
  },
  {
    id: 'volunteer-coordination',
    iconName: 'Users',
    title: 'Volunteer Coordination',
    description:
      'Mobilize a network of committed volunteers with shift scheduling, route optimization, and real-time status updates to ensure no pickup is ever missed.',
    gradient: 'from-teal-50 to-emerald-50',
    borderColor: 'border-teal-200',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
    accentColor: '#0D9488',
  },
  {
    id: 'realtime-tracking',
    iconName: 'MapPin',
    title: 'Real-time Food Tracking',
    description:
      'Live GPS tracking and status updates give donors, NGOs, and volunteers full transparency over every food parcel — from surplus shelf to served plate.',
    gradient: 'from-green-50 to-lime-50',
    borderColor: 'border-green-200',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-700',
    accentColor: '#179D3D',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

function ModuleCard({ module, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = Icons[module?.iconName] || Icons['HelpCircle'];
  const ArrowIcon = Icons['ArrowUpRight'] || Icons['HelpCircle'];

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-2xl border ${
        module?.borderColor
      } bg-gradient-to-br ${module?.gradient} p-8 md:p-10 overflow-hidden cursor-default shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-green-100`}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{}}
        aria-hidden="true"
      />

      <motion.div
        animate={hovered ? { scale: 1.12, rotate: 6 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${
          module?.iconBg
        } ${module?.iconColor} mb-6 shadow-sm`}
      >
        <Icon size={26} strokeWidth={1.8} />
      </motion.div>

      <h3
        data-imagine-id={`core-modules-card-${module?.id}-title`}
        className="font-inter font-bold text-xl text-gray-900 mb-3 tracking-tight leading-snug"
      >
        {module?.title}
      </h3>

      <p
        data-imagine-id={`core-modules-card-${module?.id}-description`}
        className="font-inter text-gray-600 text-base leading-relaxed"
      >
        {module?.description}
      </p>

      <motion.div
        animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
        style={{ color: module?.accentColor }}
      >
        <span data-imagine-id={`core-modules-card-${module?.id}-learn-more`}>
          Learn more
        </span>
        <ArrowIcon size={15} strokeWidth={2.2} />
      </motion.div>

      <div
        className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10 pointer-events-none"
        style={{ background: module?.accentColor }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

function CoreModulesFeatureGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#F5F5E8] via-white to-[#F5F5E8] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-green-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-lime-100/30 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-18"
        >
          <span
            data-imagine-id="core-modules-eyebrow"
            className="inline-block font-inter text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-4 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100"
          >
            Platform Modules
          </span>

          <h2
            data-imagine-id="core-modules-heading"
            className="font-inter font-extrabold text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-tight mt-3 mb-5"
          >
            Four Systems. One Mission.
          </h2>

          <p
            data-imagine-id="core-modules-subheading"
            className="font-inter text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Our end-to-end platform ties together every link in the food
            redistribution chain — from surplus detection to delivery
            confirmation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {MODULES.map((module, index) => (
            <ModuleCard key={module?.id} module={module} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CoreModulesFeatureGrid;
