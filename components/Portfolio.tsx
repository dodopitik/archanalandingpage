"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Archana Caps Inventory",
    category: "Sistem Informasi",
    description: "Dashboard inventory untuk stok dan penjualan topi dengan fitur live report dan nota PDF.",
    image: "/portofolio-1.png",
    tags: ["Next.js", "Supabase", "Dashboard"],
  },
  {
    title: "Archana App Studio",
    category: "Landing Page",
    description: "Landing page digital agency dengan QR generator untuk promosi usaha lokal.",
    image: "/portofolio-2.png",
    tags: ["Next.js", "Tailwind", "QR Code"],
  },
  {
    title: "Archana Smart Order",
    category: "Web App",
    description: "Sistem smart order hotel modern dengan pemesanan via QR Code langsung ke kasir dan kitchen.",
    image: "/portofolio-3.png",
    tags: ["Next.js", "Real-time", "QR Order"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-white/30">
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
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-[#3d2c1e]">
            Karya Terbaik Kami
          </h2>
          <p className="mt-4 text-[#3d2c1e]/60 leading-relaxed">
            Beberapa project yang telah kami kerjakan dengan dedikasi dan
            standar kualitas tinggi.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white/70 backdrop-blur-sm border border-[#E3CAA5]/20 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-[#AD8B73]/5 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#AD8B73] bg-[#AD8B73]/5 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#AD8B73]/40 group-hover:text-[#AD8B73] transition-colors"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#3d2c1e] mt-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#3d2c1e]/60 mt-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-[#3d2c1e]/50 bg-[#FFFBE9] px-2 py-0.5 rounded-md border border-[#E3CAA5]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
