"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#why-us", label: "Why Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFBE9]/80 backdrop-blur-xl shadow-sm border-b border-[#E3CAA5]/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Archana Logo"
              width={44}
              height={44}
              className="w-11 h-11 object-contain"
            />
            <span className="text-lg font-bold text-[#3d2c1e]">Archana</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#3d2c1e]/70 hover:text-[#AD8B73] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="text-sm font-medium text-[#AD8B73] hover:text-[#3d2c1e] transition-colors"
            >
              Lihat Harga
            </a>
            <a
              href="https://wa.me/62895363076706"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-[#AD8B73]/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#3d2c1e]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FFFBE9]/95 backdrop-blur-xl border-b border-[#E3CAA5]/30"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-[#3d2c1e]/70 hover:text-[#AD8B73] py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/62895363076706"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-2.5 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] text-white text-sm font-medium rounded-full mt-3"
              >
                Konsultasi Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
