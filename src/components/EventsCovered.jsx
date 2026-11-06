
import React from 'react';
import { EVENTS_COVERED } from '../data/websiteData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const EventsCovered = () => {
  return (
    <section
      id="events"
      className="relative overflow-hidden py-20 sm:py-24 bg-[#08090D] text-white"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '55px 55px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/25 bg-amber-400/10 text-amber-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <Sparkles size={14} />
            Every Occasion, Perfectly Managed
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight">
            Events We
            <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Bring to Life
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            From intimate celebrations to grand occasions, we bring together
            sound, lighting, LED screens and event arrangements to create
            memorable experiences.
          </p>

          <div className="flex items-center justify-center gap-3 mt-7">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
            <span className="w-2 h-2 rotate-45 bg-amber-400" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {EVENTS_COVERED.map((evt, idx) => (
            <div
              key={evt.title || idx}
              className="group relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-[#111217] shadow-xl transition-all duration-500 hover:border-amber-400/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Event Image */}
              <img
                src={evt.image}
                alt={evt.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/55 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Label */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-amber-300 bg-black/50 backdrop-blur-md border border-amber-400/25 px-3 py-1.5 rounded-full">
                  Event Experience
                </span>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 text-white group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all duration-300">
                <ArrowUpRight size={18} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="w-10 h-[2px] bg-gradient-to-r from-amber-300 to-yellow-600 mb-4 transition-all duration-500 group-hover:w-16" />

                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md">
                  {evt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-14 sm:mt-16 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            Have an upcoming celebration?
            <span className="text-amber-300 font-semibold ml-1">
              Let's make it special.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default EventsCovered;
