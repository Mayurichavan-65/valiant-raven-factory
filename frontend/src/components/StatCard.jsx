import { motion } from 'framer-motion';

/**
 * value: string  e.g. "2M+"
 * label: string
 * icon: React node
 * color: 'green' | 'accent' | 'warm'
 */
export default function StatCard({ value, label, icon, color = 'green', className = '' }) {
  const colors = {
    green: 'bg-[#179D3D]/10 text-[#179D3D]',
    accent: 'bg-[#7ED957]/20 text-[#2d6e17]',
    warm: 'bg-amber-50 text-amber-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.04, boxShadow: '0 10px 28px rgba(23,157,61,0.13)' }}
      className={`bg-white rounded-2xl p-6 shadow-md flex flex-col gap-3 ${className}`}
    >
      {icon && (
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${colors[color]}`}>
          {icon}
        </div>
      )}
      <div>
        <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Nunito, system-ui' }}>{value}</p>
        <p className="text-sm text-gray-500 mt-0.5 leading-snug">{label}</p>
      </div>
    </motion.div>
  );
}
