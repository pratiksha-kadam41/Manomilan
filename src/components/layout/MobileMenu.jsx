import NavItem from './NavItem.jsx';
import useModalBehavior from '../../hooks/useModalBehavior.js';
import { NAV_LINKS } from '../../config/site.js';

export default function MobileMenu({ open, onClose }) {
  useModalBehavior(open, onClose);
  if (!open) return null;
  const link = 'w-full text-center text-lg text-white py-[15px] border-b border-white/10';
  return (
    <div className="fixed inset-0 z-[9998] h-screen overflow-y-auto bg-black/90">
      <button onClick={onClose} aria-label="Close menu" className="absolute top-5 right-5 z-[9999] text-[40px] leading-none text-white">&times;</button>
      <nav className="flex min-h-screen flex-col items-center justify-center p-5" aria-label="Mobile">
        <h3 className="mb-[30px] text-[32px] font-bold text-white">|| जय जिनेन्द्र ||</h3>
        {NAV_LINKS.map((l) => (
          <NavItem key={l.label} {...l} onClick={onClose} className={link}>{l.label}</NavItem>
        ))}
      </nav>
    </div>
  );
}