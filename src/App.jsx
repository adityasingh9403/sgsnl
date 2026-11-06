
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle, ArrowUp } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceModal from './components/ServiceModal';
import EventsCovered from './components/EventsCovered';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import LightboxModal from './components/LightboxModal';
import Statistics from './components/Statistics';
import PackageEstimator from './components/PackageEstimator';
import Contact from './components/Contact';
import QuickQuoteModal from './components/QuickQuoteModal';
import Footer from './components/Footer';

import { GALLERY_IMAGES, generateWhatsAppLink } from './data/websiteData';


// ==========================================
// SCROLL TO TOP ON ROUTE CHANGE
// ==========================================

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};


// ==========================================
// MAIN APP COMPONENT
// ==========================================

const App = () => {

  // ----------------------------------------
  // GLOBAL UI STATES
  // ----------------------------------------

  const [activeTheme, setActiveTheme] = useState('concert');

  const [scrolled, setScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showBackToTop, setShowBackToTop] = useState(false);


  // ----------------------------------------
  // MODAL STATES
  // ----------------------------------------

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const [selectedService, setSelectedService] = useState(null);


  // ----------------------------------------
  // GALLERY STATES
  // ----------------------------------------

  const [galleryFilter, setGalleryFilter] = useState('all');

  const [lightboxIndex, setLightboxIndex] = useState(null);


  // ----------------------------------------
  // PACKAGE ESTIMATOR STATE
  // ----------------------------------------

  const [estimator, setEstimator] = useState({
    eventType: 'wedding',
    guestCount: '300-500',
    venueType: 'outdoor',
    includeLedWall: true,
    includePyroFX: true
  });


  // ========================================
  // SCROLL LISTENER
  // ========================================

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setScrolled(scrollPosition > 50);

      setShowBackToTop(scrollPosition > 500);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);


  // ========================================
  // GALLERY FILTERING
  // ========================================

  const filteredGallery = useMemo(() => {

    if (galleryFilter === 'all') {
      return GALLERY_IMAGES;
    }

    return GALLERY_IMAGES.filter(
      (item) => item.category === galleryFilter
    );

  }, [galleryFilter]);


  // Reset lightbox when gallery category changes

  useEffect(() => {
    setLightboxIndex(null);
  }, [galleryFilter]);


  // ========================================
  // LIGHTBOX NAVIGATION
  // ========================================

  const handlePrevImage = useCallback(() => {

    setLightboxIndex((prev) => {

      if (prev === null || filteredGallery.length === 0) {
        return null;
      }

      return prev === 0
        ? filteredGallery.length - 1
        : prev - 1;

    });

  }, [filteredGallery.length]);


  const handleNextImage = useCallback(() => {

    setLightboxIndex((prev) => {

      if (prev === null || filteredGallery.length === 0) {
        return null;
      }

      return prev === filteredGallery.length - 1
        ? 0
        : prev + 1;

    });

  }, [filteredGallery.length]);


  // ========================================
  // LIGHTBOX KEYBOARD CONTROLS
  // ========================================

  useEffect(() => {

    if (lightboxIndex === null) {
      return;
    }

    const handleKeyDown = (event) => {

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrevImage();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNextImage();
      }

      if (event.key === 'Escape') {
        setLightboxIndex(null);
      }

    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [lightboxIndex, handlePrevImage, handleNextImage]);


  // ========================================
  // PACKAGE ESTIMATOR RECOMMENDATIONS
  // ========================================

  const estimatorRecommendation = useMemo(() => {

    const isOutdoor = estimator.venueType === 'outdoor';

    const isLarge =
      estimator.guestCount === '500-1000' ||
      estimator.guestCount === '1000+';


    // SOUND RECOMMENDATION

    const sound = isLarge || isOutdoor
      ? 'Large Event Sound System with Line Array and Subwoofer Options'
      : 'Compact Professional Sound System with Subwoofer Options';


    // LIGHTING RECOMMENDATION

    const light = isLarge
      ? 'Extended Moving Head Lighting, LED PAR Fixtures and Lighting Control'
      : 'Stage Moving Lights, LED PAR Fixtures and Lighting Control';


    // TRUSS RECOMMENDATION

    const truss = isOutdoor || isLarge
      ? 'Large Event Truss and Stage Structure Arrangement'
      : 'Compact Stage Truss and Lighting Support Structure';


    // LED SCREEN RECOMMENDATION

    const led = estimator.includeLedWall
      ? 'LED Video Wall Backdrop - Size and Pixel Pitch as per Venue'
      : 'LED Screen Not Requested';


    // SPECIAL FX RECOMMENDATION

    const fx = estimator.includePyroFX
      ? 'Special Effects Options - Subject to Venue Permission and Safety Requirements'
      : 'Standard Stage Setup';


    return {
      sound,
      light,
      truss,
      led,
      fx
    };

  }, [estimator]);


  // ========================================
  // BACK TO TOP
  // ========================================

  const handleBackToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  };


  // ========================================
  // WHATSAPP QUICK CONTACT
  // ========================================

  const quickWhatsAppLink = generateWhatsAppLink(
    'Hi! I need quick event production assistance. Please share the details and available options.'
  );


  // ========================================
  // MAIN RENDER
  // ========================================

  return (

    <div className="min-h-screen bg-[#10121C] text-white font-sans selection:bg-amber-500 selection:text-black relative overflow-x-hidden pt-20">

      <ScrollToTop />


      {/* =====================================
          NAVIGATION BAR
      ====================================== */}

      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setQuoteModalOpen={setQuoteModalOpen}
      />


      {/* =====================================
          WEBSITE ROUTES
      ====================================== */}

      <main>

        <Routes>

          {/* HOME PAGE */}

          <Route
            path="/"
            element={
              <>
                <Hero
                  activeTheme={activeTheme}
                  setActiveTheme={setActiveTheme}
                  setQuoteModalOpen={setQuoteModalOpen}
                />

                <Services
                  setSelectedService={setSelectedService}
                />

                <EventsCovered />

                <Statistics />
              </>
            }
          />


          {/* ABOUT PAGE */}

          <Route
            path="/about"
            element={
              <>
                <About />

                <Statistics />
              </>
            }
          />


          {/* SERVICES PAGE */}

          <Route
            path="/services"
            element={
              <Services
                setSelectedService={setSelectedService}
              />
            }
          />


          {/* EVENTS PAGE */}

          <Route
            path="/events"
            element={
              <EventsCovered />
            }
          />


          {/* WHY CHOOSE US PAGE */}

          <Route
            path="/why-us"
            element={
              <WhyChooseUs />
            }
          />


          {/* GALLERY PAGE */}

          <Route
            path="/gallery"
            element={
              <Gallery
                galleryFilter={galleryFilter}
                setGalleryFilter={setGalleryFilter}
                filteredGallery={filteredGallery}
                setLightboxIndex={setLightboxIndex}
              />
            }
          />


          {/* PACKAGE ESTIMATOR PAGE */}

          <Route
            path="/calculator"
            element={
              <PackageEstimator
                estimator={estimator}
                setEstimator={setEstimator}
                estimatorRecommendation={estimatorRecommendation}
              />
            }
          />


          {/* CONTACT PAGE */}

          <Route
            path="/contact"
            element={
              <Contact />
            }
          />

        </Routes>

      </main>


      {/* =====================================
          FOOTER
      ====================================== */}

      <Footer />


      {/* =====================================
          FLOATING WHATSAPP BUTTON
      ====================================== */}

      <a
        href={quickWhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 right-6 z-40
          w-14 h-14
          rounded-full
          bg-emerald-500
          text-white
          shadow-[0_8px_30px_rgba(16,185,129,0.35)]
          hover:bg-emerald-400
          hover:scale-110
          active:scale-95
          transition-all duration-300
          flex items-center justify-center
        "
        aria-label="Contact us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>


      {/* =====================================
          BACK TO TOP BUTTON
      ====================================== */}

      {showBackToTop && (

        <button
          type="button"
          onClick={handleBackToTop}
          className="
            fixed bottom-24 right-6 z-40
            w-12 h-12
            rounded-full
            bg-[#1A1D29]
            border border-amber-500/40
            text-amber-400
            shadow-xl
            hover:bg-amber-400
            hover:text-black
            hover:border-amber-400
            hover:scale-110
            active:scale-95
            transition-all duration-300
            flex items-center justify-center
          "
          aria-label="Back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>

      )}


      {/* =====================================
          SERVICE DETAILS MODAL
      ====================================== */}

      <ServiceModal
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />


      {/* =====================================
          GALLERY LIGHTBOX MODAL
      ====================================== */}

      <LightboxModal
        lightboxIndex={lightboxIndex}
        setLightboxIndex={setLightboxIndex}
        filteredGallery={filteredGallery}
        handlePrevImage={handlePrevImage}
        handleNextImage={handleNextImage}
      />


      {/* =====================================
          QUICK QUOTE MODAL
      ====================================== */}

      <QuickQuoteModal
        quoteModalOpen={quoteModalOpen}
        setQuoteModalOpen={setQuoteModalOpen}
      />

    </div>

  );

};


export default App;
