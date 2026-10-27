import { useState } from 'react';
import { SITE, NAV_LINKS } from '../data.js';
import { Img, useModalBehavior } from './ui.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  useModalBehavior(menuOpen, close);
  const desktopLink = 'text-gray-600 hover:text-primary transition duration-300 text-[19px]';

  return (
    <>
      <header className="sticky top-0 z-50 bg-blush shadow-lg">
        <div className="container relative mx-auto flex items-center justify-between px-4">
          <Img src="/website/output-onlinepngtools.png" alt="Jain emblem" className="hidden lg:block" style={{ width: 100, height: 125 }} />

          <div className="z-50 shrink-0 pt-4 transition duration-500 hover:scale-105 lg:self-start">
            <Img src="/website/Mano_Milan_Final_Website.png" alt="Aaryan's Manomilan Logo" className="mx-auto lg:mx-0" style={{ width: 140, height: 155 }} />
          </div>

          <div className="hidden w-4 lg:block" />

          <div className="hidden flex-grow flex-col items-center justify-center pt-1 lg:flex">
            <h3 className="mb-5 text-[48px] font-bold text-maroon" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              <span className="text-white">||</span> जय जिनेन्द्र <span className="text-white">||</span>
            </h3>
            <nav className="mt-2 flex items-center gap-5 whitespace-nowrap text-sm font-medium" aria-label="Main">
              {NAV_LINKS.map((l) => <a key={l.label} href={l.href} className={desktopLink}>{l.label}</a>)}
              <span className="group relative inline-block">
                <span className={`cursor-pointer pb-2.5 ${desktopLink}`}>Registration Plan</span>
                <div className="absolute left-1/2 top-full z-[10000] mt-[5px] hidden min-w-[200px] -translate-x-1/2 overflow-hidden rounded-lg border-2 border-blush bg-white pt-[5px] shadow-lg group-hover:block">
                  {[['Registration', SITE.urls.register], ['Login', SITE.urls.login]].map(([label, href]) => (
                    <a key={label} href={href} className="block whitespace-nowrap px-4 py-3 text-base text-[#333] transition-colors hover:bg-blush hover:text-primary">{label}</a>
                  ))}
                </div>
              </span>
            </nav>
          </div>

          <Img src="/website/output-onlinepngtools.png" alt="Jain emblem" className="hidden lg:block" style={{ width: 100, height: 125 }} />

          {/* phone buttons */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <a href={SITE.urls.login} className="rounded-md border border-primary bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">Login</a>
            <a href={SITE.urls.register} className="whitespace-nowrap rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm">Register</a>
            <button className="ml-1 flex flex-col" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              {[0, 1, 2].map((i) => <span key={i} className="my-[3px] h-[3px] w-[25px] bg-maroon" />)}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[9998] h-screen overflow-y-auto bg-black/90">
          <button onClick={close} aria-label="Close menu" className="absolute right-5 top-5 z-[9999] text-[40px] leading-none text-white">&times;</button>
          <nav className="flex min-h-screen flex-col items-center justify-center p-5" aria-label="Mobile">
            <h3 className="mb-[30px] text-[32px] font-bold text-white">|| जय जिनेन्द्र ||</h3>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={close} className="w-full border-b border-white/10 py-[15px] text-center text-lg text-white">{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
