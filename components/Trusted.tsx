"use client";

import { motion } from "framer-motion";
import { Award, Clock, Shield } from "lucide-react";

const achievements = [
 
  {
    icon: Clock,
    number: "1+",
    label: "Tahun Pengalaman",
    description: "Berpengalaman di industri digital",
  },
  {
    icon: Shield,
    number: "99.9%",
    label: "Uptime Guarantee",
    description: "Performa server yang stabil",
  },
  {
    icon: Award,
    number: "4.9/5",
    label: "Client Rating",
    description: "Kepuasan klien adalah prioritas",
  },
];

export default function Trusted() {
  return (
    <section className="relative py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-[#AD8B73] uppercase tracking-wider">
            Trusted & Proven
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#3d2c1e]">
            Dipercaya Banyak Bisnis
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group text-center p-6 bg-white/70 backdrop-blur-sm border border-[#E3CAA5]/20 rounded-2xl hover:shadow-lg hover:shadow-[#AD8B73]/5 transition-all duration-300 hover:-translate-y-1 w-full sm:w-[280px]"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#AD8B73]/10 to-[#E3CAA5]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={22} className="text-[#AD8B73]" />
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-[#AD8B73]">
                {item.number}
              </p>
              <p className="text-sm font-semibold text-[#3d2c1e] mt-1">
                {item.label}
              </p>
              <p className="text-xs text-[#3d2c1e]/50 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
