import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import UpcomingEvents from '../events/UpcomingEvents.jsx';

export default function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <UpcomingEvents />
      <Footer />
    </>
  );
}