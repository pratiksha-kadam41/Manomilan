import { useState } from 'react';
import SafeImage from '../common/SafeImage.jsx';
import NavItem from './NavItem.jsx';
import MobileMenu from './MobileMenu.jsx';
import { NAV_LINKS, SITE } from '../../config/site.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 bg-blush shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 relative">
          <SafeImage src="/website/output-onlinepngtools.png" alt="Jain emblem" className="hidden lg:block" style={{ width: 100, height: 125 }} />

          <div className="z-50 shrink-0 pt-4 lg:self-start transition duration-500 hover:scale-105">
            <SafeImage src="/website/Mano_Milan_Final_Website.png" alt="Aaryan's Manomilan Logo" className="mx-auto lg:mx-0" style={{ width: 140, height: 155 }} />
          </div>

          <div className="hidden lg:block w-4" />

          <div className="hidden lg:flex flex-col items-center justify-center flex-grow pt-1">
            <h3 className="text-[48px] text-maroon mb-5 font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              <span className="text-white">||</span> जय जिनेन्द्र <span className="text-white">||</span>
            </h3>
            <nav className="flex items-center gap-5 whitespace-nowrap text-sm font-medium mt-2" aria-label="Main">
              {NAV_LINKS.map((l) => <NavItem key={l.label} {...l}>{l.label}</NavItem>)}
              <span className="group relative inline-block">
                <span className="cursor-pointer pb-2.5 text-gray-600 hover:text-primary transition duration-300 text-[19px]">Registration Plan</span>
                <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 mt-[5px] pt-[5px] min-w-[200px] bg-white rounded-lg overflow-hidden border-2 border-blush shadow-lg z-[10000]">
                  {[['Registration', SITE.urls.register], ['Login', SITE.urls.login]].map(([label, href]) => (
                    <a key={label} href={href} className="block px-4 py-3 text-base text-[#333] hover:bg-blush hover:text-primary transition-colors whitespace-nowrap">{label}</a>
                  ))}
                </div>
              </span>
            </nav>
          </div>

          <SafeImage src="/website/output-onlinepngtools.png" alt="Jain emblem" className="hidden lg:block" style={{ width: 100, height: 125 }} />

          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <a href={SITE.urls.login} className="text-xs font-semibold bg-white text-primary border border-primary px-3 py-1.5 rounded-md shadow-sm hover:bg-gray-50 transition">Login</a>
            <a href={SITE.urls.register} className="text-xs font-semibold bg-primary text-white px-3 py-1.5 rounded-md shadow-sm hover:bg-red-700 transition whitespace-nowrap">Register</a>
            <button className="ml-1 flex flex-col" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              {[0, 1, 2].map((i) => <span key={i} className="my-[3px] h-[3px] w-[25px] bg-maroon" />)}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}