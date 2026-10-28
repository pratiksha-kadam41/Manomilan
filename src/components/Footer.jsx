// Footer + the popups opened from its links (Digambar list, Shwetambar list, Privacy Policy).
// Popups are Bootstrap modals: data-bs-toggle / data-bs-target / data-bs-dismiss open and close them.

const SITE_URL = "https://aaryansmanomilan.com";

const SITE = {
  email: "aaryansmanomilan@gmail.com",
  phone: "7030932526",
  address:
    "Aachal Prime' Building, Above Hotel 'Shree Kateel', Next to Navale Bridge, New Pune-Satara Bypass Highway, Near Amrit Bloomfield, Narhe, Pune - 411041.",
  officeHours: "10:30 AM to 7:00 PM (Closed on Wednesday)",
  social: {
    facebook: "https://www.facebook.com/share/19sczFNKnf/",
    instagram: "https://www.instagram.com/aaryansmanomilan?igsh=Y3p0cGd4b3I3a284",
    linkedin: "https://www.linkedin.com/in/aaryans-manomilan-257615388/",
  },
};

// `modal: "..."` = opens the popup with that id instead of a page.
const FOOTER_QUICK_LINKS = [
  { label: "About Manomilan", href: `${SITE_URL}/aboutus` },
  { label: "How It Works", href: `${SITE_URL}/how-it-works` },
  { label: "Our services and Feature", href: `${SITE_URL}/ourServices` },
  { label: "Privacy Policy", modal: "privacy" },
  { label: "Payment Policy", href: `${SITE_URL}/refundPolicy` },
  { label: "Terms and Conditions", href: `${SITE_URL}/termsAndCondition` },
];

const FOOTER_COMMUNITY_LINKS = [
  { label: "Digambar", modal: "digambar" },
  { label: "Shwetambar", modal: "shwetambar" },
  { label: "FAQs", href: `${SITE_URL}/FAQ` },
  { label: "Events and Workshops", href: `${SITE_URL}/events-workshops` },
];

const DIGAMBAR = [
  "Dashahumbad (दशाहुंबड)",
  "Saitwal (सैतवाल)",
  "Chaturth (चतुर्थ)",
  "Pancham (पंचम)",
  "Dhakad (धाकड)",
  "Kambhoj (कांबोज)",
  "Kasar (कासार)",
  "Bagerwal (बागरवाल)",
  "Jaiswal (जैसवाल)",
  "Agarwal (अगरवाल)",
  "Bogar (बोगार)",
  "Porwar (परवार)",
  "Humbad (हुम्बड)",
  "Visa Humbad (वीसा हुम्बड)",
  "Khandelwal (खंडेलवाल)",
  "Bannore (बन्नोरे)",
];

const SHWETAMBAR = [
  "Oswal (ओसवाल)",
  "Porwal (पोरवाल)",
  "Shrimali (श्रीमाळी)",
  "Humad (हुमड)",
  "Modi (मोदी)",
  "Khandelwal (खांडेलवाल)",
  "Gadiya (गाडिया)",
  "Bagherwal (बाघेरवाल)",
  "Dasha Shrimal / Dasha Oswal (दशा श्रीमाळ)",
  "Visa Shrimali / Visa Oswal (वीसा ओसवाल / श्रीमाळी)",
  "Soni (सोनी)",
  "Lunka (लुंका)",
];

const PRIVACY_INTRO =
  "We value the trust you place in us. That's why we insist upon privacy of customer information and the highest standards of safety of personal information. Please read the following statements to learn about our information gathering and dissemination practices.";

