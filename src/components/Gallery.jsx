
import React from 'react';
import {
  Camera,
  Images,
  Maximize2,
  Sparkles,
} from 'lucide-react';

const Gallery = ({
  galleryFilter,
  setGalleryFilter,
  filteredGallery,
  setLightboxIndex,
}) => {
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'concerts', label: 'Concerts & Festivals' },
    { id: 'weddings', label: 'Weddings & Celebrations' },
    { id: 'djnights', label: 'DJ Nights' },
    { id: 'corporate', label: 'Corporate Events' },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-20 sm:py-24 bg-[#08090D] text-white"
    >
      {/* Background Effects */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/25 bg-amber-400/10 text-amber-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <Camera size={14} />
            Our Event Gallery
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight">
            Moments That
            <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Explore glimpses of our event experiences, creative setups,
            sound arrangements and lighting productions.
          </p>

          <div className="flex items-center justify-center gap-3 mt-7">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
            <span className="w-2 h-2 rotate-45 bg-amber-400" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
          </div>

        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">

          {filters.map((tab) => {
            const isActive = galleryFilter === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setGalleryFilter(tab.id)}
                aria-pressed={isActive}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-300 to-yellow-600 text-black border-amber-300 shadow-lg shadow-amber-500/20'
                    : 'bg-white/[0.03] text-gray-400 border-white/10 hover:border-amber-400/50 hover:text-amber-300'
                }`}
              >
                {tab.label}
              </button>
            );
          })}

        </div>

        {/* Gallery Count */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-gray-400">
            <Images size={16} className="text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Our Showcase
            </span>
          </div>

          <span className="text-[11px] text-gray-500">
            {filteredGallery.length} {filteredGallery.length === 1 ? 'Project' : 'Projects'}
          </span>
        </div>

        {/* Gallery Grid */}
        {filteredGallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {filteredGallery.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${item.title} image`}
                className="group relative text-left rounded-2xl overflow-hidden border border-white/10 bg-[#111217] h-[270px] sm:h-[310px] lg:h-[330px] shadow-xl hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Category Label */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-amber-400/25 text-[9px] font-bold tracking-[0.15em] uppercase text-amber-300">
                    <Sparkles size={11} />
                    Event Showcase
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all duration-300">
                  <Maximize2 size={16} />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                  <div className="w-9 h-[2px] bg-gradient-to-r from-amber-300 to-yellow-600 mb-3 transition-all duration-500 group-hover:w-16" />

                  <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>

                  <span className="inline-block mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-amber-400 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View Full Image →
                  </span>

                </div>

              </button>
            ))}

          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 px-5 text-center">
            <Images size={38} className="mx-auto text-amber-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">
              No Projects Found
            </h3>
            <p className="text-sm text-gray-400">
              There are no gallery images in this category yet.
            </p>
            <button
              type="button"
              onClick={() => setGalleryFilter('all')}
              className="mt-5 px-5 py-2.5 rounded-full bg-amber-400 text-black text-xs font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Bottom Message */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm text-gray-400">
            Every event has a story.
            <span className="text-amber-300 font-semibold ml-1">
              Let's create yours.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
