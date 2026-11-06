
import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/websiteData';

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#10121C] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-[-120px] w-80 h-80 bg-amber-500/[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-[-120px] w-80 h-80 bg-purple-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">

          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-4 py-2 rounded-full mb-5">
            <ShieldCheck className="w-4 h-4" />
            The Shree Ganesh Advantage
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-white">
            Why Choose
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-200">
              Shree Ganesh?
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6 mb-5 rounded-full" />

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Discover what makes our sound, lighting and event production
            services a valuable choice for your special occasions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = item.icon || Sparkles;

            return (
              <div
                key={item.id ?? idx}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#171A26] border border-amber-500/15 hover:border-amber-400/50 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.08)] transition-all duration-500 overflow-hidden"
              >

                {/* Decorative Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-400/[0.06] blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Feature Number */}
                <div className="relative flex items-center justify-between mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black group-hover:scale-105 transition-all duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-black tracking-[0.2em] text-slate-600 group-hover:text-amber-400/70 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-base sm:text-lg font-extrabold text-white uppercase leading-snug mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-7">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-300 to-yellow-500 group-hover:w-full transition-all duration-500" />

              </div>
            );
          })}

        </div>

        {/* Bottom Message */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>
              Bringing your event vision to life with sound, lighting and production.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
