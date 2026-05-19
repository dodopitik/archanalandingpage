"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBE9] via-[#FFFBE9] to-[#E3CAA5]/30" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#CEAB93]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#E3CAA5]/20 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Mockup Image - shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:-mr-16 order-first lg:order-last"
          >
            <div className="relative w-full max-w-[800px] lg:scale-115 scale-110">
              <Image
                src="/hero-mockup.png"
                alt="Archana Web Developer - Modern Web Solutions"
                width={1600}
                height={1000}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-last lg:order-first"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#E3CAA5]/50 rounded-full mb-8"
            >
              <Sparkles size={14} className="text-[#AD8B73]" />
              <span className="text-xs font-medium text-[#AD8B73]">
                Premium Web Development Agency
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3d2c1e] leading-[1.1] tracking-tight">
              Jasa Pembuatan{" "}
              <span className="bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] bg-clip-text text-transparent">
                Website Profesional
              </span>{" "}
              untuk Bisnis Anda
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-[#3d2c1e]/60 leading-relaxed max-w-lg">
              Archana Web Developer membangun website modern, cepat, dan SEO friendly
              di Klaten, Jawa Tengah. Spesialis landing page, company profile, web app,
              dan sistem informasi yang mengkonversi pengunjung menjadi pelanggan setia.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/62895363076706"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] text-white font-medium rounded-full hover:shadow-xl hover:shadow-[#AD8B73]/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Konsultasi Gratis
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/60 backdrop-blur-sm border border-[#E3CAA5]/50 text-[#3d2c1e] font-medium rounded-full hover:bg-white/80 transition-all duration-300"
              >
                Lihat Portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-[#AD8B73]">50+</p>
                <p className="text-xs text-[#3d2c1e]/50 mt-1">Project Selesai</p>
              </div>
              <div className="w-px h-10 bg-[#E3CAA5]/50" />
              <div>
                <p className="text-2xl font-bold text-[#AD8B73]">30+</p>
                <p className="text-xs text-[#3d2c1e]/50 mt-1">Klien Puas</p>
              </div>
              <div className="w-px h-10 bg-[#E3CAA5]/50" />
              <div>
                <p className="text-2xl font-bold text-[#AD8B73]">3+</p>
                <p className="text-xs text-[#3d2c1e]/50 mt-1">Tahun Pengalaman</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
