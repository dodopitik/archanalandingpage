"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#FFFBE9]">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-[#FFFBE9]/80 backdrop-blur-xl border-b border-[#E3CAA5]/30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Archana Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <span className="text-lg font-bold text-[#3d2c1e]">Archana</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#AD8B73] hover:text-[#3d2c1e] transition-colors"
          >
            ← Kembali
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-[#3d2c1e] mb-2">
            Terms & Conditions
          </h1>
          <p className="text-[#3d2c1e]/60 mb-12">
            Syarat dan ketentuan layanan Archana Web Developer
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                1. Ketentuan Penggunaan
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Archana Web Developer ditawarkan kepada Anda, pengguna, dengan syarat penerimaan Anda terhadap ketentuan, syarat, dan pemberitahuan yang terkandung atau dirujuk di sini serta ketentuan dan syarat tambahan, perjanjian, dan pemberitahuan yang mungkin berlaku untuk halaman atau bagian mana pun dari Situs ini.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                2. Gambaran Umum
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Penggunaan Situs ini oleh Anda merupakan persetujuan Anda terhadap semua syarat, ketentuan, dan pemberitahuan. Harap baca dengan seksama. Dengan menggunakan Situs ini, Anda menyetujui Syarat dan Ketentuan ini, serta syarat, pedoman, atau aturan lain yang berlaku untuk bagian mana pun dari Situs ini, tanpa batasan atau kualifikasi. Jika Anda tidak menyetujui Syarat dan Ketentuan ini, Anda harus segera keluar dari Situs dan menghentikan penggunaan informasi atau produk apa pun dari Situs ini.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                3. Modifikasi Situs dan Syarat & Ketentuan
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Archana Web Developer berhak untuk mengubah, memodifikasi, memperbarui, atau menghentikan syarat, ketentuan, dan pemberitahuan di mana Situs ini ditawarkan serta tautan, konten, informasi, harga, dan materi lain yang ditawarkan melalui Situs ini kapan saja dan dari waktu ke waktu tanpa pemberitahuan atau kewajiban lebih lanjut kepada Anda kecuali sebagaimana yang disediakan di dalamnya. Kami berhak menyesuaikan harga dari waktu ke waktu. Jika karena suatu alasan terjadi kesalahan harga, Archana Web Developer berhak menolak pesanan. Dengan penggunaan berkelanjutan Anda terhadap Situs setelah modifikasi, perubahan, atau pembaruan tersebut, Anda setuju untuk terikat oleh modifikasi, perubahan, atau pembaruan tersebut.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                4. Hak Cipta
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Situs ini dimiliki dan dioperasikan oleh Archana Web Developer. Kecuali ditentukan lain, semua materi di Situs ini, merek dagang, merek layanan, logo adalah milik Archana Web Developer dan dilindungi oleh undang-undang hak cipta Indonesia dan di seluruh dunia oleh undang-undang hak cipta yang berlaku. Tidak ada materi yang diterbitkan oleh Archana Web Developer di Situs ini, secara keseluruhan atau sebagian, boleh disalin, direproduksi, dimodifikasi, diterbitkan ulang, diunggah, diposting, ditransmisikan, atau didistribusikan dalam bentuk apa pun atau dengan cara apa pun tanpa izin tertulis sebelumnya dari Archana Web Developer.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                5. Pendaftaran
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Anda perlu mendaftar di Situs ini untuk melakukan pembelian dengan memasukkan username dan password Anda. Anda akan mendapatkan manfaat seperti newsletter, pembaruan, dan penawaran khusus dengan mendaftar. Anda akan diminta untuk memberikan informasi yang akurat dan terkini pada semua formulir pendaftaran di Situs ini. Anda bertanggung jawab penuh untuk menjaga kerahasiaan username dan password yang Anda pilih atau yang dipilih oleh administrator web Anda atas nama Anda, untuk mengakses Situs ini serta semua aktivitas yang terjadi di bawah username/password Anda. Anda tidak akan menyalahgunakan atau membagikan username atau password Anda, menyalahartikan identitas atau afiliasi Anda dengan suatu entitas, meniru orang atau entitas mana pun, atau menyalahartikan asal materi apa pun yang Anda akses melalui Situs ini.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                6. Komunikasi Elektronik
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Anda setuju bahwa Archana Web Developer dapat mengirimkan email elektronik kepada Anda untuk tujuan memberi tahu Anda tentang perubahan atau penambahan pada Situs ini, tentang produk atau layanan Archana Web Developer, atau untuk tujuan lain yang kami anggap sesuai. Jika Anda ingin berhenti berlangganan dari newsletter kami, silakan klik &quot;Newsletters&quot; di halaman akun Anda dan berhenti berlangganan.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                7. Deskripsi Layanan
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Kami selalu berusaha menampilkan informasi dan tampilan produk yang muncul di Situs seakurat mungkin. Namun, kami tidak dapat menjamin bahwa tampilan monitor Anda terhadap warna apa pun akan akurat karena warna aktual yang Anda lihat tergantung pada kualitas monitor Anda.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                8. Kebijakan Privasi
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Informasi Anda aman bersama kami. Archana Web Developer memahami bahwa masalah privasi sangat penting bagi pelanggan kami. Anda dapat yakin bahwa informasi apa pun yang Anda kirimkan kepada kami tidak akan disalahgunakan, disalahgunakan, atau dijual kepada pihak lain mana pun. Kami hanya menggunakan informasi pribadi Anda untuk menyelesaikan pesanan Anda.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                9. Ganti Rugi
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Anda setuju untuk mengganti rugi, membela, dan membebaskan Archana Web Developer dari dan terhadap semua klaim pihak ketiga, kewajiban, kerusakan, kerugian, atau biaya (termasuk biaya pengacara yang wajar dan biaya) yang timbul dari, berdasarkan, atau sehubungan dengan akses dan/atau penggunaan Situs ini oleh Anda.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                10. Penafian
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Archana Web Developer tidak bertanggung jawab atas keakuratan, ketepatan, ketepatan waktu, atau konten Materi yang disediakan di Situs ini. Anda tidak boleh berasumsi bahwa Materi di Situs ini terus diperbarui atau mengandung informasi terkini. Archana Web Developer tidak bertanggung jawab untuk menyediakan konten atau materi dari Situs yang telah kedaluwarsa atau telah dihapus.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                11. Hukum yang Berlaku
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh hukum yang berlaku di Indonesia.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-bold text-[#3d2c1e] mb-3">
                12. Pertanyaan dan Umpan Balik
              </h2>
              <p className="text-[#3d2c1e]/70 leading-relaxed">
                Kami menyambut pertanyaan, komentar, dan kekhawatiran Anda tentang privasi atau informasi apa pun yang dikumpulkan dari Anda atau tentang Anda. Silakan kirimkan kepada kami umpan balik apa pun yang berkaitan dengan privasi, atau masalah lainnya.
              </p>
            </section>

            {/* Legal Notice */}
            <section className="mt-12 pt-8 border-t border-[#E3CAA5]/30">
              <p className="text-sm text-[#3d2c1e]/50">
                <strong>Legal Notice</strong><br />
                Archana Web Developer adalah brand oleh Archana.<br />
                Copyright © 2024 All Rights Reserved.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