const PRIVACY_SECTIONS = [
  {
    title: "Note:",
    items: [
      "The primary work of this website is to work as an 'intermediary' between the customers who are willing to find prospective lawful alliances.",
      "The customer is also referred as 'you' and AaryansManomilan.com is referred as 'the website' herein below for the sake of convenience.",
      "Privacy policy of AaryansManomilan is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.",
      "By visiting this Website, you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree with the same, you are advised not to use or access our Website.",
      "By mere use of the Website, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use.",
    ],
  },
  {
    title:
      "1. Collection of Personally Identifiable Information and other Information:",
    items: [
      "When you use our Website, we collect and store your personal information which is provided by you from time to time.",
      "Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience.",
      "This allows us to provide services and features that most likely meet your needs, and to customize our Website to make your experience safer and easier.",
      "We collect personal information from you that we consider necessary for achieving this purpose.",
      "In general, you can browse the Website without telling AaryansManomilan, who you are or revealing any personal information about yourself.",
      "Once you give us your personal information and other details, you are not anonymous to us.",
      "Wherever possible, we indicate which fields are required and which fields are optional.",
      "We may automatically track certain information about you based upon your behaviour on our Website.",
      "We use this information to do internal research on our users' demographics, interests, and behaviour to better understand, protect and serve the customers.",
      "This information is compiled and analysed on an aggregated basis.",
      "This information may include the URL that you just came from (whether this URL is AaryansManomilan.com or not), which URL you next go to (whether this URL is on AaryansManomilan.com or not), browser information of your computer, and your IP address.",
      'We use data collection devices such as "cookies" on certain pages of the Website to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety.',
      'We offer certain features that are only available through the use of a "cookie".',
      "We also use cookies to allow you to enter your password less frequently during a session.",
      "Cookies can also help us provide information that is targeted to your interests.",
      'Most cookies are "session cookies," meaning that they are automatically deleted from your hard drive at the end of a session.',
      "You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Website and you may be required to re-enter your password more frequently during a session.",
      'Additionally, you may encounter "cookies" or other similar devices on certain pages of the Website that are placed by third parties like third parties providing services like horoscope etc.',
      "We do not control the use of cookies by third parties.",
    ],
  },
  {
    title: "Cookies",
    items: [
      'A "cookie" is a small piece of information stored by a web server on a web browser so it can be later read back from that browser.',
      "Cookies are useful for enabling the browser to remember information specific to a given user.",
      "We place both permanent and temporary cookies in your computer's hard drive.",
      "The cookies do not contain any of your personally identifiable information.",
      "If you choose to register on AaryansManomilan.com, we collect information like address, mobile number and e-mail address.",
      "If you choose to post messages on our message boards, chat rooms or other message areas or leave feedback, AaryansManomilan will collect that information which is provided by you.",
      "We retain this information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law.",
      "If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Website, we may collect such information into a file specified to you.",
      "We collect personally identifiable information (email address, name, phone number, credit card / debit card / other payment instrument details, etc.) from you when you provide such information to us.",
      "While you can browse some sections of our Website without providing such information, certain activities do require such information to us.",
      "We may use your contact information to contact you subject to the terms and conditions.",
    ],
  },
  {
    title: "2. Use of Demographic / Profile Data / Your Information",
    items: [
      "We use personal information to provide the services you request.",
      "We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service.",
      "We provide third party web portal to collect money.",
      "We measure consumer interest in our services, to inform you about online and offline offers, services, and updates etc.",
      "We customize your experience; to detect and protect you against error/s, fraud/s and other criminal activities.",
      "We enforce our terms and conditions etc.",
      "In our efforts to continually improve service offerings, we collect and analyse demographic and profile data about our users' activity on our Website.",
      "We identify and use your IP address to help diagnose problems with our server, and to administer our Website.",
      "Your IP address is also used to help identify you and to gather broad demographic information.",
      "We will occasionally ask you to complete optional online surveys.",
      "These surveys may ask you for contact information and demographic information (like zip code, age, or income level).",
      "We use this data to tailor your experience at our Website, providing you with content that we think you might be interested in and to display content according to your preferences.",
    ],
  },
  {
    title: "3. Sharing of personal information",
    items: [
      "We may share personal information with our other corporate entities and affiliates to help detect and prevent identity theft, fraud and other potentially illegal acts.",
      "We correlate related or multiple accounts to prevent abuse of our services.",
      "We facilitate joint or co-branded services that you request where such services are provided by more than one corporate entity.",
      "Those entities and affiliates may not market to you as a result of such sharing unless you explicitly opt-in.",
      "We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process.",
      "We may disclose personal information to law enforcement offices, enforcement authorities, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms and conditions and or Privacy Policy; respond to claims like an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public etc.",
      "We and our affiliates will share / sell some or all of your personal information with another business entity, if we (or our assets) plan to merge with, or be acquired by that business entity, or re-organization, amalgamation, restructuring of business.",
      "If such a transaction occurs that other business entity (or the new combined entity) will be required to follow this privacy policy with respect to your personal information.",
    ],
  },
  {
    title: "4. Links to Other Sites",
    items: [
      "Our Website links to other websites that may collect personally identifiable information about you.",
      "AaryansManomilan is not responsible for the privacy practices or the content of those linked websites.",
    ],
  },
  {
    title: "5. Security Precautions",
    items: [
      "Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control.",
      "Whenever you change or access your account information, we offer the use of a secure server.",
      "Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access.",
    ],
  },
  {
    title: "6. Choice/Opt-Out",
    items: [
      "We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us on behalf of our partners, and from us in general.",
      "If you want to remove your contact information from www.aaryansmanomilan.com, its lists and newsletters, please visit 'unsubscribe'.",
    ],
  },
  {
    title: "7. Advertisements on www.AaryansManomilan.com",
    items: [
      "We use third-party advertising companies to serve ads when you visit our Website.",
      "These third parties may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.",
    ],
  },
  {
    title: "8. Your Consent",
    items: [
      "By using the Website www.AaryansManomilan.com and/ or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this privacy policy.",
      "If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.",
    ],
  },
];

