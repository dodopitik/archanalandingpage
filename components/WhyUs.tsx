"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  HeartHandshake,
  Headphones,
  Layers,
  RefreshCw,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Teknologi Modern",
    description:
      "Menggunakan tech stack terkini seperti Next.js, React, dan Tailwind CSS untuk performa optimal.",
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description:
      "Implementasi best practice keamanan web untuk melindungi data bisnis dan pelanggan Anda.",
  },
  {
    icon: HeartHandshake,
    title: "Kolaborasi Erat",
    description:
      "Proses development transparan dengan komunikasi aktif dan update progress berkala.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description:
      "Tim support siap membantu kapanpun Anda membutuhkan bantuan teknis atau konsultasi.",
  },
  {
    icon: Layers,
    title: "Scalable & Maintainable",
    description:
      "Arsitektur kode yang bersih dan terstruktur, mudah dikembangkan seiring pertumbuhan bisnis.",
  },
  {
    icon: RefreshCw,
    title: "Revisi Tanpa Batas",
    description:
      "Kami pastikan hasil akhir sesuai ekspektasi dengan revisi hingga Anda puas.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-[#AD8B73] uppercase tracking-wider">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-[#3d2c1e]">
              Kenapa Memilih{" "}
              <span className="bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] bg-clip-text text-transparent">
                Archana?
              </span>
            </h2>
            <p className="mt-4 text-[#3d2c1e]/60 leading-relaxed max-w-md">
              Kami bukan sekadar membuat website. Kami membangun solusi digital
              yang mendorong pertumbuhan bisnis Anda dengan pendekatan yang
              terukur dan berorientasi hasil.
            </p>

            {/* Highlight Box */}
            <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm border border-[#E3CAA5]/20 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#AD8B73] to-[#CEAB93] flex items-center justify-center shrink-0">
                  <HeartHandshake size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#3d2c1e]">
                    Garansi Kepuasan 100%
                  </p>
                  <p className="text-sm text-[#3d2c1e]/60 mt-0.5">
                    Uang kembali jika tidak sesuai kesepakatan awal
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-5 bg-white/60 backdrop-blur-sm border border-[#E3CAA5]/20 rounded-2xl hover:bg-white/80 hover:shadow-lg hover:shadow-[#AD8B73]/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#AD8B73]/10 to-[#E3CAA5]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon size={20} className="text-[#AD8B73]" />
                </div>
                <h3 className="text-sm font-bold text-[#3d2c1e]">
                  {reason.title}
                </h3>
                <p className="text-xs text-[#3d2c1e]/60 mt-1 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
