
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import HireNow from './pages/HireNow';
import RestoBot from './components/RestoBot';

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hire" element={<HireNow />} />
        </Routes>
      </main>
      <Footer />
      {/* Floating RestoBot Assistant */}
      <RestoBot />
    </div>
  );
};

export default App;
