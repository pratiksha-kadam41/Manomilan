import useAutoSlider from '../../hooks/useAutoSlider.js';

function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 opacity-80">
      <svg className="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

export default function ReelSlider({ reels, delay = 3500 }) {
  const index = useAutoSlider(reels.length, delay);
  return (
    <div className="relative h-[28rem] w-52 shrink-0 overflow-hidden rounded-3xl border-4 border-white/30 bg-black shadow-2xl xl:h-[32rem] xl:w-72">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {reels.map((r) => {
          const inner = (
            <>
              <img src={r.img} alt={r.alt} className="h-full w-full object-cover" loading="lazy" />
              <PlayOverlay />
            </>
          );
          return (
            <div key={r.img} className="relative h-full w-full shrink-0">
              {r.href ? (
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 block h-full w-full"
                  aria-label={`Watch reel: ${r.alt}`}
                >
                  {inner}
                </a>
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