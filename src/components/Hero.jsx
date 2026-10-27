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

export default function Hero({ SITE, HERO_BACKGROUNDS, LEFT_REELS, RIGHT_REELS }) {
  const active = useAutoSlider(HERO_BACKGROUNDS.length, 5000);
  return (
    <section id="home" className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-br from-maroon to-black py-12 sm:min-h-[75vh] sm:py-16 xl:min-h-[90vh] xl:py-0">
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
        <div className="flex flex-col items-center justify-center py-4 text-white xl:flex-row xl:justify-between">
          <div className="w-full max-w-3xl px-2 py-6 text-center sm:px-6 xl:w-1/2 xl:max-w-none xl:px-8">
            <h3 className="mb-4 text-xl font-extrabold sm:text-2xl lg:text-3xl" style={deva}>येथे मनं मिळतात...</h3>
            <h3 className="mb-6 text-3xl font-extrabold sm:text-4xl lg:text-5xl" style={deva}>नाती जुळतात…</h3>

            <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a href={SITE.urls.register} className="inline-block rounded-full bg-crimson px-5 py-3 text-center text-sm font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:brightness-110 sm:px-6 sm:text-base">
                Melava Registration
              </a>
              <span className="text-center text-base font-extrabold text-[#ffd700] sm:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                Fee: {SITE.fee.total}
                <span className="mt-0.5 block text-sm text-white">{SITE.fee.breakup}</span>
              </span>
            </div>

            <h2 className="text-base font-medium leading-relaxed text-white/90 sm:text-xl lg:text-2xl xl:text-3xl">
              Where Souls Connect. <br />Because Every Jain Heart<br />Deserves a True Match.
            </h2>
          </div>

          <div className="hidden w-1/2 items-center justify-center gap-4 p-4 xl:flex 2xl:gap-8 2xl:p-6">
            <ReelSlider reels={LEFT_REELS} />
            <ReelSlider reels={RIGHT_REELS} />
          </div>
        </div>
      </div>
    </section>
  );
}
