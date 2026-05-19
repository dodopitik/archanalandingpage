"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "500.000",
    unit: "",
    description: "Cocok untuk bisnis kecil yang baru memulai kehadiran online.",
    features: [
      "Landing Page 1 Halaman",
      "Responsive Design",
      "SEO Basic Setup",
      "Contact Form",
      "1x Revisi",
      "Hosting 1 Tahun",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "2.000.000",
    unit: "",
    description: "Pilihan terbaik untuk bisnis yang ingin tampil profesional.",
    features: [
      "Website 5-7 Halaman",
      "Custom Design Premium",
      "SEO Optimization",
      "CMS Integration",
      "WhatsApp Integration",
      "Revisi Unlimited",
      "Hosting 1 Tahun",
      "Free Maintenance 3 Bulan",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "5.000.000",
    unit: "",
    description: "Solusi lengkap untuk bisnis besar dengan kebutuhan custom.",
    features: [
      "Web App Custom",
      "Sistem Informasi",
      "Database Design",
      "API Integration",
      "Admin Dashboard",
      "User Management",
      "Revisi Unlimited",
      "Hosting 1 Tahun",
      "Free Maintenance 6 Bulan",
      "Priority Support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-white/30">
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
            Pricing
          </p>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-[#3d2c1e]">
            Investasi untuk Bisnis Anda
          </h2>
          <p className="mt-4 text-[#3d2c1e]/60 leading-relaxed">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda.
            Semua paket termasuk desain premium dan support profesional.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#AD8B73] to-[#8B6F5C] text-white shadow-2xl shadow-[#AD8B73]/20 scale-[1.02] lg:scale-105"
                  : "bg-white/70 backdrop-blur-sm border border-[#E3CAA5]/20 hover:shadow-xl hover:shadow-[#AD8B73]/5"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-[#FFFBE9] text-[#AD8B73] text-xs font-bold rounded-full shadow-lg">
                    <Star size={12} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-lg font-bold ${
                  plan.popular ? "text-white" : "text-[#3d2c1e]"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mt-1 ${
                  plan.popular ? "text-white/70" : "text-[#3d2c1e]/60"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6 mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-white/70" : "text-[#3d2c1e]/50"
                    }`}
                  >
                    Rp
                  </span>
                  <span
                    className={`text-3xl font-bold ${
                      plan.popular ? "text-white" : "text-[#AD8B73]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-white/70" : "text-[#3d2c1e]/50"
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        plan.popular ? "text-[#E3CAA5]" : "text-[#AD8B73]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white/90" : "text-[#3d2c1e]/70"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://wa.me/62895363076706"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-[#AD8B73] hover:shadow-lg hover:-translate-y-0.5"
                    : "bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] text-white hover:shadow-lg hover:shadow-[#AD8B73]/25 hover:-translate-y-0.5"
                }`}
              >
                Pilih Paket
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-[#3d2c1e]/50 mt-10"
        >
          * Harga dapat disesuaikan berdasarkan kompleksitas project. Konsultasi
          gratis untuk estimasi yang lebih akurat.
        </motion.p>
      </div>
    </section>
  );
}
