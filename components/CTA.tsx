"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#AD8B73] via-[#CEAB93] to-[#AD8B73] p-10 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative text-center max-w-2xl mx-auto">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8">
              <MessageCircle size={28} className="text-white" />
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Siap Memulai Project Anda?
            </h2>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              Konsultasikan kebutuhan website Anda secara gratis. Kami siap
              membantu mewujudkan visi digital bisnis Anda.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/62895363076706"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#AD8B73] font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                Chat via WhatsApp
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:archanaaditama@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Kirim Email
              </a>
            </div>

            {/* Trust note */}
            <p className="mt-8 text-white/60 text-sm">
              Respon cepat dalam 1x24 jam • Konsultasi gratis tanpa komitmen
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
