import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { WhyChooseUs, Committee, Gallery } from './components/Sections.jsx';
import Footer, { UpcomingEvents } from './components/Footer.jsx';

// Site content: update these values here when adding or changing page content.
const SITE = {
  name: "Aaryan's Manomilan",
  email: "aaryansmanomilan@gmail.com",
  phone: "7030932526",
  address:
    "Aachal Prime' Building, Above Hotel 'Shree Kateel', Next to Navale Bridge, New Pune-Satara Bypass Highway, Near Amrit Bloomfield, Narhe, Pune - 411041.",
  officeHours: "10:30 AM to 7:00 PM (Closed on Wednesday)",
  fee: { total: "₹1500", breakup: "(₹1200 + ₹300)" },
  social: {
    facebook: "https://www.facebook.com/share/19sczFNKnf/",
    instagram: "https://www.instagram.com/aaryansmanomilan?igsh=Y3p0cGd4b3I3a284",
    linkedin: "https://www.linkedin.com/in/aaryans-manomilan-257615388/",
  },
  urls: {
    register: "/register",
    login: "/login",
  },
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Our services", href: "/our-services" },
  { label: "Contact us", href: "/contact" },
  { label: "Registration Plan", href: "/registration-plan" },
];

const PAGE_ROUTES = [
  ...NAV_LINKS.slice(1).map(({ label, href }) => ({ label, path: href })),
  { label: "Register", path: SITE.urls.register },
  { label: "Login", path: SITE.urls.login },
  { label: "Payment Policy", path: "/payment-policy" },
  { label: "Terms and Conditions", path: "/terms-and-conditions" },
  { label: "FAQs", path: "/faqs" },
  { label: "Events and Workshops", path: "/events-and-workshops" },
];

