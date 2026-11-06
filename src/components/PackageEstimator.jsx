
import React from 'react';
import {
  SlidersHorizontal,
  MessageCircle,
  Volume2,
  Lightbulb,
  Monitor,
  Layers,
  Sparkles,
  Users,
  MapPin,
  Check,
  ArrowUpRight,
  WandSparkles,
} from 'lucide-react';

import { generateWhatsAppLink } from '../data/websiteData';

const PackageEstimator = ({
  estimator,
  setEstimator,
  estimatorRecommendation,
}) => {

  const eventTypes = [
    { id: 'wedding', label: 'Wedding' },
    { id: 'concert', label: 'Concert' },
    { id: 'djnight', label: 'DJ Night' },
    { id: 'corporate', label: 'Corporate' },
  ];

  const guestCounts = [
    '100-300',
    '300-500',
    '500-1000',
    '1000+',
  ];

  const venues = [
    { id: 'indoor', label: 'Indoor', desc: 'Banquet / Hall' },
    { id: 'outdoor', label: 'Outdoor', desc: 'Lawn / Open Ground' },
  ];

  const updateEstimator = (key, value) => {
    setEstimator({
      ...estimator,
      [key]: value,
    });
  };

  const handleEstimatorWhatsApp = () => {
    const msg = `Hi Shree Ganesh Sound & Light!

I generated an event package recommendation on your website.

EVENT DETAILS
Event Type: ${estimator.eventType.toUpperCase()}
Expected Guests: ${estimator.guestCount}
Venue: ${estimator.venueType.toUpperCase()}

RECOMMENDED EQUIPMENT

Sound System: ${estimatorRecommendation.sound}
Lighting: ${estimatorRecommendation.light}
Stage & Truss: ${estimatorRecommendation.truss}
LED Screen: ${estimatorRecommendation.led}
Special FX: ${estimatorRecommendation.fx}

OPTIONAL ADDONS
LED Wall: ${estimator.includeLedWall ? 'Yes' : 'No'}
Special FX: ${estimator.includePyroFX ? 'Yes' : 'No'}

Please check the requirements and share availability along with a formal quotation.

Thank you!`;

    const whatsappUrl = generateWhatsAppLink(msg);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const recommendationCards = [
    {
      title: 'Audio System',
      icon: Volume2,
      value: estimatorRecommendation.sound,
    },
    {
      title: 'Lighting Setup',
      icon: Lightbulb,
      value: estimatorRecommendation.light,
    },
    {
      title: 'Stage & Truss',
      icon: Layers,
      value: estimatorRecommendation.truss,
    },
    {
      title: 'LED Display',
      icon: Monitor,
      value: estimatorRecommendation.led,
    },
    {
      title: 'Special Effects',
      icon: Sparkles,
      value: estimatorRecommendation.fx,
    },
  ];

  return (
    <section
      id="estimator"
      className="relative overflow-hidden py-20 sm:py-24 bg-[#08090D] text-white"
    >

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/25 bg-amber-400/10 text-amber-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <WandSparkles size={14} />
            Interactive Event Planner
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight">
            Build Your Event
            <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Equipment Package
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Tell us about your event, audience and venue. Get an equipment
            recommendation based on your selected requirements.
          </p>

          <div className="flex items-center justify-center gap-3 mt-7">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
            <span className="w-2 h-2 rotate-45 bg-amber-400" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
          </div>

        </div>

        {/* Main Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-start">

          {/* Configuration Panel */}
          <div className="lg:col-span-7 rounded-3xl bg-[#111217] border border-white/10 p-5 sm:p-8 shadow-2xl">

            {/* Panel Heading */}
            <div className="flex items-center justify-between gap-3 mb-8 pb-5 border-b border-white/10">

              <div>
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <SlidersHorizontal size={19} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    Configure Your Event
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                  Event Requirements
                </h3>
              </div>

              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 items-center justify-center">
                <Sparkles size={22} className="text-amber-400" />
              </div>

            </div>

            <div className="space-y-8">

              {/* Event Type */}
              <div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center text-xs font-bold">
                    01
                  </span>
                  <label className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                    Select Event Category
                  </label>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

                  {eventTypes.map((type) => {
                    const active = estimator.eventType === type.id;

                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => updateEstimator('eventType', type.id)}
                        aria-pressed={active}
                        className={`relative min-h-14 px-3 py-3 rounded-xl border text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                          active
                            ? 'bg-gradient-to-br from-amber-300 to-yellow-600 text-black border-amber-300 shadow-lg shadow-amber-500/20'
                            : 'bg-white/[0.03] border-white/10 text-gray-400 hover:border-amber-400/50 hover:text-amber-300'
                        }`}
                      >
                        {type.label}

                        {active && (
                          <Check
                            size={14}
                            className="absolute top-2 right-2"
                          />
                        )}
                      </button>
                    );
                  })}

                </div>
              </div>

              {/* Guest Count */}
              <div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center text-xs font-bold">
                    02
                  </span>
                  <label className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                    Expected Audience Size
                  </label>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

                  {guestCounts.map((count) => {
                    const active = estimator.guestCount === count;

                    return (
                      <button
                        key={count}
                        type="button"
                        onClick={() => updateEstimator('guestCount', count)}
                        aria-pressed={active}
                        className={`relative py-4 px-2 rounded-xl border transition-all duration-300 ${
                          active
                            ? 'bg-gradient-to-br from-amber-300 to-yellow-600 text-black border-amber-300 shadow-lg shadow-amber-500/20'
                            : 'bg-white/[0.03] border-white/10 text-gray-300 hover:border-amber-400/50'
                        }`}
                      >
                        <Users
                          size={17}
                          className={`mx-auto mb-2 ${
                            active ? 'text-black' : 'text-amber-400'
                          }`}
                        />

                        <span className="block text-sm font-black">
                          {count}
                        </span>

                        <span className="text-[9px] font-bold uppercase tracking-wider opacity-75">
                          Guests
                        </span>

                      </button>
                    );
                  })}

                </div>
              </div>

              {/* Venue */}
              <div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center text-xs font-bold">
                    03
                  </span>
                  <label className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                    Select Venue Layout
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {venues.map((venue) => {
                    const active = estimator.venueType === venue.id;

                    return (
                      <button
                        key={venue.id}
                        type="button"
                        onClick={() => updateEstimator('venueType', venue.id)}
                        aria-pressed={active}
                        className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 ${
                          active
                            ? 'bg-amber-400/10 border-amber-400 shadow-lg shadow-amber-500/5'
                            : 'bg-white/[0.03] border-white/10 hover:border-amber-400/40'
                        }`}
                      >

                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          active
                            ? 'bg-amber-400 text-black'
                            : 'bg-white/5 text-amber-400'
                        }`}>
                          <MapPin size={20} />
                        </div>

                        <div className="flex-1">
                          <p className={`text-sm font-bold uppercase ${
                            active ? 'text-amber-300' : 'text-white'
                          }`}>
                            {venue.label}
                          </p>
                          <p className="text-[10px] text-gray-500 mt-1">
                            {venue.desc}
                          </p>
                        </div>

                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          active
                            ? 'border-amber-400 bg-amber-400 text-black'
                            : 'border-gray-600'
                        }`}>
                          {active && <Check size={12} />}
                        </div>

                      </button>
                    );
                  })}

                </div>
              </div>

              {/* Optional Addons */}
              <div className="pt-6 border-t border-white/10">

                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center text-xs font-bold">
                    04
                  </span>

                  <div>
                    <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                      Optional Add-ons
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1">
                      Customize your production requirements
                    </p>
                  </div>
                </div>

                <div className="space-y-3">

                  {/* LED Wall */}
                  <label className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    estimator.includeLedWall
                      ? 'bg-amber-400/10 border-amber-400/50'
                      : 'bg-white/[0.03] border-white/10 hover:border-amber-400/30'
                  }`}>

                    <input
                      type="checkbox"
                      checked={estimator.includeLedWall}
                      onChange={(e) =>
                        updateEstimator('includeLedWall', e.target.checked)
                      }
                      className="sr-only"
                    />

                    <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
                      estimator.includeLedWall
                        ? 'bg-amber-400 text-black'
                        : 'bg-white/5 text-amber-400'
                    }`}>
                      <Monitor size={19} />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs sm:text-sm font-bold text-white">
                        LED Video Wall
                      </p>
                      <p className="text-[10px] text-gray-500 mt-1">
                        Add an LED screen backdrop to your event
                      </p>
                    </div>

                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                      estimator.includeLedWall
                        ? 'bg-amber-400 border-amber-400 text-black'
                        : 'border-gray-600'
                    }`}>
                      {estimator.includeLedWall && <Check size={13} />}
                    </div>

                  </label>

                  {/* Special FX */}
                  <label className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    estimator.includePyroFX
                      ? 'bg-amber-400/10 border-amber-400/50'
                      : 'bg-white/[0.03] border-white/10 hover:border-amber-400/30'
                  }`}>

                    <input
                      type="checkbox"
                      checked={estimator.includePyroFX}
                      onChange={(e) =>
                        updateEstimator('includePyroFX', e.target.checked)
                      }
                      className="sr-only"
                    />

                    <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
                      estimator.includePyroFX
                        ? 'bg-amber-400 text-black'
                        : 'bg-white/5 text-amber-400'
                    }`}>
                      <Sparkles size={19} />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs sm:text-sm font-bold text-white">
                        Special Effects
                      </p>
                      <p className="text-[10px] text-gray-500 mt-1">
                        Add Sparkular effects and low fog options
                      </p>
                    </div>

                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                      estimator.includePyroFX
                        ? 'bg-amber-400 border-amber-400 text-black'
                        : 'border-gray-600'
                    }`}>
                      {estimator.includePyroFX && <Check size={13} />}
                    </div>

                  </label>

                </div>
              </div>

            </div>
          </div>

          {/* Recommendation Panel */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-amber-400/30 bg-gradient-to-b from-[#19150C] via-[#111217] to-[#090A0E] p-5 sm:p-7 shadow-2xl">

            {/* Panel Glow */}
            <div className="absolute -top-24 right-0 w-64 h-64 bg-amber-400/10 blur-[90px] rounded-full pointer-events-none" />

            <div className="relative z-10">

              {/* Recommendation Header */}
              <div className="flex items-center gap-2 mb-4">

                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-300 to-yellow-600 text-black text-[9px] font-black uppercase tracking-wider">
                  <Sparkles size={12} />
                  Recommended Package
                </span>

              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight">
                Your Event
                <span className="block text-amber-400">
                  Setup Preview
                </span>
              </h3>

              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                Based on your selected event requirements, here is your
                recommended equipment configuration.
              </p>

              {/* Selected Event Summary */}
              <div className="grid grid-cols-3 gap-2 mt-7 mb-7">

                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                  <p className="text-[9px] text-gray-500 uppercase font-bold mb-1">
                    Event
                  </p>
                  <p className="text-[11px] sm:text-xs font-bold text-amber-300 capitalize break-words">
                    {estimator.eventType}
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                  <p className="text-[9px] text-gray-500 uppercase font-bold mb-1">
                    Guests
                  </p>
                  <p className="text-[11px] sm:text-xs font-bold text-white">
                    {estimator.guestCount}
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                  <p className="text-[9px] text-gray-500 uppercase font-bold mb-1">
                    Venue
                  </p>
                  <p className="text-[11px] sm:text-xs font-bold text-white capitalize">
                    {estimator.venueType}
                  </p>
                </div>

              </div>

              {/* Equipment Recommendations */}
              <div className="space-y-3 mb-7">

                {recommendationCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-3 p-4 rounded-xl bg-[#08090D]/70 border border-white/[0.08] hover:border-amber-400/30 transition-all duration-300"
                    >

                      <div className="w-9 h-9 shrink-0 rounded-lg bg-amber-400/10 border border-amber-400/15 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
                        <Icon size={17} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-1">
                          {item.title}
                        </p>

                        <p className="text-xs sm:text-sm font-semibold text-gray-200 leading-relaxed">
                          {item.value}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

              {/* WhatsApp CTA */}
              <button
                type="button"
                onClick={handleEstimatorWhatsApp}
                className="group w-full py-4 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-3 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Send Package on WhatsApp
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <p className="text-[10px] text-center text-gray-500 mt-4 leading-relaxed">
                This is an indicative equipment recommendation, not a
                confirmed quotation. Final requirements and pricing
                will be discussed with our team.
              </p>

            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-xs sm:text-sm text-gray-400">
            Every event is different.
            <span className="text-amber-300 font-semibold ml-1">
              Let's plan yours together.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default PackageEstimator;
