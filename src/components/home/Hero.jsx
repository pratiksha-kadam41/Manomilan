import useAutoSlider from '../../hooks/useAutoSlider.js';
import ReelSlider from './ReelSlider.jsx';
import { HERO_BACKGROUNDS, LEFT_REELS, RIGHT_REELS } from '../../data/reels.js';
import { SITE } from '../../config/site.js';

const deva = { fontFamily: "'Noto Sans Devanagari','Arial Unicode MS',Arial,sans-serif" };

export default function Hero() {
  const active = useAutoSlider(HERO_BACKGROUNDS.length, 5000);
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-black pt-28 pb-12 lg:min-h-[90vh] lg:py-0"
    >
      {/* Background pictures that fade in and out */}
      <div className="absolute inset-0 h-full w-full">
        {HERO_BACKGROUNDS.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 h-full w-full bg-cover bg-center animate-kenburns transition-opacity duration-[1500ms] ease-in-out ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 z-10 bg-black/50" />

      <div className="container relative z-20 mx-auto w-full px-4">
        <div className="flex flex-col items-center justify-between py-12 text-white lg:flex-row">
          {/* Left side: text */}
          <div className="w-full p-6 text-center lg:w-1/2 lg:pl-28 lg:pr-8">
            <h3 className="mb-6 text-[20px] font-extrabold text-white sm:text-[24px] lg:text-[34px]" style={deva}>
              येथे मनं मिळतात...
            </h3>
            <h3 className="mb-6 text-[28px] font-extrabold text-white sm:text-[32px] lg:text-[44px]" style={deva}>
              नाती जुळतात…
            </h3>

            <div className="mb-8 flex flex-col items-center gap-3">
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <a
                  href={SITE.urls.register}
                  className="inline-block whitespace-nowrap rounded-full bg-crimson px-4 py-1.5 text-center text-sm font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:brightness-110 sm:px-6 sm:py-2 sm:text-lg"
                >
                  Melava Registration
                </a>
                <span
                  className="animate-blink whitespace-nowrap text-center text-sm font-extrabold text-[#ffd700] sm:text-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Fee: {SITE.fee.total}
                  <span className="mt-0.5 block text-[15px] text-white">{SITE.fee.breakup}</span>
                </span>
              </div>
            </div>

            <h2 className="animate-blink text-[16px] font-medium leading-normal text-white/70 sm:text-[18px] lg:text-[40px] lg:leading-[4.25rem]">
              Where Souls Connect. <br />
              Because Every Jain Heart
              <br />
              Deserves a True Match.
            </h2>
          </div>

          {/* Right side: two phone frames (only on big screens) */}
          <div className="hidden w-full items-center justify-center gap-4 p-4 lg:flex lg:w-1/2 xl:gap-8 xl:p-6">
            <ReelSlider reels={LEFT_REELS} />
            <ReelSlider reels={RIGHT_REELS} />
          </div>
        </div>
      </div>
    </section>
  );
}