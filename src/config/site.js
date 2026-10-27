export const SITE_URL = "https://aaryansmanomilan.com";

export const SITE = {
  name: "Aaryan's Manomilan",
  email: "aaryansmanomilan@gmail.com",
  phone: "7030932526",
  address:
    "Aachal Prime' Building, Above Hotel 'Shree Kateel', Next to Navale Bridge, New Pune-Satara Bypass Highway, Near Amrit Bloomfield, Narhe, Pune - 411041.",
  officeHours: "10:30 AM to 7:00 PM (Closed on Wednesday)",
  fee: { total: "₹1500", breakup: "(₹1200 + ₹300)" },
  social: {
    facebook: "https://www.facebook.com/share/19sczFNKnf/",
    instagram:
      "https://www.instagram.com/aaryansmanomilan?igsh=Y3p0cGd4b3I3a284",
    linkedin: "https://www.linkedin.com/in/aaryans-manomilan-257615388/",
  },
  urls: {
    register: `${SITE_URL}/melava/public/register`,
    login: `${SITE_URL}/login`,
  },
};

// `to` = page built in React, `href` = page still on the old PHP site
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About us", href: `${SITE_URL}/aboutus` },
  { label: "How It Works", href: `${SITE_URL}/how-it-works` },
  { label: "Success Stories", href: `${SITE_URL}/success-stories` },
  { label: "Our services", href: `${SITE_URL}/ourServices` },
  { label: "Contact us", to: "/contactus" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "About Manomilan", href: `${SITE_URL}/aboutus` },
  { label: "How It Works", href: `${SITE_URL}/how-it-works` },
  { label: "Our services and Feature", href: `${SITE_URL}/ourServices` },
  { label: "Privacy Policy", modal: "privacy" },
  { label: "Payment Policy", href: `${SITE_URL}/refundPolicy` },
  { label: "Terms and Conditions", href: `${SITE_URL}/termsAndCondition` },
];

export const FOOTER_COMMUNITY_LINKS = [
  { label: "Digambar", modal: "digambar" },
  { label: "Shwetambar", modal: "shwetambar" },
  { label: "FAQs", href: `${SITE_URL}/FAQ` },
  { label: "Events and Workshops", href: `${SITE_URL}/events-workshops` },
];
