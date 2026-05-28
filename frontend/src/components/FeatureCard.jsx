import { motion } from 'framer-motion';

/**
 * icon: React node
 * title: string
 * description: string
 * variant: 'default' | 'tinted' | 'outlined'
 */
export default function FeatureCard({ icon, title, description, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-white shadow-md',
    tinted: 'bg-[#F5F5E8] shadow-sm border border-[#179D3D]/10',
    outlined: 'bg-white border border-gray-200 shadow-sm',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.03, boxShadow: '0 14px 36px rgba(23,157,61,0.13)' }}
      className={`rounded-2xl p-6 flex flex-col gap-4 ${variants[variant]} ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-[#179D3D]/12 text-[#179D3D] flex items-center justify-center text-2xl shrink-0">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, Nunito, system-ui' }}>
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
