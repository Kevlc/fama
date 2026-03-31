import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useEffect } from 'react';

export function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Sticky Mobile Reservation CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border z-40">
        <a 
          href="/reservations" 
          className="block w-full bg-primary text-primary-foreground text-center py-3.5 rounded-sm text-sm font-medium tracking-wide uppercase shadow-lg"
        >
          Réserver
        </a>
      </div>
    </div>
  );
}
