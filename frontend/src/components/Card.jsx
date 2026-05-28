import { motion } from 'framer-motion';

/**
 * variant: 'default' | 'elevated' | 'outlined' | 'tinted'
 * hover: boolean — enable scale/shadow hover
 */
export default function Card({
  children,
  variant = 'default',
  hover = false,
  className = '',
  onClick,
  ...props
}) {
  const base = 'rounded-2xl overflow-hidden transition-shadow';

  const variants = {
    default: 'bg-white shadow-md',
    elevated: 'bg-white shadow-xl',
    outlined: 'bg-white border border-gray-200 shadow-sm',
    tinted: 'bg-[#F5F5E8] border border-[#179D3D]/15 shadow-sm',
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { scale: 1.025, boxShadow: '0 12px 32px rgba(23,157,61,0.15)' } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`${base} ${variants[variant]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
