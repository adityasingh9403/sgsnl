
import React, { useEffect } from 'react';
import { X, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { generateWhatsAppLink } from '../data/websiteData';

const QuickQuoteModal = ({ quoteModalOpen, setQuoteModalOpen }) => {
  useEffect(() => {
    if (!quoteModalOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setQuoteModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [quoteModalOpen, setQuoteModalOpen]);

  if (!quoteModalOpen) return null;

  const closeModal = () => setQuoteModalOpen(false);

  const whatsappMessage =
    "Hello Shree Ganesh Sound & Light! I would like to request a quotation for my upcoming event. Please share the details.";

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={closeModal}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-amber-400/30 bg-[#11131B] shadow-[0_25px_80px_rgba(0,0,0,0.7)] animate-fadeIn"
      >
        {/* Decorative Background */}
        <div className="absolute -top-24 -right-20 w-64 h-64 bg-amber-400/10 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-56 h-56 bg-purple-600/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative p-6 sm:p-8">

          {/* Close Button */}
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close quotation modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-7 pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em]">
                Let's Plan Your Event
              </span>
            </div>

            <h3
              id="quote-modal-title"
              className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight"
            >
              Get Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-200">
                Custom Quotation
              </span>
            </h3>

            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              Tell us about your event and connect with our team for a
              customised sound, lighting and stage setup quotation.
            </p>
          </div>

          {/* Contact Options */}
          <div className="space-y-4">

            {/* WhatsApp */}
            <a
              href={generateWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeModal}
              className="group w-full min-h-[64px] px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                Request Quote on WhatsApp
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+917000389061"
              className="group w-full min-h-[64px] px-5 py-4 rounded-xl bg-[#1A1D29] border border-amber-500/25 hover:border-amber-400 hover:bg-[#202330] text-amber-300 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                Call +91 70003 89061
              </span>
            </a>
          </div>

          {/* Footer */}
          <div className="mt-7 pt-5 border-t border-white/10 text-center">
            <p className="text-xs text-slate-400">
              Shree Ganesh Sound & Light
            </p>
            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-[0.18em]">
              Indore, Madhya Pradesh
            </p>
          </div>

        </div>

        {/* Bottom Gold Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div>
    </div>
  );
};

export default QuickQuoteModal;
