import { WHY_CHOOSE } from '../../data/whyChoose.js';
import SafeImage from '../common/SafeImage.jsx';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#dc143ca6] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-4xl font-extrabold text-white">Why Choose Aaryans Manomilan?</h2>
        <p className="mb-12 text-center text-xl text-white">
          Commitment to community, culture, and finding your forever match.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((c) => (
            <article key={c.title} className="card-hover-scale rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <SafeImage src={c.img} alt="" width="70" height="50" />
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