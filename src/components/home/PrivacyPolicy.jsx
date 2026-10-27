import { PRIVACY_INTRO, PRIVACY_SECTIONS } from '../../data/privacyPolicy.js';
import { SITE } from '../../config/site.js';

export default function PrivacyPolicy() {
  return (
    <div className="text-[#555]">
      <p className="mb-5 leading-[1.8]">{PRIVACY_INTRO}</p>

      {PRIVACY_SECTIONS.map((s) => (
        <section key={s.title} className="mb-6">
          <h3 className="mb-3 text-lg font-bold text-primary">{s.title}</h3>
          <ul className="list-disc pl-6 leading-[1.8]">
            {s.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      ))}

      <section className="mb-6">
        <h3 className="mb-3 text-lg font-bold text-primary">9. Grievance Officer</h3>
        <p className="mb-2.5 leading-[1.8]">
          In accordance with Information Technology Act 2000 and rules made there under, the name and contact details
          of the Grievance Officer are provided below:
        </p>
        <div className="rounded-lg border-l-4 border-primary bg-[#f9f9f9] p-[15px]">
          <p className="my-[5px]"><strong>Office Hours:</strong> {SITE.officeHours}</p>
          <p className="my-[5px]"><strong>Office Address:</strong> Aaryans Manomilan - Corporate Office, Narhe</p>
          <p className="my-[5px]">{SITE.address}</p>
          <p className="my-[5px]"><strong>Email:</strong> {SITE.email}</p>
          <p className="my-[5px]"><strong>Contact:</strong> {SITE.phone}</p>
        </div>
      </section>
    </div>
  );
}