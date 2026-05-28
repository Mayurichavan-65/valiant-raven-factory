import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const LeafIcon = Icons['Leaf'] || Icons['HelpCircle'];
const LinkedinIcon = Icons['Linkedin'] || Icons['HelpCircle'];
const InstagramIcon = Icons['Instagram'] || Icons['HelpCircle'];
const TwitterIcon = Icons['Twitter'] || Icons['HelpCircle'];

const platformLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Impact', href: '#impact' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Volunteer', href: '#volunteer' },
];

const resourceLinks = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { key: 'Linkedin', Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { key: 'Instagram', Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { key: 'Twitter', Icon: TwitterIcon, label: 'Twitter', href: '#' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#F5F5E8] to-[#EEEEDE] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#179D3D] via-[#7ED957] to-[#179D3D] rounded-full" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#7ED957]/8 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#179D3D]/6 blur-2xl" />
      </div>

      <motion.div
        className="relative max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 pt-14 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 pb-10 border-b border-[#179D3D]/15">

          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2 w-fit" data-imagine-id="footer-logo">
              <div className="w-8 h-8 rounded-lg bg-[#179D3D] flex items-center justify-center shadow-sm">
                <LeafIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[#1a1a1a] font-bold text-xl tracking-tight" style={{fontFamily: 'Inter, Nunito, system-ui'}}>
                FoodRelief
              </span>
            </a>
            <p
              className="text-sm text-[#555] leading-relaxed max-w-xs"
              style={{fontFamily: 'Inter, Nunito, system-ui'}}
              data-imagine-id="footer-mission"
            >
              Redirecting surplus food to communities that need it most — one meal at a time.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {socials.map(({ key, Icon, label, href }) => (
                <motion.a
                  key={key}
                  href={href}
                  aria-label={label}
                  data-imagine-id={`footer-social-${key.toLowerCase()}`}
                  className="w-10 h-10 rounded-full bg-white border border-[#179D3D]/20 flex items-center justify-center text-[#555] hover:text-[#179D3D] hover:border-[#179D3D]/50 hover:shadow-md transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h4
              className="text-xs font-semibold tracking-widest uppercase text-[#179D3D]"
              style={{fontFamily: 'Inter, Nunito, system-ui'}}
              data-imagine-id="footer-platform-heading"
            >
              Platform
            </h4>
            <ul className="flex flex-col gap-3">
              {platformLinks.map((link, idx) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-[#444] hover:text-[#179D3D] transition-colors duration-200 font-medium"
                    style={{fontFamily: 'Inter, Nunito, system-ui'}}
                    data-imagine-id={`footer-platform-link-${idx}`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h4
              className="text-xs font-semibold tracking-widest uppercase text-[#179D3D]"
              style={{fontFamily: 'Inter, Nunito, system-ui'}}
              data-imagine-id="footer-resources-heading"
            >
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link, idx) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-[#444] hover:text-[#179D3D] transition-colors duration-200 font-medium"
                    style={{fontFamily: 'Inter, Nunito, system-ui'}}
                    data-imagine-id={`footer-resource-link-${idx}`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p
            className="text-xs text-[#888]"
            style={{fontFamily: 'Inter, Nunito, system-ui'}}
            data-imagine-id="footer-copyright"
          >
            © {new Date().getFullYear()} FoodRelief. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-[#888] hover:text-[#179D3D] transition-colors duration-200"
              style={{fontFamily: 'Inter, Nunito, system-ui'}}
              data-imagine-id="footer-privacy"
            >
              Privacy Policy
            </a>
            <span className="text-[#ccc] text-xs">·</span>
            <a
              href="#"
              className="text-xs text-[#888] hover:text-[#179D3D] transition-colors duration-200"
              style={{fontFamily: 'Inter, Nunito, system-ui'}}
              data-imagine-id="footer-terms"
            >
              Terms of Service
            </a>
            <span className="text-[#ccc] text-xs">·</span>
            <a
              href="#"
              className="text-xs text-[#888] hover:text-[#179D3D] transition-colors duration-200"
              style={{fontFamily: 'Inter, Nunito, system-ui'}}
              data-imagine-id="footer-cookies"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
