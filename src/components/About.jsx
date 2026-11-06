
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Volume2,
  Lightbulb,
  ChevronRight,
  Music2,
  MonitorPlay,
  PartyPopper,
  MapPin,
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowUpRight
} from 'lucide-react';

const About = () => {

  const services = [
    {
      icon: Volume2,
      title: 'Professional Sound',
      desc: 'Powerful and clear audio systems for every event.'
    },
    {
      icon: Lightbulb,
      title: 'DJ & Stage Lighting',
      desc: 'Dynamic lighting and stunning visual effects.'
    },
    {
      icon: MonitorPlay,
      title: 'LED Screens',
      desc: 'LED walls and big screen visual experiences.'
    },
    {
      icon: PartyPopper,
      title: 'Complete Events',
      desc: 'Stage, decoration and complete event management.'
    }
  ];

  const highlights = [
    'Professional Sound & Lighting Setup',
    'Wedding & Corporate Event Solutions',
    'Stage, LED Wall & Decoration',
    'Complete Event Management'
  ];

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-[#090B13]
      text-white overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-0 w-96 h-96
          bg-amber-500/10 blur-[130px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-96 h-96
          bg-purple-600/10 blur-[130px] rounded-full" />

        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto
        px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-amber-400/10 border border-amber-400/25
            text-amber-300 text-xs font-bold
            uppercase tracking-[2px] mb-5">

            <Sparkles className="w-4 h-4" />
            Get To Know Us

          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl
            font-black uppercase leading-tight">

            More Than Just Sound.
            <span className="block mt-2 bg-gradient-to-r
              from-amber-200 via-yellow-400 to-amber-500
              bg-clip-text text-transparent">
              We Create Experiences.
            </span>

          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl
            mx-auto text-sm sm:text-base leading-relaxed">

            Bringing together sound, lighting and creativity
            to make every celebration truly memorable.

          </p>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2
          gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">

            <div className="absolute -inset-3 rounded-3xl
              bg-gradient-to-br from-amber-400/20
              via-purple-500/10 to-blue-500/20
              blur-xl" />

            <div className="relative rounded-3xl
              overflow-hidden border border-amber-400/30
              shadow-2xl shadow-black/50 group">

              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=85&w=1200"
                alt="Professional live event production and stage lighting"
                className="w-full h-[420px] sm:h-[540px]
                object-cover group-hover:scale-105
                transition-transform duration-1000"
              />

              <div className="absolute inset-0
                bg-gradient-to-t from-[#090B13]
                via-[#090B13]/10 to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0
                right-0 p-6 sm:p-8">

                <div className="flex items-center gap-4
                  p-4 rounded-2xl
                  bg-[#10121C]/90 backdrop-blur-xl
                  border border-amber-400/25">

                  <div className="w-12 h-12 rounded-xl
                    bg-gradient-to-br from-amber-300
                    to-yellow-600 flex items-center
                    justify-center shrink-0">

                    <Music2 className="w-6 h-6 text-black" />

                  </div>

                  <div>

                    <h3 className="font-bold text-white
                      text-sm sm:text-base">
                      Every Event. Every Detail.
                    </h3>

                    <p className="text-xs text-slate-400 mt-1">
                      Sound, Lights & Complete Event Solutions
                    </p>

                  </div>

                </div>

              </div>

              {/* Floating Location */}
              <div className="absolute top-5 left-5
                flex items-center gap-2 px-4 py-2
                rounded-full bg-black/70
                border border-amber-400/30
                backdrop-blur-lg">

                <MapPin className="w-4 h-4 text-amber-400" />

                <span className="text-xs font-bold
                  text-white tracking-wide">
                  INDORE, MP
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <span className="text-xs font-bold
              uppercase tracking-[2px]
              text-amber-400">
              About Shree Ganesh Sound & Light
            </span>

            <h3 className="text-3xl sm:text-4xl
              font-black uppercase leading-tight mt-4 mb-6">

              Turning Your
              <span className="block text-amber-400">
                Vision Into Reality.
              </span>

            </h3>

            <p className="text-slate-300 text-sm sm:text-base
              leading-8 mb-5">

              <strong className="text-white">
                Shree Ganesh Sound & Light
              </strong>
              is your event production and management
              partner in Indore. We help transform your
              special occasions into extraordinary
              experiences with professional sound systems,
              stunning lighting and complete event setups.

            </p>

            <p className="text-slate-400 text-sm
              leading-7 mb-7">

              From weddings, birthday celebrations and
              grand functions to corporate events and
              live performances, we bring together
              the right equipment, creative ideas and
              event coordination to make your occasion
              memorable.

            </p>

            {/* Owner Details */}
            <div className="flex items-center gap-4
              p-4 rounded-2xl bg-[#171A25]
              border border-amber-400/20 mb-8">

              <div className="w-14 h-14 rounded-xl
                bg-gradient-to-br from-amber-300
                to-yellow-600 flex items-center
                justify-center shrink-0">

                <span className="text-black text-xl
                  font-black">
                  LS
                </span>

              </div>

              <div className="flex-1">

                <p className="text-[10px] uppercase
                  tracking-[2px] text-slate-500 font-bold">
                  Your Event Partner
                </p>

                <h4 className="text-lg font-extrabold
                  text-white mt-1">
                  Lucky Shriwas
                </h4>

                <p className="text-xs text-slate-400">
                  Shree Ganesh Sound & Light, Indore
                </p>

              </div>

              <a
                href="tel:+917000389061"
                className="w-11 h-11 rounded-xl
                bg-amber-400/10 border
                border-amber-400/30
                flex items-center justify-center
                text-amber-400 hover:bg-amber-400
                hover:text-black transition-all"
                aria-label="Call Lucky Shriwas"
              >

                <Phone className="w-5 h-5" />

              </a>

            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2
              gap-x-5 gap-y-4 mb-9">

              {highlights.map((item, index) => (

                <div key={index}
                  className="flex items-start gap-2">

                  <CheckCircle2 className="w-4 h-4
                    text-amber-400 shrink-0 mt-0.5" />

                  <span className="text-xs sm:text-sm
                    text-slate-300 font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">

              <Link
                to="/contact"
                className="inline-flex items-center
                justify-center gap-2 px-7 py-4
                rounded-xl bg-gradient-to-r
                from-amber-300 via-yellow-400
                to-amber-500 text-black
                font-extrabold text-xs uppercase
                tracking-wider shadow-lg
                shadow-amber-500/20
                hover:scale-[1.03] transition-all"
              >

                Let's Plan Your Event

                <ChevronRight className="w-4 h-4
                  stroke-[3]" />

              </Link>

              <a
                href="https://wa.me/917000389061?text=Hi%20Lucky%20Shriwas!%20I%20want%20to%20know%20more%20about%20your%20event%20services."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center
                justify-center gap-2 px-7 py-4
                rounded-xl bg-white/[0.04]
                border border-white/15
                text-white font-bold text-xs
                uppercase tracking-wider
                hover:border-amber-400/50
                hover:text-amber-300 transition-all"
              >

                Contact Us

                <ArrowUpRight className="w-4 h-4" />

              </a>

            </div>

          </div>

        </div>

        {/* SERVICES CARDS */}
        <div className="mt-24">

          <div className="text-center mb-10">

            <p className="text-xs font-bold uppercase
              tracking-[3px] text-amber-400 mb-3">
              What We Bring To Your Event
            </p>

            <h3 className="text-2xl sm:text-3xl
              font-black uppercase text-white">
              Our Expertise
            </h3>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-5">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (

                <div key={index}
                  className="group p-6 rounded-2xl
                  bg-[#141722] border border-white/10
                  hover:border-amber-400/40
                  hover:-translate-y-2
                  transition-all duration-300">

                  <div className="w-12 h-12 rounded-xl
                    bg-amber-400/10 border
                    border-amber-400/20
                    flex items-center justify-center
                    mb-5 group-hover:bg-amber-400
                    transition-all">

                    <Icon className="w-6 h-6
                      text-amber-400
                      group-hover:text-black
                      transition-all" />

                  </div>

                  <h4 className="font-bold text-white
                    text-base mb-2">
                    {service.title}
                  </h4>

                  <p className="text-xs text-slate-400
                    leading-6">
                    {service.desc}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;