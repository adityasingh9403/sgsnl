
import React, { useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Images,
} from 'lucide-react';

const LightboxModal = ({
  lightboxIndex,
  setLightboxIndex,
  filteredGallery,
  handlePrevImage,
  handleNextImage,
}) => {
  const isOpen =
    lightboxIndex !== null &&
    lightboxIndex >= 0 &&
    lightboxIndex < filteredGallery.length;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      }

      if (event.key === 'ArrowLeft') {
        handlePrevImage();
      }

      if (event.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    // Prevent background scrolling while modal is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [
    isOpen,
    setLightboxIndex,
    handlePrevImage,
    handleNextImage,
  ]);

  if (!isOpen) return null;

  const currentImage = filteredGallery[lightboxIndex];

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#050506]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
      onClick={() => setLightboxIndex(null)}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Modal Container */}
      <div
        className="relative z-10 w-full max-w-6xl flex flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >

        {/* Top Controls */}
        <div className="w-full flex items-center justify-between mb-4 sm:mb-5">

          {/* Gallery Label */}
          <div className="flex items-center gap-2 text-amber-300">
            <Images size={17} />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              Event Gallery
            </span>
          </div>

          {/* Image Counter */}
          <div className="flex items-center gap-3">

            <span className="text-xs font-semibold text-gray-400 tabular-nums">
              <span className="text-amber-300">
                {lightboxIndex + 1}
              </span>
              {' / '}
              {filteredGallery.length}
            </span>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close gallery"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300"
            >
              <X size={21} />
            </button>

          </div>
        </div>

        {/* Image Display Area */}
        <div className="relative w-full flex items-center justify-center">

          {/* Previous Button */}
          {filteredGallery.length > 1 && (
            <button
              type="button"
              onClick={handlePrevImage}
              aria-label="Previous image"
              className="absolute left-1 sm:left-3 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/30 text-white flex items-center justify-center hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300 shadow-xl"
            >
              <ChevronLeft size={25} />
            </button>
          )}

          {/* Main Image */}
          <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-amber-400/20 bg-[#101116] shadow-2xl shadow-black/50">

            <div className="absolute inset-0 border border-white/5 rounded-xl sm:rounded-2xl pointer-events-none z-10" />

            <img
              key={currentImage.id || lightboxIndex}
              src={currentImage.image}
              alt={currentImage.title}
              className="w-full max-h-[68vh] sm:max-h-[75vh] object-contain mx-auto animate-in fade-in duration-300"
            />

            {/* Image Top Badge */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/25 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-amber-300">
                <Maximize2 size={12} />
                Full View
              </span>
            </div>

          </div>

          {/* Next Button */}
          {filteredGallery.length > 1 && (
            <button
              type="button"
              onClick={handleNextImage}
              aria-label="Next image"
              className="absolute right-1 sm:right-3 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/30 text-white flex items-center justify-center hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300 shadow-xl"
            >
              <ChevronRight size={25} />
            </button>
          )}

        </div>

        {/* Image Caption */}
        <div className="w-full max-w-3xl text-center mt-5 sm:mt-7 px-4">

          <div className="w-10 h-[2px] bg-gradient-to-r from-amber-300 to-yellow-600 mx-auto mb-4" />

          <h3 className="text-lg sm:text-2xl font-black uppercase tracking-wide text-white">
            {currentImage.title}
          </h3>

          {currentImage.desc && (
            <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed max-w-2xl mx-auto">
              {currentImage.desc}
            </p>
          )}

        </div>

        {/* Keyboard Instructions */}
        {filteredGallery.length > 1 && (
          <div className="hidden sm:flex items-center gap-5 mt-6 text-[10px] uppercase tracking-wider text-gray-500">
            <span>← Previous</span>
            <span className="w-1 h-1 rounded-full bg-amber-500" />
            <span>Next →</span>
            <span className="w-1 h-1 rounded-full bg-amber-500" />
            <span>ESC to Close</span>
          </div>
        )}

      </div>
    </div>
  );
};

export default LightboxModal;
