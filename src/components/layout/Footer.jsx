import { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaHeart,
} from 'react-icons/fa';
import SafeImage from '../common/SafeImage.jsx';
import Modal from '../common/Modal.jsx';
import PrivacyPolicy from '../home/PrivacyPolicy.jsx';
import { SITE, FOOTER_QUICK_LINKS, FOOTER_COMMUNITY_LINKS } from '../../config/site.js';
import { DIGAMBAR, SHWETAMBAR } from '../../data/castes.js';

function FooterList({ title, links, onModal }) {
  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold text-black">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            {l.modal ? (
              <button onClick={() => onModal(l.modal)} className="transition hover:text-primary">
                {l.label}
              </button>
            ) : (
              <a href={l.href} className="transition hover:text-primary">
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const CasteList = ({ items }) => (
  <ol className="list-decimal pl-5 leading-loose">
    {items.map((c) => (
      <li key={c} className="text-base text-[#333]">
        {c}
      </li>
    ))}
  </ol>
);

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
              <SafeImage src="/website/Mano_Milan_Final_Website.png" alt="Aaryan's Manomilan Logo" className="h-auto w-auto" />
              <div className="mt-6 flex space-x-4">
                {social.map(([href, Icon, label]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="transition hover:text-secondary"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <FooterList title="Quick Links" links={FOOTER_QUICK_LINKS} onModal={setModal} />
            <FooterList title="Community" links={FOOTER_COMMUNITY_LINKS} onModal={setModal} />

            <div>
              <h4 className="mb-4 text-xl font-semibold text-black">Contact us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mr-3 mt-1 shrink-0 text-primary" />
                  <span>{SITE.address}</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-primary" />
                  <a href={`mailto:${SITE.email}`} className="transition hover:text-primary">{SITE.email}</a>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-3 text-primary" />
                  <a href={`tel:+91${SITE.phone}`} className="transition hover:text-primary">{SITE.phone}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 text-center text-sm">
            &copy; {new Date().getFullYear()} Aaryans Manomilan. All Rights Reserved. Designed with{' '}
            <FaHeart className="mx-1 text-secondary" /> Aayojanai.com
          </div>
        </div>
      </footer>

      <Modal open={modal === 'digambar'} title="Digambar Jain Sub-Castes" onClose={close}>
        <CasteList items={DIGAMBAR} />
      </Modal>
      <Modal open={modal === 'shwetambar'} title="Shwetambar Jain Sub-Castes" onClose={close}>
        <CasteList items={SHWETAMBAR} />
      </Modal>
      <Modal open={modal === 'privacy'} title="Privacy Policy - Aaryans Manomilan" onClose={close} maxWidth={900} tall>
        <PrivacyPolicy />
      </Modal>
    </>
  );
}