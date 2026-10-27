import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaHeart } from 'react-icons/fa';
import {
  SITE, NAV_LINKS, FOOTER_QUICK_LINKS, FOOTER_COMMUNITY_LINKS,
  HERO_BACKGROUNDS, LEFT_REELS, RIGHT_REELS, WHY_CHOOSE, COMMITTEE, GALLERY,
  DIGAMBAR, SHWETAMBAR, PRIVACY_INTRO, PRIVACY_SECTIONS,
} from './data.js';

/* ------------------------------ small helpers ------------------------------ */

// Moves to the next slide every `delay` ms.
function useAutoSlider(length, delay) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (length < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), delay);
    return () => clearInterval(id);
  }, [length, delay]);
  return index;
}

// While open: stops page scrolling and closes on the Escape key.
function useModalBehavior(open, onClose) {
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);
}

// An image that quietly disappears if the file is missing (the box behind it stays visible).
// `fallback` = a second picture to try first.
function Img({ src, fallback, alt = '', ...props }) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  const onError = () => (fallback && current === src ? setCurrent(fallback) : setFailed(true));
  return <img src={current} alt={alt} onError={onError} loading="lazy" {...props} />;
}

const initials = (name) =>
  name.replace(/^(Mr|Mrs|Ms)\.?\s*/i, '').split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

function Modal({ open, title, onClose, maxWidth = 600, tall = false, children }) {
  useModalBehavior(open, onClose);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] overflow-auto bg-black/60"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog" aria-modal="true" aria-label={title}
    >
      <div
        className={`mx-auto flex w-[90%] flex-col rounded-xl bg-[#fefefe] shadow-2xl ${tall ? 'my-[3%] max-h-[85vh]' : 'my-[5%]'}`}
        style={{ maxWidth }}
      >
        <div className="flex shrink-0 items-center justify-between rounded-t-xl bg-maroon p-5 text-white">
          <h2 className="m-0 text-2xl font-bold">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="text-[28px] font-bold leading-none">&times;</button>
        </div>
        <div className={`p-[30px] ${tall ? 'flex-1 overflow-y-auto' : ''}`}>{children}</div>
      </div>
    </div>
  );
}

/* --------------------------------- header --------------------------------- */

