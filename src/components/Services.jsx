
import React from 'react';
import { ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/websiteData';

const Services = ({ setSelectedService }) => {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#10121C] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-[-150px] w-80 h-80 bg-amber-500/[0.06] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-[-150px] w-80 h-80 bg-purple-600/[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">

          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-4 py-2 rounded-full mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Our Core Services
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-white">
            Entertainment & Stage
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-200">
              Production Services
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6 mb-5 rounded-full" />

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            From sound and lighting to LED screens and complete event setups,
            explore our services to find the right solutions for your event.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {SERVICES_DATA.map((service, index) => {
            const IconComp = service.icon;

            return (
              <button
                type="button"
                key={service.id}
                onClick={() => setSelectedService(service)}
                aria-label={`Explore ${service.title} service details`}
                className="group relative w-full min-w-0 text-left rounded-2xl bg-[#171A26] border border-amber-500/15 overflow-hidden hover:border-amber-400/60 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.10)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >

                {/* Image Area */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#202330]">

                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  )}

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171A26] via-[#171A26]/30 to-black/10" />

                  {/* Gold Glow */}
                  <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/[0.04] transition-colors duration-500" />

                  {/* Service Number */}
                  <div className="absolute top-4 left-4 text-[10px] font-black tracking-[0.2em] text-white/80 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
                    SERVICE {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Service Icon */}
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-[#10121C]/85 backdrop-blur-md border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                    {IconComp ? (
                      <IconComp className="w-5 h-5" />
                    ) : (
                      <Sparkles className="w-5 h-5" />
                    )}
                  </div>

                  {/* Bottom Gold Line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-300 to-yellow-500 group-hover:w-full transition-all duration-500" />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col min-h-[205px]">

                  <h3 className="text-base sm:text-lg font-extrabold text-white uppercase leading-snug group-hover:text-amber-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {service.tagline && (
                    <p className="text-[10px] sm:text-xs text-amber-300 font-bold uppercase tracking-wider mt-2">
                      {service.tagline}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Explore Button */}
                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                      Explore Service
                    </span>

                    <div className="w-8 h-8 rounded-full border border-amber-400/25 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 group-hover:translate-x-1 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </button>
            );
          })}

        </div>

        {/* Bottom Information */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Have a specific event requirement?
            <span className="text-amber-400 font-semibold ml-1">
              Explore a service and connect with our team.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
