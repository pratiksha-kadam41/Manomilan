import { useState } from 'react';
import { WHY_CHOOSE, COMMITTEE, GALLERY } from '../data.js';
import { Img, useModalBehavior } from './ui.jsx';

const initials = (name) =>
  name.replace(/^(Mr|Mrs|Ms)\.?\s*/i, '').split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

/* ------------------------------ why choose us ------------------------------ */

export function WhyChooseUs() {
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

export function Committee() {
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

export function Gallery() {
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
