import { GALLERY } from '../../data/gallery.js';
import SafeImage from '../common/SafeImage.jsx';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-blush py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-900">Captured Moments</h2>
        <p className="mb-12 text-center text-xl text-gray-600">Real Stories. Real Connections. Real Happiness.</p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {GALLERY.map((g) => (
            <div
              key={g.src}
              className={`gallery-img-container card-hover-scale relative cursor-pointer overflow-hidden rounded-xl shadow-lg ${
                g.className || ''
              }`}
            >
              <SafeImage
                src={g.src}
                fallback={g.fallback}
                alt={g.alt}
                className="h-48 w-full transform object-cover transition duration-500 ease-in-out hover:scale-110 sm:h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}