// "Why Choose Aaryans Manomilan?" – six cards.

const CARDS = [
  { img: "/website/hand.png", title: "Traditional Methods Of Match Making", text: "Community-Based Introductions: The platform facilitates matches through trusted family networks, Jain Sanghs, and broader community connections." },
  { img: "/website/2.jpeg", title: "Quick Reach To The Community", text: "Quick Community Connections: Instantly connect within your Jain community for faster, meaningful matches." },
  { img: "/website/3.jpeg", title: "We Value Our Cultural Heritage And Roots", text: "Tradition Meets Modernity: We blend cultural heritage with modern tools to find matches rooted in Jain values." },
  { img: "/website/4.jpeg", title: "Empowering You Through Guidance & Connection", text: "Expert-led sessions for marriageable-age individuals to prepare emotionally, socially, and practically for a successful marital journey." },
  { img: "/website/flag1.png", title: "Complimentary Services", text: "Widespread Branch Access: Personalized services, events, & meeting venues available across multiple cities." },
  { img: "/website/flag2.png", title: "Exclusive value-added services", text: "Tailored Wedding Packages: Customized event planning to suit your vision, traditions, and budget—from grand to intimate." },
];

export default function WhyChoose() {
  return (
    <section id="why-choose-us" className="why section-pad">
      <div className="container">
        <h2 className="section-title text-white">Why Choose Aaryans Manomilan?</h2>
        <p className="text-center text-white fs-4 mb-5">Commitment to community, culture, and finding your forever match.</p>
        <div className="row cards-row">
          {CARDS.map((c) => (
            <div key={c.title} className="col-md-6 col-lg-4">
              <article className="why-card card h-100 text-center shadow hover-lift">
                <div className="mb-3">
                  <img src={c.img} alt="" className="why-icon" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                </div>
                <h3 className="h5 fw-bold text-dark mb-3">{c.title}</h3>
                <p className="text-secondary mb-0">{c.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}