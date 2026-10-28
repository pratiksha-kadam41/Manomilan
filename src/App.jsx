import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Committee from './components/Committee.jsx';
import Gallery from './components/Gallery.jsx';
import UpcomingEvents from './components/UpcomingEvents.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Committee />
        <Gallery />
      </main>
      <UpcomingEvents />
      <Footer />
    </>
  );
}