import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';

const DEFAULT_STATS = [
  {
    id: 'meals',
    icon: 'UtensilsCrossed',
    value: 4200000,
    label: 'Meals Served',
    caption: 'Nutritious meals delivered to families in need',
    suffix: '+',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
  {
    id: 'food',
    icon: 'Leaf',
    value: 980000,
    label: 'KG Food Rescued',
    caption: 'Surplus food saved from landfills and redirected',
    suffix: '+',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    id: 'ngos',
    icon: 'Building2',
    value: 340,
    label: 'Active NGOs',
    caption: 'Partner organizations distributing food daily',
    suffix: '',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    id: 'volunteers',
    icon: 'HandHeart',
    value: 12500,
    label: 'Volunteers Engaged',
    caption: 'Dedicated people powering the redistribution network',
    suffix: '+',
    color: 'text-lime-600',
    bg: 'bg-lime-50',
    border: 'border-lime-100',
  },
];

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}

function useCounter(target, isActive, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let startTime = null;
    const startValue = 0;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startValue + (target - startValue) * eased));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isActive, target, duration]);

  return count;
}

function StatCard({ stat, index, isActive }) {
  const StatIcon = Icons[stat?.icon] || Icons['HelpCircle'];
  const count = useCounter(stat?.value ?? 0, isActive, 2200);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`relative flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border ${stat?.border} ${stat?.bg} shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default`}
    >
      <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${stat?.bg} border ${stat?.border} mb-5 shadow-inner`}>
        <StatIcon size={26} className={stat?.color} strokeWidth={1.8} />
      </div>

      <p
        data-imagine-id={`impactstatstrip-stat-${stat?.id}-value`}
        className={`text-4xl md:text-5xl font-bold font-inter tracking-tight ${stat?.color} leading-none mb-1`}
      >
        {formatNumber(count)}{stat?.suffix}
      </p>

      <h3
        data-imagine-id={`impactstatstrip-stat-${stat?.id}-label`}
        className="mt-2 text-base font-semibold font-nunito text-gray-800 tracking-wide"
      >
        {stat?.label}
      </h3>

      <p
        data-imagine-id={`impactstatstrip-stat-${stat?.id}-caption`}
        className="mt-2 text-sm text-gray-500 font-inter leading-relaxed max-w-[180px]"
      >
        {stat?.caption}
      </p>

      <div
        aria-hidden="true"
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-t-full ${stat?.color.replace('text-', 'bg-')} opacity-60`}
      />
    </motion.div>
  );
}

export default function ImpactStatsStrip({ impactStats }) {
  const stats = impactStats ?? DEFAULT_STATS;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="impact"
      aria-label="Impact statistics"
      className="relative w-full overflow-hidden py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#F5F5E8] via-white to-green-50 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 h-96 bg-lime-100 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span
            data-imagine-id="impactstatstrip-eyebrow"
            className="inline-block text-xs font-semibold font-nunito tracking-[0.18em] uppercase text-green-600 bg-green-50 border border-green-100 px-4 py-1.5 rounded-full mb-4"
          >
            Real-World Impact
          </span>
          <h2
            data-imagine-id="impactstatstrip-heading"
            className="text-3xl md:text-4xl font-bold font-inter text-gray-900 tracking-tight"
          >
            Every Number Tells a Story
          </h2>
          <p
            data-imagine-id="impactstatstrip-subheading"
            className="mt-3 text-base md:text-lg text-gray-500 font-inter max-w-xl mx-auto leading-relaxed"
          >
            Transparent metrics from our redistribution network — updated in real time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats?.map((stat, idx) => (
            <StatCard
              key={stat?.id ?? idx}
              stat={stat}
              index={idx}
              isActive={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          className="mt-12 flex items-center justify-center gap-2"
        >
          <span aria-hidden="true" className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p
            data-imagine-id="impactstatstrip-live-label"
            className="text-xs font-inter text-gray-400 tracking-wide"
          >
            Live data from verified partner reports
          </p>
        </motion.div>
      </div>
    </section>
  );
}
