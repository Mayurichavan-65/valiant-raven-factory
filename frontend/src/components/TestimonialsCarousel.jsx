import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Food Donor · Restaurant Owner',
    quote: 'We used to discard hundreds of meals weekly. Now every surplus plate finds someone who truly needs it. The platform made giving effortless and meaningful.',
    signature: 'Sarah M.',
    rating: 5,
    avatar: 'https://placehold.co/150x150/d4edda/179D3D?text=SM',
  },
  {
    id: 2,
    name: 'James Okafor',
    role: 'NGO Coordinator · FeedHope Africa',
    quote: 'Coordinating food pickups used to be a logistical nightmare. This platform streamlined everything — real-time updates, verified donors, and zero food wasted.',
    signature: 'James O.',
    rating: 5,
    avatar: 'https://placehold.co/150x150/d4edda/179D3D?text=JO',
  },
  {
    id: 3,
    name: 'Priya Nair',
    role: 'Volunteer · Community Driver',
    quote: 'I volunteer on weekends and this app makes it incredibly simple to find nearby pickups, plan routes, and see the direct impact of every delivery I make.',
    signature: 'Priya N.',
    rating: 5,
    avatar: 'https://placehold.co/150x150/d4edda/179D3D?text=PN',
  },
  {
    id: 4,
    name: 'Marcus Chen',
    role: 'Shelter Director · Sunrise Haven',
    quote: 'Our shelter now receives consistent, quality food donations. The reliability has let us focus on care rather than scrambling for meal supplies every day.',
    signature: 'Marcus C.',
    rating: 5,
    avatar: 'https://placehold.co/150x150/d4edda/179D3D?text=MC',
  },
];

const StarRating = ({ rating, index }) => {
  const StarIcon = Icons['Star'] || Icons['HelpCircle'];
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          size={14}
          data-imagine-id={`testimonialscarousel-star-${index}-${i}`}
          className={i < rating ? 'text-[#179D3D] fill-[#179D3D]' : 'text-gray-300 fill-gray-300'}
        />
      ))}
    </div>
  );
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function TestimonialsCarousel({ testimonials }) {
  const items = testimonials?.length ? testimonials : DEFAULT_TESTIMONIALS;
  const [[activeIndex, direction], setPage] = useState([0, 0]);

  const ChevronLeftIcon = Icons['ChevronLeft'] || Icons['HelpCircle'];
  const ChevronRightIcon = Icons['ChevronRight'] || Icons['HelpCircle'];
  const QuoteIcon = Icons['Quote'] || Icons['HelpCircle'];

  const paginate = useCallback(
    (newDirection) => {
      setPage(([prev]) => [
        (prev + newDirection + items.length) % items.length,
        newDirection,
      ]);
    },
    [items.length]
  );

  const goTo = useCallback(
    (idx) => {
      setPage(([prev]) => [idx, idx > prev ? 1 : -1]);
    },
    []
  );

  const current = items?.[activeIndex];

  return (
    <section
      className="relative py-24 px-6 md:px-12 overflow-hidden"
      aria-label="Testimonials"
      style={{}}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#F5F5E8] via-white to-[#eaf7ed] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#7ED957] opacity-5 translate-x-1/3 -translate-y-1/3 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#179D3D] opacity-5 -translate-x-1/4 translate-y-1/4 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-screen-xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span
            data-imagine-id="testimonialscarousel-eyebrow"
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#179D3D] mb-4 font-inter"
          >
            Real Stories
          </span>
          <h2
            data-imagine-id="testimonialscarousel-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 font-nunito leading-tight"
          >
            Voices Behind the Change
          </h2>
          <p
            data-imagine-id="testimonialscarousel-subheading"
            className="mt-4 text-gray-500 text-lg max-w-xl mx-auto font-inter"
          >
            Donors, NGOs, shelters, and volunteers share what this platform means to them.
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-2xl mx-auto" style={{ minHeight: '320px' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.42, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10 md:p-12 flex flex-col gap-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <img
                        src={current?.avatar}
                        alt={current?.name}
                        data-imagine-id={`testimonialscarousel-avatar-${activeIndex}`}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#7ED957] shadow-sm"
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/150x150/e2e8f0/64748b?text=User';
                        }}
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                      <span
                        data-imagine-id={`testimonialscarousel-name-${activeIndex}`}
                        className="font-semibold text-gray-900 text-base font-nunito leading-tight"
                      >
                        {current?.name}
                      </span>
                      <span
                        data-imagine-id={`testimonialscarousel-role-${activeIndex}`}
                        className="text-xs text-[#179D3D] font-medium tracking-wide font-inter"
                      >
                        {current?.role}
                      </span>
                      <StarRating rating={current?.rating ?? 5} index={activeIndex} />
                    </div>
                    <div className="ml-auto text-[#7ED957] opacity-40">
                      <QuoteIcon size={36} strokeWidth={1.5} />
                    </div>
                  </div>

                  <blockquote
                    data-imagine-id={`testimonialscarousel-quote-${activeIndex}`}
                    className="text-gray-700 text-lg italic leading-relaxed font-inter flex-1"
                  >
                    &ldquo;{current?.quote}&rdquo;
                  </blockquote>

                  <p
                    data-imagine-id={`testimonialscarousel-signature-${activeIndex}`}
                    className="text-sm text-gray-400 font-inter tracking-wide"
                  >
                    — {current?.signature}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              data-imagine-id="testimonialscarousel-prev-btn"
              className="w-11 h-11 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:border-[#179D3D] hover:text-[#179D3D] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#179D3D]"
            >
              <ChevronLeftIcon size={18} />
            </motion.button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  data-imagine-id={`testimonialscarousel-dot-${idx}`}
                  onClick={() => goTo(idx)}
                  className={`transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#179D3D] ${
                    idx === activeIndex
                      ? 'w-6 h-2.5 bg-[#179D3D]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-[#7ED957]'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              data-imagine-id="testimonialscarousel-next-btn"
              className="w-11 h-11 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:border-[#179D3D] hover:text-[#179D3D] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#179D3D]"
            >
              <ChevronRightIcon size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
