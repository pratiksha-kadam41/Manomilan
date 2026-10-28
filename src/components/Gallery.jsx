// "Captured Moments" photo grid.
// `cols` = Bootstrap column classes for each tile. `fallback` = second picture to try if the first is missing.

const PHOTOS = [
  { src: "/website/gallery1.jpeg", alt: "Hast Melap Ceremony", cols: "col-6 col-md-4 col-lg-3" },
  { src: "/website/gallery2.jpeg", alt: "Engagement", cols: "col-6 col-md-4 col-lg-3" },
  { src: "/website/gallery3.jpeg", alt: "Pheras Ritual", cols: "col-6 col-md-4 col-lg-3" },
  { src: "/website/gallery4.jpeg", alt: "Family Gathering", cols: "col-lg-3 d-none d-lg-block" },
  { src: "/website/photo501.png", fallback: "/website/gallery5.jpeg", alt: "Vidhi Detail", cols: "col-6 col-lg-6" },
  { src: "/website/photo101.jpg", alt: "Wedding Party", cols: "col-6 col-lg-6" },
];

function onImgError(e, fallback) {
  const img = e.currentTarget;
  if (fallback && !img.dataset.tried) {
    img.dataset.tried = "1";
    img.src = fallback;
  } else {
    img.style.display = "none";
  }
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-blush section-pad">
      <div className="container">
        <h2 className="section-title text-dark">Captured Moments</h2>
        <p className="section-sub">Real Stories. Real Connections. Real Happiness.</p>
        <div className="row g-3 g-md-4">
          {PHOTOS.map((p) => (
            <div key={p.src} className={p.cols}>
              <div className="gallery-tile shadow hover-lift">
                <span>{p.alt}</span>
                <img src={p.src} alt={p.alt} loading="lazy" onError={(e) => onImgError(e, p.fallback)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}