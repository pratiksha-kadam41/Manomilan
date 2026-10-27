import { useState } from 'react';
import { COMMITTEE } from '../../data/committee.js';
import CommitteeModal from './CommitteeModal.jsx';

export default function Committee() {
  const [selected, setSelected] = useState(null);
  // The list is repeated twice so the slider loops without a gap
  const loop = [...COMMITTEE, ...COMMITTEE];

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
              <button
                key={`${m.id}-${i}`}
                onClick={() => setSelected(m)}
                className="group flex w-[270px] shrink-0 cursor-pointer flex-col items-center px-6 text-center"
              >
                <div className="mb-4 aspect-square h-48 w-48 overflow-hidden rounded-full border-4 border-primary shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: m.position || 'center 15%' }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 transition-colors duration-200 group-hover:text-primary">
                  {m.name}
                </h3>
                <p className="text-sm font-medium text-secondary">{m.role}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <CommitteeModal member={selected} onClose={() => setSelected(null)} />
    </section>
  );
}