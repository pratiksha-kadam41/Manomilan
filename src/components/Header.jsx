import { useState } from 'react';
import { Img, useModalBehavior } from './ui.jsx';

export default function Header({ SITE, NAV_LINKS }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  useModalBehavior(menuOpen, close);
  const desktopLink = 'text-gray-700 transition-colors duration-300 hover:text-primary';

  return (
    <>
      <header className="sticky top-0 z-50 bg-blush shadow-lg">
        <div className="container mx-auto flex min-h-20 items-center justify-between gap-3 px-4 py-2 xl:min-h-36 xl:gap-6 xl:py-3">
          <Img
            src="/website/output-onlinepngtools.png"
            alt="Jain emblem"
            className="hidden h-24 w-16 shrink-0 object-contain xl:block"
          />

          <div className="shrink-0 transition-transform duration-300 hover:scale-105">
            <Img
              src="/website/Mano_Milan_Final_Website.png"
              alt="Aaryan's Manomilan Logo"
              className="h-20 w-24 object-contain sm:h-24 sm:w-32 xl:h-32 xl:w-36"
            />
          </div>

          <div className="hidden min-w-0 flex-1 flex-col items-center justify-center xl:flex">
            <h3 className="mb-4 text-center text-4xl font-bold text-maroon 2xl:text-5xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              <span className="text-white">||</span> जय जिनेन्द्र <span className="text-white">||</span>
            </h3>
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-base font-medium 2xl:gap-x-6" aria-label="Main">
              {NAV_LINKS.map((l) => <a key={l.label} href={l.href} className={`${desktopLink} whitespace-nowrap`}>{l.label}</a>)}
            </nav>
          </div>

          <Img
            src="/website/output-onlinepngtools.png"
            alt="Jain emblem"
            className="hidden h-24 w-16 shrink-0 object-contain xl:block"
          />

          {/* phone buttons */}
          <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
            <a href={SITE.urls.login} className="rounded-md border border-primary bg-white px-3 py-2 text-xs font-semibold text-primary shadow-sm">Login</a>
            <a href={SITE.urls.register} className="whitespace-nowrap rounded-md bg-primary px-3 py-2 text-xs font-semibold text-white shadow-sm">Register</a>
            <button className="ml-1 flex flex-col p-1" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
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
            <a href={SITE.urls.register} onClick={close} className="w-full border-b border-white/10 py-[15px] text-center text-lg text-white">Registration</a>
            <a href={SITE.urls.login} onClick={close} className="w-full border-b border-white/10 py-[15px] text-center text-lg text-white">Login</a>
          </nav>
        </div>
      )}
    </>
  );
}
