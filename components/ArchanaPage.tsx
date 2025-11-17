// app/archana/page.tsx
import Link from "next/link";
import React from "react";

export default function ArchanaPage() {
  return (
    <main className="min-h-screen bg-[#E9E0D7]">
      <section className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        {/* GRID UTAMA: TEKS + HIGHLIGHT CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* KIRI: TENTANG ARCHANA */}
          <div>
            <span className="inline-flex items-center rounded-full bg-[#9E7A57]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#9E7A57]">
              Archana Smart Order
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Sistem Pemesanan Modern
              <span className="block text-[#9E7A57]">
                Berbasis QR Code untuk F&amp;B &amp; Hotel
              </span>
            </h1>

            <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              Archana Smart Order adalah sistem pemesanan berbasis QR Code yang
              dirancang khusus untuk hotel, restoran, dan kafe. Dengan antarmuka
              yang intuitif dan alur kerja yang rapi, Archana membantu bisnis
              mengelola pesanan lebih cepat, terstruktur, dan efisien tanpa
              menambah beban kerja staf.
            </p>

            <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              Pelanggan cukup scan QR di meja, memilih menu langsung dari
              smartphone, dan pesanan otomatis diteruskan ke kasir serta dapur
              secara real-time. Semua proses tercatat rapi dalam satu dashboard
              yang mudah dipantau oleh owner maupun tim operasional.
            </p>

            {/* BULLET VALUE */}
            <ul className="mt-6 space-y-2 text-sm sm:text-base text-gray-800">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#9E7A57]" />
                <span>
                  Mempercepat alur pemesanan tanpa menambah jumlah staf.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#9E7A57]" />
                <span>Mengurangi salah catat pesanan dan miskomunikasi.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#9E7A57]" />
                <span>
                  Memberikan pengalaman pemesanan yang modern dan praktis.
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={"https://happy-living.untoxic.space"}>
                <button className="inline-flex items-center justify-center rounded-lg bg-[#9E7A57] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#8b6947] transition">
                  Demo Archana Smart Order
                </button>
              </Link>
              <Link
                href={
                  "https://wa.me/62895363076706?text=Halo%2C%20saya%20mau%20mengajukan%20meeting%20aplikasinya"
                }
              >
                <button className="inline-flex items-center justify-center rounded-lg border border-[#9E7A57]/40 px-6 py-3 text-sm sm:text-base font-semibold text-[#5C4733] hover:bg-[#9E7A57]/5 transition">
                  Ajukan Meeting
                </button>
              </Link>
            </div>
          </div>

          {/* KANAN: HIGHLIGHT FITUR / STATUS */}
          <div className="space-y-6">
            {/* CARD HIGH LEVEL */}
            <div className="rounded-2xl bg-white/80 shadow-sm border border-gray-200 p-6 sm:p-7">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Alur Kerja Archana dalam 4 Langkah
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Satu alur sederhana, dari pelanggan hingga dapur, semuanya
                tercatat otomatis.
              </p>

              <ol className="mt-4 space-y-3 text-sm sm:text-base text-gray-800">
                <li className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9E7A57]/10 text-xs font-semibold text-[#9E7A57]">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Scan QR di Meja</p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Pelanggan mengakses menu digital tanpa perlu aplikasi
                      tambahan.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9E7A57]/10 text-xs font-semibold text-[#9E7A57]">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Pilih Menu &amp; Konfirmasi</p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Pelanggan melihat foto, deskripsi, dan harga menu secara
                      transparan.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9E7A57]/10 text-xs font-semibold text-[#9E7A57]">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">
                      Pesanan Masuk ke Kasir &amp; Dapur
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Sistem otomatis memisahkan pesanan untuk kitchen, bar, dan
                      kasir.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9E7A57]/10 text-xs font-semibold text-[#9E7A57]">
                    4
                  </div>
                  <div>
                    <p className="font-semibold">Billing &amp; Pembayaran</p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Tagihan otomatis dihitung, dapat dibayar cashless maupun
                      cash.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* GRID FITUR SINGKAT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/80 border border-gray-200 p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9E7A57]">
                  Fitur Utama
                </p>
                <h3 className="mt-1 text-sm sm:text-base font-bold text-gray-900">
                  QR Menu Digital
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600">
                  Update menu, harga, dan stok cukup dari satu dashboard. Semua
                  QR langsung mengikuti perubahan.
                </p>
              </div>

              <div className="rounded-2xl bg-white/80 border border-gray-200 p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9E7A57]">
                  Untuk Owner
                </p>
                <h3 className="mt-1 text-sm sm:text-base font-bold text-gray-900">
                  Dashboard &amp; Laporan
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600">
                  Pantau penjualan, jam sibuk, menu terlaris, dan performa
                  operasional kapan saja.
                </p>
              </div>

              <div className="rounded-2xl bg-white/80 border border-gray-200 p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9E7A57]">
                  Untuk Tim
                </p>
                <h3 className="mt-1 text-sm sm:text-base font-bold text-gray-900">
                  Multi-Role Access
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600">
                  Role terpisah untuk owner, kasir, kitchen, dan waiter dengan
                  akses sesuai kebutuhan.
                </p>
              </div>

              <div className="rounded-2xl bg-white/80 border border-gray-200 p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9E7A57]">
                  Skalabel
                </p>
                <h3 className="mt-1 text-sm sm:text-base font-bold text-gray-900">
                  Cocok untuk Café hingga Hotel
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600">
                  Bisa digunakan di outlet kecil hingga multi-cabang dengan alur
                  kerja yang sama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
