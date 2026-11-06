
import React from 'react';
import {
  Phone,
  MapPin,
  MessageCircle,
  Music2,
  Sparkles,
  ArrowUpRight,
  Volume2,
  Lightbulb,
  MonitorPlay,
  PartyPopper,
  CheckCircle2
} from 'lucide-react';

import { generateWhatsAppLink } from '../data/websiteData';

const Contact = () => {

  const services = [
    { icon: Volume2, name: 'Professional Sound Systems' },
    { icon: Lightbulb, name: 'DJ & Stage Lighting' },
    { icon: MonitorPlay, name: 'LED Walls & Screens' },
    { icon: PartyPopper, name: 'Complete Event Management' }
  ];

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-[#090B13]
      text-white overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-96 h-96
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

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-amber-400/10 border border-amber-400/25
            text-amber-300 text-xs font-bold
            uppercase tracking-[2px] mb-5">

            <Sparkles className="w-4 h-4" />
            Get In Touch

          </span>

          <h2 className="text-3xl sm:text-5xl
            font-black uppercase leading-tight">

            Let's Make Your Next Event

            <span className="block mt-2 bg-gradient-to-r
              from-amber-200 via-yellow-400 to-amber-500
              bg-clip-text text-transparent">

              Truly Unforgettable.

            </span>

          </h2>

          <p className="text-slate-400 text-sm sm:text-base
            leading-7 mt-5">

            From weddings and celebrations to concerts
            and corporate events, we bring the perfect
            combination of sound, lighting and event
            management to your special occasion.

          </p>

        </div>

        {/* Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <span className="text-xs font-bold
              uppercase tracking-[3px] text-amber-400">

              Connect With Us

            </span>

            <h3 className="text-3xl sm:text-4xl
              font-black uppercase leading-tight mt-4 mb-6">

              Your Event.
              <span className="block text-amber-400">
                Our Passion.
              </span>

            </h3>

            <p className="text-slate-400 text-sm
              leading-7 mb-9">

              Looking for professional sound systems,
              stunning stage lighting, LED screens or
              complete event arrangements?

              Get in touch with Lucky Shriwas and let's
              make your event extraordinary.

            </p>

            {/* Contact Details */}
            <div className="space-y-4">

              {/* Phone */}
              <a
                href="tel:+917000389061"
                className="group flex items-center gap-4
                p-5 rounded-2xl bg-[#151823]
                border border-white/10
                hover:border-amber-400/50
                transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl
                  bg-amber-400/10 border
                  border-amber-400/20
                  flex items-center justify-center
                  shrink-0 group-hover:bg-amber-400
                  transition-all">

                  <Phone className="w-6 h-6
                    text-amber-400
                    group-hover:text-black" />

                </div>

                <div className="flex-1">

                  <p className="text-[10px] font-bold
                    uppercase tracking-[2px]
                    text-slate-500">

                    Call Us Directly

                  </p>

                  <h4 className="text-lg font-bold
                    text-white mt-1">

                    +91 7000389061

                  </h4>

                  <p className="text-xs text-slate-400 mt-1">
                    Contact Lucky Shriwas
                  </p>

                </div>

                <ArrowUpRight className="w-5 h-5
                  text-slate-500
                  group-hover:text-amber-400" />

              </a>

              {/* Location */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Indore+Madhya+Pradesh"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4
                p-5 rounded-2xl bg-[#151823]
                border border-white/10
                hover:border-amber-400/50
                transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl
                  bg-amber-400/10 border
                  border-amber-400/20
                  flex items-center justify-center
                  shrink-0 group-hover:bg-amber-400
                  transition-all">

                  <MapPin className="w-6 h-6
                    text-amber-400
                    group-hover:text-black" />

                </div>

                <div className="flex-1">

                  <p className="text-[10px] font-bold
                    uppercase tracking-[2px]
                    text-slate-500">

                    Our Location

                  </p>

                  <h4 className="text-lg font-bold
                    text-white mt-1">

                    Indore, Madhya Pradesh

                  </h4>

                  <p className="text-xs text-slate-400 mt-1">
                    Event Services & Management
                  </p>

                </div>

                <ArrowUpRight className="w-5 h-5
                  text-slate-500
                  group-hover:text-amber-400" />

              </a>

            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6 p-6 rounded-2xl
              bg-gradient-to-br from-[#10291F]
              to-[#151823] border border-emerald-500/30">

              <div className="flex items-center gap-3 mb-3">

                <MessageCircle className="w-6 h-6
                  text-emerald-400" />

                <h4 className="font-bold text-emerald-300
                  uppercase text-sm">

                  Let's Talk On WhatsApp

                </h4>

              </div>

              <p className="text-xs text-slate-300
                leading-6 mb-5">

                Have an event coming up? Connect with
                us directly to discuss your requirements
                and event arrangements.

              </p>

              <a
                href={generateWhatsAppLink(
                  "Hi Lucky Shriwas! I am interested in Shree Ganesh Sound & Light services. I would like to discuss my upcoming event."
                )}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center
                justify-center gap-2 py-4 rounded-xl
                bg-emerald-600 hover:bg-emerald-500
                text-white font-extrabold text-xs
                uppercase tracking-wider transition-all"
              >

                <MessageCircle className="w-5 h-5" />

                Chat On WhatsApp

                <ArrowUpRight className="w-4 h-4" />

              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <div className="absolute inset-10
              bg-amber-400/15 blur-[100px]
              rounded-full" />

            <div className="relative rounded-3xl
              overflow-hidden bg-gradient-to-br
              from-[#20202A] via-[#141722]
              to-[#090B13] border border-amber-400/25
              p-7 sm:p-10 shadow-2xl">

              {/* Brand Visual */}
              <div className="text-center">

                <div className="inline-flex items-center
                  justify-center w-16 h-16 rounded-2xl
                  bg-amber-400/10 border
                  border-amber-400/25 mb-5">

                  <Music2 className="w-8 h-8
                    text-amber-400" />

                </div>

                <p className="text-xs font-bold
                  uppercase tracking-[3px]
                  text-amber-400">

                  Shree Ganesh Presents

                </p>

                <h3 className="text-3xl sm:text-4xl
                  font-black uppercase mt-4">

                  Sound & Light

                </h3>

                <p className="text-sm text-slate-400
                  mt-3 leading-6">

                  Complete Event Production
                  & Management Solutions

                </p>

              </div>

              <div className="h-px my-8 bg-gradient-to-r
                from-transparent via-amber-400/50
                to-transparent" />

              {/* Services */}
              <h4 className="text-sm font-bold
                uppercase tracking-[2px]
                text-white mb-6">

                What We Offer

              </h4>

              <div className="space-y-5">

                {services.map((service, index) => {

                  const Icon = service.icon;

                  return (

                    <div key={index}
                      className="flex items-center gap-4">

                      <div className="w-11 h-11
                        rounded-xl bg-amber-400/10
                        border border-amber-400/20
                        flex items-center justify-center">

                        <Icon className="w-5 h-5
                          text-amber-400" />

                      </div>

                      <p className="text-sm font-semibold
                        text-slate-200">

                        {service.name}

                      </p>

                      <CheckCircle2 className="w-4 h-4
                        text-amber-400 ml-auto" />

                    </div>

                  );

                })}

              </div>

              {/* Owner */}
              <div className="mt-9 p-5 rounded-2xl
                bg-white/[0.04]
                border border-amber-400/20">

                <p className="text-[10px] font-bold
                  uppercase tracking-[2px]
                  text-slate-500">

                  Your Event Partner

                </p>

                <div className="flex items-center
                  justify-between gap-3 mt-2">

                  <div>

                    <h4 className="text-xl
                      font-black text-white">

                      Lucky Shriwas

                    </h4>

                    <p className="text-xs text-slate-400 mt-1">
                      Indore, Madhya Pradesh
                    </p>

                  </div>

                  <Sparkles className="w-8 h-8
                    text-amber-400" />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center
          p-8 sm:p-10 rounded-3xl
          border border-amber-400/20
          bg-gradient-to-r from-[#151823]
          via-[#1B1C27] to-[#151823]">

          <h3 className="text-2xl sm:text-3xl
            font-black uppercase">

            Let's Create Something
            <span className="text-amber-400">
              {' '}Amazing.
            </span>

          </h3>

          <p className="text-sm text-slate-400
            mt-3 mb-7">

            Make your next celebration an experience
            worth remembering.

          </p>

          <a
            href="tel:+917000389061"
            className="inline-flex items-center
            justify-center gap-2 px-8 py-4
            rounded-xl bg-gradient-to-r
            from-amber-300 to-yellow-500
            text-black font-black text-xs
            uppercase tracking-wider
            hover:scale-105 transition-all"
          >

            <Phone className="w-4 h-4" />

            Contact Lucky Shriwas

            <ArrowUpRight className="w-4 h-4" />

          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;
