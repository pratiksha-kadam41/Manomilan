import { SITE, HERO_BACKGROUNDS, LEFT_REELS, RIGHT_REELS } from '../data.js';
import { Img, useAutoSlider } from './ui.jsx';

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

export default function Hero() {
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
