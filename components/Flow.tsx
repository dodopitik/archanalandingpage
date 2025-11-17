import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Flow = () => {
  return (
    <section className="bg-[#fff]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-15">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] md:grid-cols-2 gap-2 sm:gap-50 items-center">
          <div className=" order-2">
            <Fade delay={500} cascade damping={1e-1} direction="left">
              <Image
                src="/caca.png"
                width={450}
                height={350}
                alt="Hero Illustration"
              />
            </Fade>
          </div>
          {/* Title */}
          <div className="pt-10 sm:pt-15 order-1 md:order-2">
            <Fade delay={500} cascade damping={1e-1} direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tingkatkan pengalaman pelanggan dengan solusi pemesanan modern
                berbasis QR Code !
              </h2>

              <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
                <strong>Archana Smart Order</strong> membantu bisnis F&B dan
                perhotelan bekerja lebih cepat, rapi, dan efisien. Dengan sistem
                yang terintegrasi mulai dari pemesanan, manajemen meja, hingga
                pembayaran, kamu dapat mengurangi antrian, meminimalisir
                kesalahan pesanan, dan meningkatkan kepuasan pelanggan secara
                drastis. Semua proses tercatat otomatis, sehingga owner dapat
                mengambil keputusan berbasis data yang akurat.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flow;
