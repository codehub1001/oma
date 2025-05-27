import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Banner from './components/Banner';
import DesignShowcase from './components/DesignShowcase';
import TestimonialCarousel from './components/Testimonials';
import WhyChooseUs from './components/Why';
import Footer from './components/Footer';

import { LogoLoader } from './components/Loader'; // import your loader
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Store from './pages/Store';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with actual async logic if needed)
    const timer = setTimeout(() => setIsLoading(false), 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Show loader while loading
    return <LogoLoader />;
  }

  // Show the actual app once loading finishes
  return (
    <Router>
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <DesignShowcase />
              <WhyChooseUs />
              <TestimonialCarousel />
            </>
          }
        />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
