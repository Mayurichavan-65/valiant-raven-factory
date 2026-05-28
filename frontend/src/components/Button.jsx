import { motion } from 'framer-motion';

/**
 * variant: 'primary' | 'secondary' | 'outline' | 'ghost'
 * size: 'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#179D3D] focus-visible:ring-offset-2';

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const variants = {
    primary: 'bg-[#179D3D] text-white shadow-md hover:bg-[#0f7a2e] disabled:opacity-50',
    secondary: 'bg-[#7ED957] text-[#1a1a1a] shadow-md hover:bg-[#65c443] disabled:opacity-50',
    outline: 'border-2 border-[#179D3D] text-[#179D3D] hover:bg-[#179D3D]/10 disabled:opacity-50',
    ghost: 'text-[#179D3D] hover:bg-[#179D3D]/10 disabled:opacity-50',
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? {} : { scale: 1.04 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
}
