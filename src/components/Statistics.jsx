
import React from 'react';
import {
  CalendarDays,
  Layers3,
  AudioLines,
  Clock3,
  Sparkles,
} from 'lucide-react';

const statisticsData = [
  {
    id: 1,
    value: '850+',
    label: 'Events Executed',
    icon: CalendarDays,
  },
  {
    id: 2,
    value: '120+',
    label: 'Concert Stages Built',
    icon: Layers3,
  },
  {
    id: 3,
    value: '50,000 Watts',
    label: 'Peak Audio Headroom',
    icon: AudioLines,
  },
  {
    id: 4,
    value: '100%',
    label: 'On-Time Execution',
    icon: Clock3,
  },
];

const Statistics = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#10121C] border-y border-amber-500/15 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-400/[0.05] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Intro */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            Our Experience in Numbers
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-3">
            Performance That <span className="text-amber-400">Speaks</span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {statisticsData.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="group relative p-5 sm:p-7 rounded-2xl bg-[#171A26] border border-amber-500/15 text-center overflow-hidden hover:border-amber-400/50 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(245,158,11,0.08)] transition-all duration-300"
              >

                {/* Card Glow */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-400/[0.06] blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative w-12 h-12 mx-auto mb-5 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Number */}
                <p className="relative text-3xl sm:text-4xl lg:text-[2.6rem] font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 mb-3">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="relative text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider leading-relaxed">
                  {stat.label}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-amber-300 to-yellow-500 group-hover:w-1/2 transition-all duration-500" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Statistics;