function Header() {
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

/* ---------------------------------- hero ---------------------------------- */

function ReelSlider({ reels, delay = 3500 }) {
  const index = useAutoSlider(reels.length, delay);
  return (
    <div className="relative h-[28rem] w-52 shrink-0 overflow-hidden rounded-3xl border-4 border-white/30 bg-black shadow-2xl xl:h-[32rem] xl:w-72">
      <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {reels.map((r) => {
          const inner = (
            <>
              <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-maroon to-black p-4 text-center text-lg text-white/70">{r.alt}</span>
              <Img src={r.img} alt={r.alt} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-80">
                <svg className="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </>
          );
          return (
            <div key={r.img} className="relative h-full w-full shrink-0">
              {r.href ? (
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="relative z-10 block h-full w-full" aria-label={`Watch reel: ${r.alt}`}>{inner}</a>
              ) : (
                <div className="relative z-10 h-full w-full">{inner}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const deva = { fontFamily: "'Noto Sans Devanagari','Arial Unicode MS',Arial,sans-serif" };

function Hero() {
  const active = useAutoSlider(HERO_BACKGROUNDS.length, 5000);
  return (
    <section id="home" className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-maroon to-black pb-12 pt-28 lg:min-h-[90vh] lg:py-0">
      <div className="absolute inset-0 h-full w-full">
        {HERO_BACKGROUNDS.map((src, i) => (
          <Img
            key={src} src={src} alt=""
            className={`absolute inset-0 h-full w-full animate-kenburns object-cover transition-opacity duration-[1500ms] ease-in-out ${i === active ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 z-10 bg-black/50" />

      <div className="container relative z-20 mx-auto w-full px-4">
        <div className="flex flex-col items-center justify-between py-12 text-white lg:flex-row">
          <div className="w-full p-6 text-center lg:w-1/2 lg:pl-28 lg:pr-8">
            <h3 className="mb-6 text-[20px] font-extrabold sm:text-[24px] lg:text-[34px]" style={deva}>येथे मनं मिळतात...</h3>
            <h3 className="mb-6 text-[28px] font-extrabold sm:text-[32px] lg:text-[44px]" style={deva}>नाती जुळतात…</h3>

            <div className="mb-8 flex items-center justify-center gap-4 sm:gap-6">
              <a href={SITE.urls.register} className="inline-block whitespace-nowrap rounded-full bg-crimson px-4 py-1.5 text-center text-sm font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:brightness-110 sm:px-6 sm:py-2 sm:text-lg">
                Melava Registration
              </a>
              <span className="animate-blink whitespace-nowrap text-center text-sm font-extrabold text-[#ffd700] sm:text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Fee: {SITE.fee.total}
                <span className="mt-0.5 block text-[15px] text-white">{SITE.fee.breakup}</span>
              </span>
            </div>

            <h2 className="animate-blink text-[16px] font-medium leading-normal text-white/70 sm:text-[18px] lg:text-[40px] lg:leading-[4.25rem]">
              Where Souls Connect. <br />Because Every Jain Heart<br />Deserves a True Match.
            </h2>
          </div>

          <div className="hidden w-full items-center justify-center gap-4 p-4 lg:flex lg:w-1/2 xl:gap-8 xl:p-6">
            <ReelSlider reels={LEFT_REELS} />
            <ReelSlider reels={RIGHT_REELS} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ why choose us ------------------------------ */

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#dc143ca6] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-4xl font-extrabold text-white">Why Choose Aaryans Manomilan?</h2>
        <p className="mb-12 text-center text-xl text-white">Commitment to community, culture, and finding your forever match.</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((c) => (
            <article key={c.title} className="card-hover-scale rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <Img src={c.img} alt="" width="70" height="50" />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-gray-900">{c.title}</h3>
              <p className="text-center text-gray-600">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- committee -------------------------------- */

function Avatar({ member, size }) {
  return (
    <div className={`relative aspect-square ${size} overflow-hidden rounded-full border-4 border-primary bg-blush shadow-lg`}>
      <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-maroon">{initials(member.name)}</span>
      <Img src={member.img} alt={member.name} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: member.position || 'center 15%' }} />
    </div>
  );
}

function Committee() {
  const [selected, setSelected] = useState(null);
  const close = () => setSelected(null);
  useModalBehavior(!!selected, close);
  const loop = [...COMMITTEE, ...COMMITTEE]; // repeated twice so the slider loops without a gap

  return (
    <section id="committee" className="overflow-hidden bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-4xl font-extrabold text-maroon">Our Committee Members</h2>
        <p className="mb-12 text-center text-xl text-gray-600">The dedicated hearts steering Aaryans Manomilan</p>

        <div className="relative flex w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-[2] h-full w-20 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {loop.map((m, i) => (
              <button key={`${m.id}-${i}`} onClick={() => setSelected(m)} className="group flex w-[270px] shrink-0 cursor-pointer flex-col items-center px-6 text-center">
                <div className="mb-4 transition-all duration-300 group-hover:scale-105"><Avatar member={m} size="h-48 w-48" /></div>
                <h3 className="text-lg font-bold text-gray-800 transition-colors group-hover:text-primary">{m.name}</h3>
                <p className="text-sm font-medium text-secondary">{m.role}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && close()} role="dialog" aria-modal="true" aria-label={selected.name}>
          <div className="relative mx-auto flex w-11/12 max-w-md flex-col items-center rounded-2xl bg-white p-8 text-center shadow-2xl">
            <button onClick={close} aria-label="Close" className="absolute right-4 top-4 p-2 text-3xl leading-none text-gray-400 hover:text-gray-700">&times;</button>
            <div className="mb-6"><Avatar member={selected} size="h-56 w-56" /></div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">{selected.name}</h3>
            <p className="mb-4 text-base font-semibold text-secondary">{selected.role}</p>
            <p className="max-w-sm text-sm text-gray-600">Dedicated to bringing hearts together and steering Aaryans Manomilan with trust, guidance, and community spirit.</p>
          </div>
        </div>
      )}
    </section>
  );
}

/* --------------------------------- gallery --------------------------------- */

function Gallery() {
  return (
    <section id="gallery" className="bg-blush py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-900">Captured Moments</h2>
        <p className="mb-12 text-center text-xl text-gray-600">Real Stories. Real Connections. Real Happiness.</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {GALLERY.map((g) => (
            <div key={g.src} className={`card-hover-scale relative h-48 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-maroon shadow-lg sm:h-64 ${g.className || ''}`}>
              <span className="absolute inset-0 flex items-center justify-center p-2 text-center text-white/80">{g.alt}</span>
              <Img src={g.src} fallback={g.fallback} alt={g.alt} className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- upcoming events poster ---------------------------- */

function UpcomingEvents() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useModalBehavior(open, close);
  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-[1000] flex animate-float items-center gap-2 rounded-full bg-crimson px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-110">
        <span aria-hidden="true">📢</span> Upcoming Events
      </button>
      {open && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80" onClick={(e) => e.target === e.currentTarget && close()} role="dialog" aria-modal="true" aria-label="Upcoming events poster">
          <div className="relative max-h-[90%] max-w-[90%]">
            <button onClick={close} aria-label="Close" className="absolute -right-4 -top-4 z-[2001] h-[30px] w-[30px] rounded-full bg-white text-xl font-bold leading-[30px] text-[#333] shadow">&times;</button>
            <img src="/website/upcoming.jpeg" alt="Event Poster" className="h-auto max-h-[80vh] w-full rounded-[10px]" />
          </div>
        </div>
      )}
    </>
  );
}

/* --------------------------------- footer --------------------------------- */

const CasteList = ({ items }) => (
  <ol className="list-decimal pl-5 leading-loose">
    {items.map((c) => <li key={c} className="text-base text-[#333]">{c}</li>)}
  </ol>
);

function PrivacyPolicy() {
  return (
    <div className="text-[#555]">
      <p className="mb-5 leading-[1.8]">{PRIVACY_INTRO}</p>
      {PRIVACY_SECTIONS.map((s) => (
        <section key={s.title} className="mb-6">
          <h3 className="mb-3 text-lg font-bold text-primary">{s.title}</h3>
          <ul className="list-disc pl-6 leading-[1.8]">{s.items.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>
      ))}
      <section className="mb-6">
        <h3 className="mb-3 text-lg font-bold text-primary">9. Grievance Officer</h3>
        <p className="mb-2.5 leading-[1.8]">In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</p>
        <div className="rounded-lg border-l-4 border-primary bg-[#f9f9f9] p-[15px]">
          <p className="my-[5px]"><strong>Office Hours:</strong> {SITE.officeHours}</p>
          <p className="my-[5px]"><strong>Office Address:</strong> Aaryans Manomilan - Corporate Office, Narhe</p>
          <p className="my-[5px]">{SITE.address}</p>
          <p className="my-[5px]"><strong>Email:</strong> {SITE.email}</p>
          <p className="my-[5px]"><strong>Contact:</strong> {SITE.phone}</p>
        </div>
      </section>
    </div>
  );
}

function FooterList({ title, links, onModal }) {
  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold text-black">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            {l.modal
              ? <button onClick={() => onModal(l.modal)} className="transition hover:text-primary">{l.label}</button>
              : <a href={l.href} className="transition hover:text-primary">{l.label}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const [modal, setModal] = useState(null);
  const close = () => setModal(null);
  const social = [
    [SITE.social.facebook, FaFacebookF, 'Facebook'],
    [SITE.social.instagram, FaInstagram, 'Instagram'],
    [SITE.social.linkedin, FaLinkedinIn, 'LinkedIn'],
  ];
  return (
    <>
      <footer id="contact" className="pb-8 pt-16 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid grid-cols-1 gap-12 border-b border-gray-700 pb-12 md:grid-cols-4">
            <div>
              <Img src="/website/Mano_Milan_Final_Website.png" alt="Aaryan's Manomilan Logo" className="h-auto w-auto" />
              <div className="mt-6 flex space-x-4">
                {social.map(([href, Icon, label]) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="transition hover:text-secondary"><Icon /></a>
                ))}
              </div>
            </div>
            <FooterList title="Quick Links" links={FOOTER_QUICK_LINKS} onModal={setModal} />
            <FooterList title="Community" links={FOOTER_COMMUNITY_LINKS} onModal={setModal} />
            <div>
              <h4 className="mb-4 text-xl font-semibold text-black">Contact us</h4>
              <ul className="space-y-3">
                <li className="flex items-start"><FaMapMarkerAlt className="mr-3 mt-1 shrink-0 text-primary" /><span>{SITE.address}</span></li>
                <li className="flex items-center"><FaEnvelope className="mr-3 text-primary" /><a href={`mailto:${SITE.email}`} className="transition hover:text-primary">{SITE.email}</a></li>
                <li className="flex items-center"><FaPhoneAlt className="mr-3 text-primary" /><a href={`tel:+91${SITE.phone}`} className="transition hover:text-primary">{SITE.phone}</a></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-center text-sm">
            &copy; {new Date().getFullYear()} Aaryans Manomilan. All Rights Reserved. Designed with <FaHeart className="mx-1 text-secondary" /> Aayojanai.com
          </div>
        </div>
      </footer>

      <Modal open={modal === 'digambar'} title="Digambar Jain Sub-Castes" onClose={close}><CasteList items={DIGAMBAR} /></Modal>
      <Modal open={modal === 'shwetambar'} title="Shwetambar Jain Sub-Castes" onClose={close}><CasteList items={SHWETAMBAR} /></Modal>
      <Modal open={modal === 'privacy'} title="Privacy Policy - Aaryans Manomilan" onClose={close} maxWidth={900} tall><PrivacyPolicy /></Modal>
    </>
  );
}

/* ----------------------------------- app ----------------------------------- */

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Committee />
        <Gallery />
      </main>
      <UpcomingEvents />
      <Footer />
    </>
  );
}
