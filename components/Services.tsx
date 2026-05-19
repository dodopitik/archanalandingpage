"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  Code2,
  Database,
  Palette,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Company Profile",
    description:
      "Website profesional yang merepresentasikan brand bisnis Anda dengan desain modern dan performa optimal.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Rocket,
    title: "Landing Page Bisnis",
    description:
      "Landing page high-converting yang dirancang untuk mengubah pengunjung menjadi leads dan pelanggan.",
    features: ["High Converting", "A/B Testing Ready", "Analytics Integration"],
  },
  {
    icon: Code2,
    title: "Web App Custom",
    description:
      "Aplikasi web custom sesuai kebutuhan bisnis Anda dengan teknologi terkini dan skalabilitas tinggi.",
    features: ["Custom Features", "Scalable", "Modern Tech Stack"],
  },
  {
    icon: Database,
    title: "Sistem Informasi",
    description:
      "Sistem informasi terintegrasi untuk mengelola data dan proses bisnis Anda secara efisien.",
    features: ["Data Management", "Reporting", "Role-based Access"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang intuitif dan menarik, berfokus pada pengalaman pengguna terbaik.",
    features: ["User Research", "Prototyping", "Design System"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-[#AD8B73] uppercase tracking-wider">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-[#3d2c1e]">
            Layanan yang Kami Tawarkan
          </h2>
          <p className="mt-4 text-[#3d2c1e]/60 leading-relaxed">
            Solusi digital lengkap untuk membangun kehadiran online bisnis Anda
            dengan teknologi modern dan desain premium.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-7 bg-white/60 backdrop-blur-sm border border-[#E3CAA5]/20 rounded-3xl hover:bg-white/80 hover:shadow-xl hover:shadow-[#AD8B73]/5 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#AD8B73]/10 to-[#E3CAA5]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={26} className="text-[#AD8B73]" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#3d2c1e] mb-2 flex items-center gap-2">
                {service.title}
                <ArrowUpRight
                  size={16}
                  className="text-[#AD8B73] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </h3>
              <p className="text-sm text-[#3d2c1e]/60 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-[#FFFBE9] text-[#AD8B73] text-xs font-medium rounded-full border border-[#E3CAA5]/30"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
