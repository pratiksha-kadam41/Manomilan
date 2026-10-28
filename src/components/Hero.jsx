import { useEffect, useState } from "react";

// Big banner: fading background photos, text, registration button and the two reel cards.

const REGISTER_URL = "https://aaryansmanomilan.com/melava/public/register";
const FEE = { total: "₹1500", breakup: "(₹1200 + ₹300)" };

// Missing files just leave the dark background visible.
const BACKGROUNDS = [
  "/website/bg_slider.jpg",
  "https://images.pexels.com/photos/29450289/pexels-photo-29450289.jpeg",
];

// Each reel = cover picture + the Instagram reel it opens (href: null = not clickable).
const ig = (id) => `https://www.instagram.com/reel/${id}`;

const LEFT_REELS = [
  { img: "/videos/stage.jpeg", alt: "Stage Image", href: ig("DY1-7DdTnTk/?igsh=Z3M3bjZ5Y3BxOGxq") },
  { img: "/videos/7000 muli mul.jpeg", alt: "7000 Muli Mul", href: ig("DYUU_XdicAu/?igsh=Yzg2MGZ4dzUxdmRo") },
  { img: "/videos/gandhi.jpeg", alt: "Gandhi", href: ig("DYsC-COzMhW/?igsh=MXFwc3FoaDZjYWRqbA==") },
  { img: "/videos/kondekar.jpeg", alt: "Kondekar", href: ig("DY6iCYrTvlH/?igsh=MXNlb3VzYjc3Y2oxNQ==") },
  { img: "/videos/mamta.jpeg", alt: "Mamta", href: ig("DY6ik19zTCV/?igsh=MXQ0dG9lNWw3OHBkNw==") },
  { img: "/videos/rupresha.jpeg", alt: "Rupresha", href: null },
  { img: "/videos/shetty sir.jpeg", alt: "Shetty Sir", href: ig("DYwFWa_CwKW/?igsh=cDRyM3E2bHVoYzNh") },
  { img: "/videos/dagade sir.jpeg", alt: "Dagade Sir", href: ig("DY6jH6OzjiR/?igsh=MTBubWlldG5vOXM0dg") },
];

const RIGHT_REELS = [
  { img: "/videos/new_reel.jpeg", alt: "New Reel", href: ig("DZpd_ZPpd3B/?igsh=M21sdjd1cG9mOG9z") },
  { img: "/videos/new_reel_dz7b.png", alt: "New Reel", href: ig("DZ7bHsutz-g/?igsh=cG56emx1c2tuMzZv") },
  { img: "/videos/new_reel_dzzn.png", alt: "New Reel", href: ig("DZznG7KCtVs/?igsh=MXNscGFjM2V0NTBjdA==") },
  { img: "/videos/new_reel_dzuk.png", alt: "New Reel", href: ig("DZukKtlJfbZ/?igsh=MWwxM2FjanZ6ZmZ2Nw==") },
  { img: "/videos/new_reel_dak3.png", alt: "New Reel", href: ig("DaK30XuNa0y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==") },
];

const hideBroken = (e) => { e.currentTarget.style.display = "none"; };

// Gives 0, 1, 2, 0, 1, 2 ... changing every `delay` milliseconds.
function useSlider(length, delay) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (length < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), delay);
    return () => clearInterval(id);
  }, [length, delay]);
  return index;
}

function ReelSlider({ reels, delay = 3500 }) {
  const index = useSlider(reels.length, delay);
  return (
    <div className="reel">
      <div className="reel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {reels.map((r) => {
          const inner = (
            <>
              <span className="reel-placeholder">{r.alt}</span>
              <img src={r.img} alt={r.alt} className="reel-img" onError={hideBroken} />
              <span className="reel-play"><i className="bi bi-play-fill" /></span>
            </>
          );
          return (
            <div key={r.img} className="reel-slide">
              {r.href ? (
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="reel-link" aria-label={`Watch reel: ${r.alt}`}>{inner}</a>
              ) : (
                <div className="reel-link">{inner}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  const active = useSlider(BACKGROUNDS.length, 5000);
  return (
    <section id="home" className="hero">
      {BACKGROUNDS.map((src, i) => (
        <img key={src} src={src} alt="" className={`hero-bg ${i === active ? "active" : ""}`} onError={hideBroken} />
      ))}
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-text-col text-center text-white py-4">
            <h3 className="hero-marathi one">येथे मनं मिळतात...</h3>
            <h3 className="hero-marathi two">नाती जुळतात…</h3>

            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
              <a href={REGISTER_URL} className="btn btn-crimson rounded-pill fw-bold px-4">Melava Registration</a>
              <span className="fee blink">
                Fee: {FEE.total}
                <small className="d-block">{FEE.breakup}</small>
              </span>
            </div>

            <h2 className="hero-tagline blink">
              Where Souls Connect.<br />Because Every Jain Heart<br />Deserves a True Match.
            </h2>
          </div>

          {/* reel cards: hidden on phones */}
          <div className="col-lg-6 reel-pair d-none d-lg-flex justify-content-center">
            <ReelSlider reels={LEFT_REELS} />
            <ReelSlider reels={RIGHT_REELS} />
          </div>
        </div>
      </div>
    </section>
  );
}