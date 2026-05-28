import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * name, role, avatar, quote, rating (1-5)
 */
export default function TestimonialCard({ name, role, avatar, quote, rating = 5, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(23,157,61,0.12)' }}
      className={`bg-white rounded-2xl p-6 shadow-md flex flex-col gap-4 ${className}`}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-[#7ED957] fill-[#7ED957]' : 'text-gray-200 fill-gray-200'}`} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-sm leading-relaxed flex-1">"{quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {avatar ? (
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#179D3D]/15 flex items-center justify-center text-[#179D3D] font-bold text-sm">
            {name?.[0]}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          {role && <p className="text-xs text-gray-400">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
}
