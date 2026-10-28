// Top bar. Phone and desktop menus are both in this file; nothing is imported except what React needs.

const SITE_URL = "https://aaryansmanomilan.com";
const REGISTER_URL = `${SITE_URL}/melava/public/register`;
const LOGIN_URL = `${SITE_URL}/login`;

// `href` starting with "#" scrolls inside this page; others open the old site.
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About us", href: `${SITE_URL}/aboutus` },
  { label: "How It Works", href: `${SITE_URL}/how-it-works` },
  { label: "Success Stories", href: `${SITE_URL}/success-stories` },
  { label: "Our services", href: `${SITE_URL}/ourServices` },
  { label: "Contact us", href: "#contact" },
];

// If a picture file is missing, hide it instead of showing a broken icon.
const hideBroken = (e) => { e.currentTarget.style.display = "none"; };

export default function Header() {
  return (
    <>
      <header className="site-header sticky-top shadow">
        <div className="container header-inner d-flex align-items-center justify-content-between">
          <img src="/website/output-onlinepngtools.png" alt="Jain emblem" className="emblem d-none d-lg-block" onError={hideBroken} />
          <img src="/website/Mano_Milan_Final_Website.png" alt="Aaryan's Manomilan logo" className="header-logo" onError={hideBroken} />

          {/* desktop menu */}
          <div className="d-none d-lg-flex flex-column align-items-center flex-grow-1">
            <h3 className="header-title">
              <span className="text-white">||</span> जय जिनेन्द्र <span className="text-white">||</span>
            </h3>
            <nav className="main-nav d-flex align-items-center" aria-label="Main">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="nav-link-custom">{l.label}</a>
              ))}
              <div className="dropdown">
                <button type="button" className="nav-link-custom no-caret dropdown-toggle border-0 bg-transparent p-0" data-bs-toggle="dropdown" aria-expanded="false">
                  Registration Plan
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href={REGISTER_URL}>Registration</a></li>
                  <li><a className="dropdown-item" href={LOGIN_URL}>Login</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <img src="/website/output-onlinepngtools.png" alt="Jain emblem" className="emblem d-none d-lg-block" onError={hideBroken} />

          {/* phone buttons */}
          <div className="d-flex d-lg-none align-items-center gap-2">
            <a href={LOGIN_URL} className="btn btn-sm btn-light border-danger text-danger fw-semibold">Login</a>
            <a href={REGISTER_URL} className="btn btn-sm btn-danger fw-semibold">Register</a>
            <button type="button" className="btn menu-btn p-0 ms-1" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-label="Open menu">
              <i className="bi bi-list" />
            </button>
          </div>
        </div>
      </header>

      {/* phone menu (slides in from the right) */}
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuTitle">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuTitle">|| जय जिनेन्द्र ||</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <nav className="list-group list-group-flush" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} data-bs-dismiss="offcanvas" className="list-group-item list-group-item-action bg-transparent text-white text-center border-secondary py-3">{l.label}</a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}