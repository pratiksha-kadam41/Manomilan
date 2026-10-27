import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaHeart } from 'react-icons/fa';
import {
  SITE, FOOTER_QUICK_LINKS, FOOTER_COMMUNITY_LINKS,
  DIGAMBAR, SHWETAMBAR, PRIVACY_INTRO, PRIVACY_SECTIONS,
} from '../data.js';
import { Img, Modal, useModalBehavior } from './ui.jsx';

/* ---------------------------- upcoming events poster ---------------------------- */

export function UpcomingEvents() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useModalBehavior(open, close);
  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-[1000] flex animate-float items-center gap-2 rounded-full bg-crimson px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-110">
        <span aria-hidden="true">📢</span> Upcoming Events
      </button>
      {open && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80" onClick={(e) => e.target === e.currentTarget && close()} role="dialog" aria-modal="true" aria-label="Upcoming events poster">
          <div className="relative max-h-[90%] max-w-[90%]">
            <button onClick={close} aria-label="Close" className="absolute -right-4 -top-4 z-[2001] h-[30px] w-[30px] rounded-full bg-white text-xl font-bold leading-[30px] text-[#333] shadow">&times;</button>
            <img src="/website/upcoming.jpeg" alt="Event Poster" className="h-auto max-h-[80vh] w-full rounded-[10px]" />
          </div>
        </div>
      )}
    </>
  );
}

/* --------------------------------- footer --------------------------------- */

const CasteList = ({ items }) => (
  <ol className="list-decimal pl-5 leading-loose">
    {items.map((c) => <li key={c} className="text-base text-[#333]">{c}</li>)}
  </ol>
);

function PrivacyPolicy() {
  return (
    <div className="text-[#555]">
      <p className="mb-5 leading-[1.8]">{PRIVACY_INTRO}</p>
      {PRIVACY_SECTIONS.map((s) => (
        <section key={s.title} className="mb-6">
          <h3 className="mb-3 text-lg font-bold text-primary">{s.title}</h3>
          <ul className="list-disc pl-6 leading-[1.8]">{s.items.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>
      ))}
      <section className="mb-6">
        <h3 className="mb-3 text-lg font-bold text-primary">9. Grievance Officer</h3>
        <p className="mb-2.5 leading-[1.8]">In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</p>
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

function FooterList({ title, links, onModal }) {
  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold text-black">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            {l.modal
              ? <button onClick={() => onModal(l.modal)} className="transition hover:text-primary">{l.label}</button>
              : <a href={l.href} className="transition hover:text-primary">{l.label}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [modal, setModal] = useState(null);
  const close = () => setModal(null);
  const social = [
    [SITE.social.facebook, FaFacebookF, 'Facebook'],
    [SITE.social.instagram, FaInstagram, 'Instagram'],
    [SITE.social.linkedin, FaLinkedinIn, 'LinkedIn'],
  ];
  return (
    <>
      <footer id="contact" className="pb-8 pt-16 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid grid-cols-1 gap-12 border-b border-gray-700 pb-12 md:grid-cols-4">
            <div>
              <Img src="/website/Mano_Milan_Final_Website.png" alt="Aaryan's Manomilan Logo" className="h-auto w-auto" />
              <div className="mt-6 flex space-x-4">
                {social.map(([href, Icon, label]) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="transition hover:text-secondary"><Icon /></a>
                ))}
              </div>
            </div>
            <FooterList title="Quick Links" links={FOOTER_QUICK_LINKS} onModal={setModal} />
            <FooterList title="Community" links={FOOTER_COMMUNITY_LINKS} onModal={setModal} />
            <div>
              <h4 className="mb-4 text-xl font-semibold text-black">Contact us</h4>
              <ul className="space-y-3">
                <li className="flex items-start"><FaMapMarkerAlt className="mr-3 mt-1 shrink-0 text-primary" /><span>{SITE.address}</span></li>
                <li className="flex items-center"><FaEnvelope className="mr-3 text-primary" /><a href={`mailto:${SITE.email}`} className="transition hover:text-primary">{SITE.email}</a></li>
                <li className="flex items-center"><FaPhoneAlt className="mr-3 text-primary" /><a href={`tel:+91${SITE.phone}`} className="transition hover:text-primary">{SITE.phone}</a></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-center text-sm">
            &copy; {new Date().getFullYear()} Aaryans Manomilan. All Rights Reserved. Designed with <FaHeart className="mx-1 text-secondary" /> Aayojanai.com
          </div>
        </div>
      </footer>

      <Modal open={modal === 'digambar'} title="Digambar Jain Sub-Castes" onClose={close}><CasteList items={DIGAMBAR} /></Modal>
      <Modal open={modal === 'shwetambar'} title="Shwetambar Jain Sub-Castes" onClose={close}><CasteList items={SHWETAMBAR} /></Modal>
      <Modal open={modal === 'privacy'} title="Privacy Policy - Aaryans Manomilan" onClose={close} maxWidth={900} tall><PrivacyPolicy /></Modal>
    </>
  );
}
