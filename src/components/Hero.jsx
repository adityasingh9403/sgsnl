
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  MessageCircle,
  Sparkles,
  MapPin,
  Phone,
  Volume2,
  Lightbulb,
  MonitorPlay,
  PartyPopper,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

import {
  VIBE_THEMES,
  generateWhatsAppLink
} from '../data/websiteData';

const Hero = ({
  activeTheme,
  setActiveTheme,
  setQuoteModalOpen
}) => {

  const theme = VIBE_THEMES[activeTheme];

  const services = [
    { icon: Volume2, name: 'Professional Sound' },
    { icon: Lightbulb, name: 'DJ & Moving Lights' },
    { icon: MonitorPlay, name: 'LED Wall & Screens' },
    { icon: PartyPopper, name: 'Stage & Decoration' }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#090B13] text-white
      flex items-center pt-28 pb-20 overflow-hidden"
    >

      {/* Background Theme */}
      <div
        className={`absolute inset-0 bg-gradient-to-b
        ${theme.bgGlow} opacity-70 transition-all duration-700`}
      />

      {/* Cinematic Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 left-0 w-[450px]
          h-[700px] bg-amber-500/10 blur-[130px]
          rotate-12 animate-pulse" />

        <div className="absolute top-0 right-0 w-[450px]
          h-[650px] bg-purple-600/15 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 w-[500px]
          h-[300px] bg-blue-600/10 blur-[130px]" />

        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '55px 55px'
          }}
        />

      </div>

      {/* Background Event Image */}
      <div className="absolute inset-0 opacity-[0.13]
        pointer-events-none">

        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=85&w=2000"
          alt="Professional concert stage lighting"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r
          from-[#090B13] via-[#090B13]/90 to-[#090B13]/70" />

      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto
        px-5 sm:px-8 lg:px-10 w-full">

        <div className="grid lg:grid-cols-2 gap-12
          lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2
              px-4 py-2 rounded-full
              bg-white/[0.04] border border-amber-400/30
              backdrop-blur-xl mb-7">

              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex
                  h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full
                  h-2 w-2 bg-amber-400" />
              </span>

              <MapPin className="w-4 h-4 text-amber-400" />

              <span className="text-xs font-bold tracking-[2px]
                text-amber-200 uppercase">
                Indore, Madhya Pradesh
              </span>

            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl
              xl:text-7xl font-black leading-[1.08]
              tracking-tight uppercase">

              MAKE YOUR EVENT

              <span className="block mt-2 bg-gradient-to-r
                from-amber-200 via-yellow-400 to-amber-500
                bg-clip-text text-transparent">
                UNFORGETTABLE.
              </span>

            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl
              text-slate-300 font-medium leading-relaxed
              max-w-xl mx-auto lg:mx-0">

              Powerful Sound. Stunning Lights. Extraordinary
              Experiences.

            </p>

            <p className="mt-3 text-sm sm:text-base
              text-slate-400 leading-7 max-w-xl
              mx-auto lg:mx-0">

              From grand celebrations and weddings to live
              concerts and corporate events, we bring your
              vision to life with professional sound,
              lighting and complete event management.

            </p>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 gap-3 mt-8
              max-w-xl mx-auto lg:mx-0">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3
                    p-3 rounded-xl bg-white/[0.035]
                    border border-white/10
                    hover:border-amber-400/50
                    hover:bg-amber-400/[0.05]
                    transition-all"
                  >

                    <Icon className="w-5 h-5
                      text-amber-400 shrink-0" />

                    <span className="text-xs sm:text-sm
                      font-semibold text-slate-200">
                      {service.name}
                    </span>

                  </div>
                );
              })}

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row
              flex-wrap gap-3 mt-9
              justify-center lg:justify-start">

              <Link
                to="/services"
                className="group flex items-center
                justify-center gap-2 px-7 py-4
                rounded-xl bg-gradient-to-r
                from-amber-300 via-yellow-400 to-amber-500
                text-black font-extrabold text-sm
                uppercase tracking-wider
                shadow-lg shadow-amber-500/20
                hover:scale-[1.04] transition-all"
              >

                Explore Our Services

                <ChevronRight className="w-5 h-5
                  group-hover:translate-x-1 transition-transform" />

              </Link>

              <button
                onClick={() => setQuoteModalOpen(true)}
                className="flex items-center justify-center
                gap-2 px-7 py-4 rounded-xl
                bg-white/[0.06] border border-amber-400/40
                text-amber-200 font-bold text-sm
                uppercase tracking-wider
                hover:bg-amber-400/10
                transition-all"
              >

                Get Free Quotation

                <ArrowUpRight className="w-4 h-4" />

              </button>

            </div>

            {/* WhatsApp & Call */}
            <div className="flex flex-wrap items-center
              gap-5 mt-7 justify-center lg:justify-start">

              <a
                href={generateWhatsAppLink(
                  "Hi Lucky Shriwas! I am interested in your Sound, Light and Event Management services. Please share details and quotation."
                )}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2
                text-sm font-semibold text-emerald-400
                hover:text-emerald-300 transition"
              >

                <MessageCircle className="w-5 h-5" />
                WhatsApp Inquiry

              </a>

              <span className="hidden sm:block
                w-px h-5 bg-white/20" />

              <a
                href="tel:+917000389061"
                className="flex items-center gap-2
                text-sm font-semibold text-slate-300
                hover:text-amber-300 transition"
              >

                <Phone className="w-4 h-4 text-amber-400" />
                Call: 7000389061

              </a>

            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-x-5 gap-y-2
              mt-9 justify-center lg:justify-start">

              {[
                'Professional Setup',
                'Complete Solutions',
                'Event Management'
              ].map((item, i) => (

                <span key={i}
                  className="flex items-center gap-1.5
                  text-xs text-slate-400">

                  <CheckCircle2 className="w-3.5 h-3.5
                    text-amber-400" />

                  {item}

                </span>

              ))}

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative max-w-lg mx-auto w-full">

            {/* Lighting Glow */}
            <div className="absolute inset-8 bg-amber-400/20
              blur-[100px] rounded-full" />

            {/* Main Visual Card */}
            <div className="relative rounded-[30px]
              border border-amber-400/30
              bg-gradient-to-br from-[#20202A]
              via-[#11131E] to-[#080A12]
              p-5 sm:p-7 shadow-2xl
              shadow-black/60 overflow-hidden">

              {/* Top Badge */}
              <div className="flex items-center
                justify-between mb-5">

                <span className="text-xs font-bold
                  tracking-[3px] uppercase text-amber-300">
                  The Art of Events
                </span>

                <Sparkles className="w-5 h-5
                  text-amber-400" />

              </div>

              {/* Brand Logo */}
              <div className="relative flex justify-center
                items-center py-3">

                <div className="absolute w-64 h-64
                  bg-amber-400/10 blur-[65px]
                  rounded-full" />

                <img
                  src="/logo.png"
                  alt="Shree Ganesh Sound and Light"
                  className="relative z-10 w-60 sm:w-72
                  h-60 sm:h-72 object-contain
                  drop-shadow-[0_0_25px_rgba(245,180,60,0.25)]"
                />

              </div>

              {/* Divider */}
              <div className="h-px w-full
                bg-gradient-to-r from-transparent
                via-amber-400/60 to-transparent my-4" />

              {/* Brand Name */}
              <div className="text-center">

                <h2 className="text-2xl sm:text-3xl
                  font-black uppercase tracking-wide
                  text-white">
                  Shree Ganesh
                </h2>

                <p className="mt-1 text-amber-400
                  font-bold text-sm tracking-[4px] uppercase">
                  Sound & Light
                </p>

                <p className="mt-4 text-sm
                  text-slate-400">
                  Complete Event Production & Management
                </p>

              </div>

              {/* Owner Details */}
              <div className="mt-6 p-4 rounded-2xl
                bg-white/[0.045]
                border border-white/10
                flex items-center justify-between gap-3">

                <div>

                  <p className="text-[10px]
                    uppercase tracking-[2px]
                    text-slate-500 font-bold">
                    Your Event Partner
                  </p>

                  <h3 className="text-xl font-extrabold
                    text-white mt-1">
                    Lucky Shriwas
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    Indore, Madhya Pradesh
                  </p>

                </div>

                <a
                  href="tel:+917000389061"
                  className="w-12 h-12 rounded-xl
                  flex items-center justify-center
                  bg-gradient-to-br from-amber-300
                  to-yellow-600 text-black
                  hover:scale-110 transition"
                  aria-label="Call Lucky Shriwas"
                >

                  <Phone className="w-5 h-5" />

                </a>

              </div>

            </div>

            {/* Floating Service Badge */}
            <div className="absolute -bottom-5
              -left-3 sm:-left-7
              bg-[#171A25] border border-amber-400/40
              rounded-xl px-4 py-3 shadow-xl
              flex items-center gap-3">

              <div className="w-9 h-9 rounded-lg
                bg-amber-400/15 flex items-center
                justify-center">

                <Sparkles className="w-5 h-5
                  text-amber-400" />

              </div>

              <div>

                <p className="text-xs font-bold text-white">
                  Premium Event Experience
                </p>

                <p className="text-[10px] text-slate-400">
                  Sound • Light • Production
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Theme Switcher */}
        <div className="mt-20 max-w-3xl mx-auto
          rounded-2xl p-5
          bg-white/[0.035] backdrop-blur-xl
          border border-amber-400/15">

          <p className="text-center text-xs
            uppercase tracking-[2px] font-bold
            text-amber-300 mb-4 flex items-center
            justify-center gap-2">

            <Sparkles className="w-4 h-4" />

            Choose Your Event Vibe & Lighting

          </p>

          <div className="grid grid-cols-2
            sm:grid-cols-4 gap-3">

            {Object.keys(VIBE_THEMES).map((key) => {

              const item = VIBE_THEMES[key];
              const isActive = activeTheme === key;

              return (

                <button
                  key={key}
                  onClick={() => setActiveTheme(key)}
                  className={`py-3 px-3 rounded-xl
                    text-xs font-bold transition-all
                    border ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-300 to-yellow-500 text-black border-amber-300 shadow-lg shadow-amber-400/20'
                      : 'bg-[#11141F] text-slate-300 border-white/10 hover:border-amber-400/50 hover:text-amber-300'
                  }`}
                >

                  {item.name}

                </button>

              );

            })}

          </div>

        </div>

      </div>

      {/* Bottom Decorative Glow */}
      <div className="absolute bottom-0 left-0
        w-full h-px bg-gradient-to-r
        from-transparent via-amber-400/50
        to-transparent" />

    </section>
  );
};

export default Hero;