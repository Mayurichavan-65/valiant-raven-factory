import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const MenuIcon = Icons['Menu'] || Icons['HelpCircle'];
const XIcon = Icons['X'] || Icons['HelpCircle'];
const LeafIcon = Icons['Leaf'] || Icons['HelpCircle'];
const ChevronDownIcon = Icons['ChevronDown'] || Icons['HelpCircle'];

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Impact', href: '#impact' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Partners', href: '#partners' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'FAQ', href: '#faq' },
];

const roles = ['Donor', 'NGO', 'Volunteer'];

export default function Header({ onLoginClick, onSignupClick }) {
  const [open, setOpen] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const [activeRole, setActiveRole] = useState('Donor');

  const handleRoleSelect = (role) => {
    setActiveRole(role);
    setRoleOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F5E8]/95 backdrop-blur-lg border-b-2 border-[#179D3D]/10 shadow-lg">
      <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center justify-between gap-6">

        <a
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          data-imagine-id="header-logo"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className="w-8 h-8 rounded-xl bg-[#179D3D] flex items-center justify-center shadow-md"
          >
            <LeafIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
          </motion.div>
          <span className="text-[#179D3D] font-bold text-xl tracking-tight" style={{fontFamily: 'Inter, Nunito, system-ui'}}>
            Food<span className="text-[#7ED957]">Relief</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map(({ label, href }, idx) => (
            <motion.a
              key={label}
              href={href}
              data-imagine-id={`header-nav-link-${idx}`}
              whileHover={{ y: -1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="relative px-3 py-2 text-xs font-semibold uppercase tracking-widest text-gray-600 hover:text-[#179D3D] transition-colors group"
            >
              {label}
              <span className="absolute bottom-1 left-3 right-3 h-px bg-[#179D3D] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </motion.a>
          ))}

          <div className="relative ml-2">
            <button
              onClick={() => setRoleOpen(!roleOpen)}
              data-imagine-id="header-role-selector"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[#179D3D] border border-[#179D3D]/30 rounded-full hover:bg-[#179D3D]/8 transition-colors"
            >
              <span data-imagine-id="header-active-role">{activeRole}</span>
              <ChevronDownIcon
                className={`w-3.5 h-3.5 transition-transform duration-200 ${roleOpen ? 'rotate-180' : ''}`}
                strokeWidth={2.5}
              />
            </button>
            <AnimatePresence>
              {roleOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute top-full mt-2 left-0 w-36 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-1"
                >
                  {roles.map((role, idx) => (
                    <button
                      key={role}
                      onClick={() => handleRoleSelect(role)}
                      data-imagine-id={`header-role-option-${idx}`}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                        activeRole === role
                          ? 'text-[#179D3D] bg-[#179D3D]/8'
                          : 'text-gray-600 hover:text-[#179D3D] hover:bg-[#F5F5E8]'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onLoginClick}
            data-imagine-id="header-login-btn"
            className="text-xs font-semibold uppercase tracking-widest text-[#179D3D] px-5 py-2.5 rounded-full border-2 border-[#179D3D] hover:bg-[#179D3D]/8 transition-colors"
          >
            Log In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(23,157,61,0.35)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onSignupClick}
            data-imagine-id="header-signup-btn"
            className="text-xs font-semibold uppercase tracking-widest text-white bg-[#179D3D] px-6 py-2.5 rounded-full shadow-md hover:bg-[#0f7a2e] transition-colors"
          >
            Get Started
          </motion.button>
        </div>

        <button
          className="lg:hidden p-2.5 rounded-xl text-gray-600 hover:text-[#179D3D] hover:bg-[#179D3D]/8 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open
            ? <XIcon className="w-5 h-5" strokeWidth={2.5} />
            : <MenuIcon className="w-5 h-5" strokeWidth={2.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#F5F5E8] border-t border-[#179D3D]/10"
          >
            <div className="px-6 pb-6 pt-3 space-y-1">
              {navLinks.map(({ label, href }, idx) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  data-imagine-id={`header-mobile-link-${idx}`}
                  className="block py-2.5 px-2 text-xs font-semibold uppercase tracking-widest text-gray-700 hover:text-[#179D3D] border-b border-gray-100 last:border-0 transition-colors"
                >
                  {label}
                </a>
              ))}

              <div className="pt-3 space-y-1">
                <p data-imagine-id="header-mobile-role-label" className="text-xs font-semibold uppercase tracking-widest text-gray-400 px-2 mb-2">I am a…</p>
                {roles.map((role, idx) => (
                  <button
                    key={role}
                    onClick={() => setActiveRole(role)}
                    data-imagine-id={`header-mobile-role-${idx}`}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors ${
                      activeRole === role
                        ? 'text-white bg-[#179D3D]'
                        : 'text-gray-600 hover:bg-[#179D3D]/8'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={onLoginClick}
                  data-imagine-id="header-mobile-login-btn"
                  className="flex-1 text-xs font-semibold uppercase tracking-widest text-[#179D3D] py-3 rounded-full border-2 border-[#179D3D] hover:bg-[#179D3D]/8 transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={onSignupClick}
                  data-imagine-id="header-mobile-signup-btn"
                  className="flex-1 text-xs font-semibold uppercase tracking-widest text-white bg-[#179D3D] py-3 rounded-full shadow-md transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
