/**
 * variant: 'green' | 'accent' | 'gray' | 'warm' | 'outline'
 * size: 'sm' | 'md'
 */
export default function Badge({ children, variant = 'green', size = 'sm', className = '' }) {
  const base = 'inline-flex items-center gap-1 font-semibold rounded-full';

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3.5 py-1 text-sm',
  };

  const variants = {
    green: 'bg-[#179D3D]/12 text-[#179D3D]',
    accent: 'bg-[#7ED957]/25 text-[#2d6e17]',
    gray: 'bg-gray-100 text-gray-600',
    warm: 'bg-[#F5F5E8] text-[#7a6a30] border border-[#d4c97a]/40',
    outline: 'border border-[#179D3D] text-[#179D3D] bg-transparent',
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
