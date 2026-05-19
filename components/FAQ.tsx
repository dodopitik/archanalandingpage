"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Berapa biaya pembuatan website di Archana Web Developer?",
    answer:
      "Harga pembuatan website di Archana Web Developer mulai dari Rp 500.000 untuk paket Starter (landing page 1 halaman), Rp 2.000.000 untuk paket Professional (website 5-7 halaman dengan custom design), dan Rp 5.000.000+ untuk paket Enterprise (web app custom dan sistem informasi). Semua paket sudah termasuk hosting 1 tahun dan domain.",
  },
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Proses pembuatan website bervariasi tergantung kompleksitas project. Landing page biasanya selesai dalam 3-7 hari kerja, website company profile 1-2 minggu, sedangkan web app custom dan sistem informasi membutuhkan waktu 3-6 minggu. Kami akan memberikan timeline yang jelas saat konsultasi awal.",
  },
  {
    question: "Apakah sudah termasuk hosting dan domain?",
    answer:
      "Ya, semua paket sudah termasuk hosting selama 1 tahun. Domain dapat disediakan sesuai permintaan dengan biaya tambahan yang sangat terjangkau. Setelah 1 tahun, Anda bisa memperpanjang sendiri atau melalui kami.",
  },
  {
    question: "Teknologi apa yang digunakan untuk membuat website?",
    answer:
      "Kami menggunakan tech stack modern seperti Next.js, React, TypeScript, Tailwind CSS, dan teknologi terbaru lainnya. Stack ini memastikan website cepat, aman, SEO friendly, dan mudah di-maintain di masa depan.",
  },
  {
    question: "Apakah ada garansi untuk website yang dibuat?",
    answer:
      "Ya, kami memberikan garansi kepuasan 100% dan revisi unlimited untuk paket Professional dan Enterprise. Free maintenance 3-6 bulan setelah project selesai untuk memastikan website berjalan dengan optimal.",
  },
  {
    question: "Apakah website yang dibuat sudah SEO friendly?",
    answer:
      "Tentu saja. Semua website yang kami buat sudah dioptimasi untuk SEO sejak awal, termasuk meta tags, structured data, sitemap, robots.txt, fast loading, mobile responsive, dan semantic HTML. Ini membantu website Anda mudah ditemukan di Google.",
  },
  {
    question: "Apakah bisa request fitur custom?",
    answer:
      "Bisa. Untuk paket Enterprise, kami melayani pembuatan web app dan sistem informasi sesuai kebutuhan spesifik bisnis Anda, termasuk integrasi API, dashboard admin, sistem manajemen user, payment gateway, dan fitur-fitur kompleks lainnya.",
  },
  {
    question: "Bagaimana cara konsultasi dan memulai project?",
    answer:
      "Anda bisa langsung chat via WhatsApp di +62 895-3630-76706 atau email ke archanaaditama@gmail.com. Konsultasi awal gratis tanpa komitmen. Setelah diskusi kebutuhan, kami akan memberikan estimasi biaya dan timeline yang sesuai.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 bg-white/30"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-[#AD8B73] uppercase tracking-wider">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-[#3d2c1e]">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-[#3d2c1e]/60 leading-relaxed">
            Jawaban untuk pertanyaan umum tentang jasa pembuatan website Archana.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white/70 backdrop-blur-sm border border-[#E3CAA5]/20 rounded-2xl overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/40 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3
                  className="text-base font-semibold text-[#3d2c1e] pr-4"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 w-8 h-8 rounded-full bg-[#AD8B73]/10 flex items-center justify-center"
                >
                  <Plus size={16} className="text-[#AD8B73]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-6 pb-6">
                      <p
                        className="text-sm text-[#3d2c1e]/70 leading-relaxed"
                        itemProp="text"
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