// A popup box. Opened by any button with data-bs-target="#<id>".
function Popup({ id, title, size = "", children }) {
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
      <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${size}`}>
        <div className="modal-content">
          <div className="modal-header popup-head">
            <h2 className="modal-title h4">{title}</h2>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

function FooterList({ title, links }) {
  return (
    <>
      <h4 className="h5 fw-semibold text-black mb-3">{title}</h4>
      <ul className="list-unstyled d-grid footer-list">
        {links.map((l) => (
          <li key={l.label}>
            {l.modal ? (
              <button type="button" className="footer-link" data-bs-toggle="modal" data-bs-target={`#${l.modal}`}>{l.label}</button>
            ) : (
              <a href={l.href} className="footer-link">{l.label}</a>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Footer() {
  const social = [
    [SITE.social.facebook, "bi-facebook", "Facebook"],
    [SITE.social.instagram, "bi-instagram", "Instagram"],
    [SITE.social.linkedin, "bi-linkedin", "LinkedIn"],
  ];

  return (
    <>
      <footer id="contact" className="site-footer text-black">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-3">
              <img src="/website/Mano_Milan_Final_Website.png" alt="Aaryan's Manomilan Logo" className="footer-logo" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            </div>
            <div className="col-md-3"><FooterList title="Quick Links" links={FOOTER_QUICK_LINKS} /></div>
            <div className="col-md-3"><FooterList title="Community" links={FOOTER_COMMUNITY_LINKS} /></div>
            <div className="col-md-3">
              <h4 className="h5 fw-semibold text-black mb-3">Contact us</h4>
              <ul className="list-unstyled d-grid footer-list">
                <li className="d-flex"><i className="bi bi-geo-alt-fill text-danger me-3" /><span>{SITE.address}</span></li>
                <li><i className="bi bi-envelope-fill text-danger me-3" /><a href={`mailto:${SITE.email}`} className="footer-link">{SITE.email}</a></li>
                <li><i className="bi bi-telephone-fill text-danger me-3" /><a href={`tel:+91${SITE.phone}`} className="footer-link">{SITE.phone}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-social d-flex gap-3">
            {social.map(([href, icon, label]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="footer-link"><i className={`bi ${icon}`} /></a>
            ))}
          </div>
          <p className="text-center small mb-0 footer-copy">
            &copy; {new Date().getFullYear()} Aaryans Manomilan. All Rights Reserved. Designed with <i className="bi bi-heart-fill text-pink mx-1" /> Aayojanai.com
          </p>
        </div>
      </footer>

      <Popup id="digambar" title="Digambar Jain Sub-Castes">
        <ol className="lh-lg mb-0">{DIGAMBAR.map((c) => <li key={c}>{c}</li>)}</ol>
      </Popup>

      <Popup id="shwetambar" title="Shwetambar Jain Sub-Castes">
        <ol className="lh-lg mb-0">{SHWETAMBAR.map((c) => <li key={c}>{c}</li>)}</ol>
      </Popup>

      <Popup id="privacy" title="Privacy Policy - Aaryans Manomilan" size="modal-xl">
        <div className="policy text-secondary">
          <p>{PRIVACY_INTRO}</p>
          {PRIVACY_SECTIONS.map((s) => (
            <section key={s.title}>
              <h3>{s.title}</h3>
              <ul className="lh-base">{s.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </section>
          ))}
          <section>
            <h3>9. Grievance Officer</h3>
            <p>In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</p>
            <div className="border-start border-4 border-danger bg-light rounded p-3">
              <p className="my-1"><strong>Office Hours:</strong> {SITE.officeHours}</p>
              <p className="my-1"><strong>Office Address:</strong> Aaryans Manomilan - Corporate Office, Narhe</p>
              <p className="my-1">{SITE.address}</p>
              <p className="my-1"><strong>Email:</strong> {SITE.email}</p>
              <p className="my-1"><strong>Contact:</strong> {SITE.phone}</p>
            </div>
          </section>
        </div>
      </Popup>
    </>
  );
}