import { motion } from 'framer-motion';
import Badge from './Badge';

/**
 * tag: optional badge label
 * title: main heading (supports <br/> via dangerouslySetInnerHTML)
 * subtitle: supporting paragraph
 * align: 'center' | 'left'
 */
export default function SectionHeader({ tag, title, subtitle, align = 'center', className = '' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
    >
      {tag && <Badge variant="green" size="md">{tag}</Badge>}

      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
        style={{ fontFamily: 'Inter, Nunito, system-ui' }}
        dangerouslySetInnerHTML={typeof title === 'string' ? { __html: title } : undefined}
      >
        {typeof title !== 'string' ? title : undefined}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed" style={{ fontFamily: 'Inter, Nunito, system-ui' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
