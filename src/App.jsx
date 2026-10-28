import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import SuccessStories from "./pages/SuccessStories.jsx";

// Add a page here: "/url-name": Component
const ROUTES = {
  "/": Home,
  "/aboutus": About,
   "/how-it-works": HowItWorks,
   "/success-stories": SuccessStories,
};

// "#/aboutus" -> "/aboutus"
const getPath = () => {
  const p = window.location.hash.replace(/^#/, "").split("?")[0];
  return p === "" ? "/" : p;
};

export default function App() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onChange = () => {
      setPath(getPath());
      window.scrollTo(0, 0); // every new page starts at the top
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const Page = ROUTES[path];

  return (
    <>
      <Header />
      {Page ? <Page /> : <ComingSoon path={path} />}
      <Footer />
    </>
  );
}