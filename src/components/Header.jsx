import { useEffect, useState } from "react";

const SITE_URL = "https://aaryansmanomilan.com";
const REGISTER_URL = `${SITE_URL}/melava/public/register`;
const LOGIN_URL = `${SITE_URL}/login`;
const PLACEHOLDER = "https://placehold.co/200x180/DC143C/FFFFFF?text=Aaryan's+Manomilan";

// If a logo file is missing, show a placeholder once.
const logoFallback = (e) => { e.currentTarget.onerror = null; e.currentTarget.src = PLACEHOLDER; };

const DESKTOP_LINKS = [
  ["Home", SITE_URL],
  ["About us", `${SITE_URL}/aboutus`],
  ["How It Works", `${SITE_URL}/how-it-works`],
  ["Success Stories", `${SITE_URL}/success-stories`],
  ["Our services", `${SITE_URL}/ourServices`],
  ["Contact us", `${SITE_URL}/contactus`],
];

const MOBILE_LINKS = [
  ["Home", SITE_URL],
  ["About", `${SITE_URL}/aboutus`],
  ["How It Works", `${SITE_URL}/how-it-works`],
  ["Success Stories", "#"],
  ["Our services", `${SITE_URL}/ourServices`],
  ["Contact us", `${SITE_URL}/contactus`],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => { document.body.style.overflow = open ? "hidden" : "auto"; }, [open]);
  const toggle = () => setOpen((o) => !o);

  return (
    <>
      <header className="site-header sticky-top">
        <div className="site-container header-inner d-flex justify-content-between align-items-center position-relative">
          <img src="/website/output-onlinepngtools.png" onError={logoFallback} alt="Jain emblem"
               className="d-none d-lg-block" style={{ width: 100, height: 125 }} />

          <div className="header-logo-box">
            <img src="/website/Mano_Milan_Final_Website.png" onError={logoFallback} alt="Aaryan's Manomilan Logo"
                 className="mx-auto mx-lg-0" style={{ width: 140, height: 155 }} />
          </div>

          <div className="d-none d-lg-block" style={{ width: "1rem" }} />

          {/* title + desktop menu */}
          <div className="d-none d-lg-flex flex-column align-items-center justify-content-center flex-grow-1 pt-1">
            <h3 className="header-title">
              <b><span style={{ color: "white" }}>||</span> जय जिनेन्द्र <span style={{ color: "white" }}>||</span></b>
            </h3>
            <nav className="main-nav">
              {DESKTOP_LINKS.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
              <span className="reg-dropdown">
                <span className="reg-trigger">Registration Plan</span>
                <div className="reg-menu">
                  <a href={REGISTER_URL}>Registration</a>
                  <a href={LOGIN_URL}>Login</a>
                </div>
              </span>
            </nav>
          </div>

          <img src="/website/output-onlinepngtools.png" onError={logoFallback} alt="Jain emblem"
               className="d-none d-lg-block" style={{ width: 100, height: 125 }} />

          {/* phone: Login / Register / hamburger */}
          <div className="d-flex d-lg-none align-items-center gap-2">
            <a href={LOGIN_URL} className="btn btn-sm bg-white fw-semibold shadow-sm"
               style={{ color: "#DC143C", border: "1px solid #DC143C", fontSize: ".75rem" }}>Login</a>
            <a href={REGISTER_URL} className="btn btn-sm fw-semibold shadow-sm text-white text-nowrap"
               style={{ background: "#DC143C", fontSize: ".75rem" }}>Register</a>
            <div className="hamburger" onClick={toggle}><span /><span /><span /></div>
          </div>
        </div>
      </header>

      {/* phone full-screen menu */}
      <div className={`mobile-menu${open ? " active" : ""}`}>
        <div onClick={toggle} style={{ position: "absolute", top: 20, right: 20, color: "#fff", fontSize: 40, cursor: "pointer", zIndex: 9999 }}>&times;</div>
        <nav>
          <h3 style={{ fontSize: 32, color: "#fff", textShadow: "1px 1px 2px rgba(0,0,0,.3)", marginBottom: 30 }}>
            <b>|| जय जिनेन्द्र ||</b>
          </h3>
          {MOBILE_LINKS.map(([label, href]) => (
            <a key={label} href={href} onClick={toggle}>{label}</a>
          ))}
        </nav>
      </div>
    </>
  );
}