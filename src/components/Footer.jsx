
import React from 'react';
import {
  Volume2,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowUpRight,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';

import { generateWhatsAppLink } from '../data/websiteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Add your actual social media URLs here.
  const socialLinks = {
    instagram: '', 
    facebook: '',
  };

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Events We Cover', href: '#events' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Our Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const serviceLinks = [
    'Professional Sound Systems',
    'DJ & Stage Lighting',
    'LED Walls & Screens',
    'Stage Setup & Decoration',
    'Tent & Seating Arrangements',
    'Complete Event Management',
  ];

  const whatsappLink = generateWhatsAppLink();

  return (
    <footer className="relative overflow-hidden bg-[#08090D] border-t border-amber-500/20 text-gray-400">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">

          {/* Brand Information */}
          <div className="lg:col-span-2">

            <a href="#home" className="inline-flex items-center gap-3 mb-6 group">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Volume2 className="w-6 h-6 text-black stroke-[2.5]" />
              </div>

              <div>
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white block uppercase leading-none">
                  SHREE GANESH
                </span>

                <span className="text-[10px] sm:text-xs font-bold text-amber-400 tracking-[0.3em] block uppercase mt-1">
                  SOUND & LIGHT
                </span>
              </div>

            </a>

            <p className="text-sm text-gray-400 leading-7 max-w-md mb-6">
              Your event, our passion. We provide sound systems, DJ and stage
              lighting, LED screens, stage arrangements and complete event
              management solutions to make every celebration special.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">

              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
              )}

              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300"
                >
                  <Facebook size={18} />
                </a>
              )}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.15em] text-xs mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.15em] text-xs mb-6">
              Our Services
            </h4>

            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="group inline-flex items-start gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <span className="text-amber-500 mt-0.5">✦</span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Contact Highlight */}
        <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-[#17130B] via-[#111217] to-[#17130B] p-5 sm:p-6 mb-10">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

            <div>
              <div className="flex items-center gap-2 text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                <Sparkles size={13} />
                Let's Plan Your Event
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white">
                Have an upcoming celebration?
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Connect with us to discuss your event requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">

              <a
                href="tel:+917000389061"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-amber-500/30 text-amber-300 text-sm font-semibold hover:bg-amber-400 hover:text-black transition-all"
              >
                <Phone size={16} />
                +91 7000389061
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-600 text-black text-sm font-bold hover:shadow-lg hover:shadow-amber-500/20 transition-all"
              >
                WhatsApp Us
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>

        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-8">
          <MapPin size={15} className="text-amber-500" />
          <span>Indore, Madhya Pradesh, India</span>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

          <p className="text-[11px] text-gray-500">
            © {currentYear} Shree Ganesh Sound & Light. All Rights Reserved.
          </p>

          <p className="text-[11px] text-gray-500">
            Crafted for Memorable Events.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
