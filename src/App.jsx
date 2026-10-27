import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { WhyChooseUs, Committee, Gallery } from './components/Sections.jsx';
import Footer, { UpcomingEvents } from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Committee />
        <Gallery />
      </main>
      <UpcomingEvents />
      <Footer />
    </>
  );
}
