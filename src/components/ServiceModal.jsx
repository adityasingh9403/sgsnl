
import React, { useEffect } from 'react';
import {
  X,
  Cpu,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { generateWhatsAppLink } from '../data/websiteData';

const ServiceModal = ({ selectedService, setSelectedService }) => {
  useEffect(() => {
    if (!selectedService) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedService(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedService, setSelectedService]);

  if (!selectedService) return null;

  const closeModal = () => setSelectedService(null);

  const serviceTitle = selectedService.title || 'Event Service';
  const specs = Array.isArray(selectedService.specs)
    ? selectedService.specs
    : [];

  const whatsappMessage =
    `Hello Shree Ganesh Sound & Light! I am interested in booking ${serviceTitle} for my upcoming event. Please share the details and quotation.`;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
      onClick={closeModal}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#11131B] border border-amber-400/30 shadow-[0_25px_80px_rgba(0,0,0,0.75)] animate-fadeIn"
      >
        {/* Header Image */}
        <div className="relative h-52 sm:h-64 overflow-hidden bg-[#1A1D29]">
          {selectedService.image ? (
            <img
              src={selectedService.image}
              alt={serviceTitle}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : null}

          <div className="absolute inset-0 bg-gradient-to-t from-[#11131B] via-[#11131B]/45 to-black/20" />

          {/* Decorative Gold Glow */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-amber-400/10 blur-[80px] rounded-full pointer-events-none" />

          {/* Close Button */}
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close service details"
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 border border-white/15 text-white hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service Heading */}
          <div className="absolute bottom-5 left-5 right-5 sm:left-7 sm:right-7">
            {selectedService.tagline && (
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
                  {selectedService.tagline}
                </span>
              </div>
            )}

            <h3
              id="service-modal-title"
              className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight"
            >
              {serviceTitle}
            </h3>

            <div className="w-16 h-1 bg-gradient-to-r from-amber-300 to-amber-600 rounded-full mt-3" />
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-7">

          {/* Description */}
          {selectedService.fullDesc && (
            <p className="text-sm sm:text-[15px] text-slate-300 leading-7 mb-7">
              {selectedService.fullDesc}
            </p>
          )}

          {/* Specifications */}
          {specs.length > 0 && (
            <div className="mb-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-amber-400/10 border border-amber-400/20">
                  <Cpu className="w-4 h-4 text-amber-400" />
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
                    Service Highlights
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Details of this service
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1A1D29] border border-white/5 hover:border-amber-400/25 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-white/10">
            <a
              href={generateWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeModal}
              className="flex-1 min-h-[52px] px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Request Service Quote
            </a>

            <button
              type="button"
              onClick={closeModal}
              className="sm:w-auto px-7 py-3 rounded-xl bg-[#1A1D29] border border-amber-500/20 hover:border-amber-400 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Close
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-center text-[10px] text-slate-500 mt-5">
            Shree Ganesh Sound & Light · Indore, Madhya Pradesh
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div>
    </div>
  );
};

export default ServiceModal;
