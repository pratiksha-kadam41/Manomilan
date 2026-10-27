const D = "District Committee Member";
const C = "Core Committee Member";
const B = "Board of Director";

// To add or remove a member, edit only this list.
export const COMMITTEE = [
  { name: "Swapna Patil", role: D, img: "/website/committee1.jpg" },
  { name: "Mr.Sanjay Kshirsagar", role: C, img: "/website/committee2.jpg" },
  { name: "Mr.Rushikesh Kondekar", role: B, img: "/website/committee3.jpg" },
  { name: "Mr.Mahavir Gosavi", role: D, img: "/website/committee4.jpg" },
  { name: "Mr.Pushkar Koregave", role: C, img: "/website/committee5.jpg" },
  { name: "Mr.Vijay Bage", role: C, img: "/website/committee6.jpg" },
  { name: "Sushama Karande", role: C, img: "/website/committee7.jpg" },
  {
    name: "Mr.Subhash Dagade",
    role: "Core Committee",
    img: "/website/committee8.jpg",
  },
  {
    name: "Mr.Sanjaykumar Jain (Bujurge)",
    role: C,
    img: "/website/committee9.jpg",
  },
  { name: "Mr.Arun Bage", role: C, img: "/website/committee10.jpg" },
  { name: "Mr.Laxmikant Bhalerao", role: C, img: "/website/committee11.jpg" },
  { name: "Mr.Vipulchand Dodal", role: C, img: "/website/committee12.jpg" },
  {
    name: "Mr. Milind Ladge",
    role: "Founder and Director - Aaryans Manomilan",
    img: "/website/milind_ladge.jpg",
  },
  { name: "Mr.Nitin Nakhate", role: B, img: "/website/nitin_nakhate.jpg" },
  { name: "Mr.Sunil Waykos", role: D, img: "/website/sunil_waykos.jpg" },
  { name: "Mr.Balasaheb Ladge", role: D, img: "/website/balasaheb_ladge.jpg" },
  {
    name: "Veena Aarwade",
    role: D,
    img: "/website/veena_aarwade.jpg",
    position: "center",
  },
  {
    name: "Mr. Ulhas Chakwate",
    role: D,
    img: "/website/ulhas_chakwate.jpg",
    position: "center",
  },
  {
    name: "Anila Shirish Gotadki",
    role: D,
    img: "/website/anila_shirish_gotadki.jpg",
    position: "center top",
  },
  {
    name: "Mr.Pravin Manikrao Tarte",
    role: D,
    img: "/website/pravin_tarte.jpg",
    position: "center top",
  },
  {
    name: "Mr.Abhinandan Agarthade",
    role: D,
    img: "/website/Abhinandan Agarthade.jpeg",
    position: "center top",
  },
  {
    name: "Mr.Nishant Kandi",
    role: C,
    img: "/website/Nishant Kandi.jpeg",
    position: "center top",
  },
].map((m, i) => ({ ...m, id: i + 1 }));
