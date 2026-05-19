"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Code2, ExternalLink } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Website Company Profile", href: "#services" },
    { label: "Landing Page Bisnis", href: "#services" },
    { label: "Web App Custom", href: "#services" },
    { label: "Sistem Informasi", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
  ],
  company: [
    { label: "Tentang Kami", href: "#why-us" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#" },
    { label: "Karir", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#3d2c1e] text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Archana Logo"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
              />
              <span className="text-lg font-bold text-white">Archana</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Jasa pembuatan website modern dan profesional. Solusi digital
              premium untuk pertumbuhan bisnis Anda.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#AD8B73] hover:border-[#AD8B73] transition-all duration-300"
                aria-label="Website"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#AD8B73] hover:border-[#AD8B73] transition-all duration-300"
                aria-label="GitHub"
              >
                <Code2 size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#AD8B73] hover:border-[#AD8B73] transition-all duration-300"
                aria-label="Portfolio"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#CEAB93] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#CEAB93] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#CEAB93] shrink-0" />
                <span className="text-sm text-white/60">archanaaditama@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#CEAB93] shrink-0" />
                <span className="text-sm text-white/60">+62 895-3630-76706</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#CEAB93] shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">
                  Klaten, Jawa Tengah, Indonesia
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2026 Archana Web Developer. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
