import { useState } from "react";

// "Our Committee Members": a row that scrolls by itself. Clicking a person opens a popup (Bootstrap modal).

const D = "District Committee Member";
const C = "Core Committee Member";
const B = "Board of Director";

// To add or remove a member, edit only this list. `position` = how the photo is cropped.
const MEMBERS = [
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
];

const initials = (name) =>
  name.replace(/^(Mr|Mrs|Ms)\.?\s*/i, "").split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

// Round photo. If the file is missing, the initials stay visible.
function Avatar({ member, size }) {
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <span className="avatar-initials">{initials(member.name)}</span>
      <img
        src={member.img}
        alt={member.name}
        className="avatar-img"
        style={{ objectPosition: member.position || "center 15%" }}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
    </div>
  );
}

export default function Committee() {
  const [selected, setSelected] = useState(null);
  const loop = [...MEMBERS, ...MEMBERS]; // repeated twice so the row loops without a gap

  return (
    <>
      <section id="committee" className="bg-white committee-pad overflow-hidden">
        <div className="container">
          <h2 className="section-title text-maroon">Our Committee Members</h2>
          <p className="section-sub">The dedicated hearts steering Aaryans Manomilan</p>

          <div className="marquee-wrap">
            <div className="marquee">
              {loop.map((m, i) => (
                <button
                  key={i}
                  type="button"
                  className="member"
                  data-bs-toggle="modal"
                  data-bs-target="#memberModal"
                  onClick={() => setSelected(m)}
                >
                  <Avatar member={m} size={192} />
                  <h3 className="member-name">{m.name}</h3>
                  <p className="small fw-medium text-pink mb-0">{m.role}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="memberModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center p-4">
            <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close" />
            {selected && (
              <>
                <div className="my-3"><Avatar member={selected} size={224} /></div>
                <h3 className="h4 fw-bold">{selected.name}</h3>
                <p className="fw-semibold text-pink">{selected.role}</p>
                <p className="small text-secondary mx-auto" style={{ maxWidth: 360 }}>
                  Dedicated to bringing hearts together and steering Aaryans Manomilan with trust, guidance, and community spirit.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}