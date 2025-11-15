import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#CCB5A4] py-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Tentang <span className="text-[#9E7A57]">Archana Smart Order</span>
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
          <strong>Archana Smart Order</strong> adalah sistem pemesanan berbasis QR Code 
          yang dirancang khusus untuk hotel, restoran, dan kafe. 
          Dengan teknologi modern dan antarmuka yang intuitif, Archana membantu 
          bisnis mengelola pesanan dengan lebih cepat, rapi, dan efisien.
        </p>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center">
          
          {/* Left Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Solusi Modern untuk Operasional Bisnis Anda
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dengan Archana Smart Order, pelanggan cukup melakukan scan QR 
              untuk melihat menu, melakukan pemesanan, hingga melakukan pembayaran.
              Semua proses berlangsung cepat tanpa harus menunggu pelayan.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Pemesanan via QR tanpa aplikasi</li>
              <li>• Dashboard Admin, Kitchen, Cashier, & Waiter</li>
              <li>• Manajemen menu & meja yang fleksibel</li>
              <li>• Notifikasi pesanan real-time</li>
              <li>• Riwayat transaksi & laporan otomatis</li>
            </ul>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-full h-64 md:h-80 bg-[#E9E0D7] flex items-center justify-center rounded-xl">
         <Image
                    src="/hero.svg"
                    width={350}
                    height={350}
                    alt="Hero Illustration"
                  />
          </div>

        </div>
      </div>
    </section>
  );
}