const FOOTER_QUICK_LINKS = [
  { label: "About Manomilan", href: "/about-us" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Our services and Feature", href: "/our-services" },
  { label: "Privacy Policy", modal: "privacy" },
  { label: "Payment Policy", href: "/payment-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

const FOOTER_COMMUNITY_LINKS = [
  { label: "Digambar", modal: "digambar" },
  { label: "Shwetambar", modal: "shwetambar" },
  { label: "FAQs", href: "/faqs" },
  { label: "Events and Workshops", href: "/events-and-workshops" },
];

// Pictures. Any file that is missing from /public shows a placeholder instead of breaking.
const HERO_BACKGROUNDS = [
  "/website/bg_slider.jpg",
  "https://images.pexels.com/photos/29450289/pexels-photo-29450289.jpeg",
];

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

const WHY_CHOOSE = [
  { img: "/website/hand.png", title: "Traditional Methods Of Match Making", text: "Community-Based Introductions: The platform facilitates matches through trusted family networks, Jain Sanghs, and broader community connections." },
  { img: "/website/2.jpeg", title: "Quick Reach To The Community", text: "Quick Community Connections: Instantly connect within your Jain community for faster, meaningful matches." },
  { img: "/website/3.jpeg", title: "We Value Our Cultural Heritage And Roots", text: "Tradition Meets Modernity: We blend cultural heritage with modern tools to find matches rooted in Jain values." },
  { img: "/website/4.jpeg", title: "Empowering You Through Guidance & Connection", text: "Expert-led sessions for marriageable-age individuals to prepare emotionally, socially, and practically for a successful marital journey." },
  { img: "/website/flag1.png", title: "Complimentary Services", text: "Widespread Branch Access: Personalized services, events, & meeting venues available across multiple cities." },
  { img: "/website/flag2.png", title: "Exclusive value-added services", text: "Tailored Wedding Packages: Customized event planning to suit your vision, traditions, and budget—from grand to intimate." },
];

const D = "District Committee Member";
const C = "Core Committee Member";
const B = "Board of Director";

// To add or remove a member, edit only this list. `position` = how the photo is cropped.
const COMMITTEE = [
  { name: "Swapna Patil", role: D, img: "/website/committee1.jpg" },
  { name: "Mr.Sanjay Kshirsagar", role: C, img: "/website/committee2.jpg" },
  { name: "Mr.Rushikesh Kondekar", role: B, img: "/website/committee3.jpg" },
  { name: "Mr.Mahavir Gosavi", role: D, img: "/website/committee4.jpg" },
  { name: "Mr.Pushkar Koregave", role: C, img: "/website/committee5.jpg" },
  { name: "Mr.Vijay Bage", role: C, img: "/website/committee6.jpg" },
  { name: "Sushama Karande", role: C, img: "/website/committee7.jpg" },
  { name: "Mr.Subhash Dagade", role: "Core Committee", img: "/website/committee8.jpg" },
  { name: "Mr.Sanjaykumar Jain (Bujurge)", role: C, img: "/website/committee9.jpg" },
  { name: "Mr.Arun Bage", role: C, img: "/website/committee10.jpg" },
  { name: "Mr.Laxmikant Bhalerao", role: C, img: "/website/committee11.jpg" },
  { name: "Mr.Vipulchand Dodal", role: C, img: "/website/committee12.jpg" },
  { name: "Mr. Milind Ladge", role: "Founder and Director - Aaryans Manomilan", img: "/website/milind_ladge.jpg" },
  { name: "Mr.Nitin Nakhate", role: B, img: "/website/nitin_nakhate.jpg" },
  { name: "Mr.Sunil Waykos", role: D, img: "/website/sunil_waykos.jpg" },
  { name: "Mr.Balasaheb Ladge", role: D, img: "/website/balasaheb_ladge.jpg" },
  { name: "Veena Aarwade", role: D, img: "/website/veena_aarwade.jpg", position: "center" },
  { name: "Mr. Ulhas Chakwate", role: D, img: "/website/ulhas_chakwate.jpg", position: "center" },
  { name: "Anila Shirish Gotadki", role: D, img: "/website/anila_shirish_gotadki.jpg", position: "center top" },
  { name: "Mr.Pravin Manikrao Tarte", role: D, img: "/website/pravin_tarte.jpg", position: "center top" },
  { name: "Mr.Abhinandan Agarthade", role: D, img: "/website/Abhinandan Agarthade.jpeg", position: "center top" },
  { name: "Mr.Nishant Kandi", role: C, img: "/website/Nishant Kandi.jpeg", position: "center top" },
].map((m, i) => ({ ...m, id: i + 1 }));

const GALLERY = [
  { src: "/website/gallery1.jpeg", alt: "Hast Melap Ceremony" },
  { src: "/website/gallery2.jpeg", alt: "Engagement" },
  { src: "/website/gallery3.jpeg", alt: "Pheras Ritual" },
  { src: "/website/gallery4.jpeg", alt: "Family Gathering", className: "hidden lg:block" },
  { src: "/website/photo501.png", fallback: "/website/gallery5.jpeg", alt: "Vidhi Detail", className: "lg:col-span-2" },
  { src: "/website/photo101.jpg", alt: "Wedding Party", className: "lg:col-span-2" },
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


export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const page = PAGE_ROUTES.find(({ path }) => path === currentPath);

  if (page) {
    return (
      <>
        <Header SITE={SITE} NAV_LINKS={NAV_LINKS} />
        <main className="min-h-[calc(100vh-5rem)]" aria-label={`${page.label} page`} />
        <Footer
          SITE={SITE}
          FOOTER_QUICK_LINKS={FOOTER_QUICK_LINKS}
          FOOTER_COMMUNITY_LINKS={FOOTER_COMMUNITY_LINKS}
          DIGAMBAR={DIGAMBAR}
          SHWETAMBAR={SHWETAMBAR}
          PRIVACY_INTRO={PRIVACY_INTRO}
          PRIVACY_SECTIONS={PRIVACY_SECTIONS}
        />
      </>
    );
  }

  return (
    <>
      <Header SITE={SITE} NAV_LINKS={NAV_LINKS} />
      <main>
        <Hero
          SITE={SITE}
          HERO_BACKGROUNDS={HERO_BACKGROUNDS}
          LEFT_REELS={LEFT_REELS}
          RIGHT_REELS={RIGHT_REELS}
        />
        <WhyChooseUs WHY_CHOOSE={WHY_CHOOSE} />
        <Committee COMMITTEE={COMMITTEE} />
        <Gallery GALLERY={GALLERY} />
      </main>
      <UpcomingEvents />
      <Footer
        SITE={SITE}
        FOOTER_QUICK_LINKS={FOOTER_QUICK_LINKS}
        FOOTER_COMMUNITY_LINKS={FOOTER_COMMUNITY_LINKS}
        DIGAMBAR={DIGAMBAR}
        SHWETAMBAR={SHWETAMBAR}
        PRIVACY_INTRO={PRIVACY_INTRO}
        PRIVACY_SECTIONS={PRIVACY_SECTIONS}
      />
    </>
  );
}
