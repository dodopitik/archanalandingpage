import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <section id="about" className="bg-[#fff]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] md:grid-cols-2 gap-2 sm:gap-50 items-center">
          <Fade
            delay={500}
            duration={1000}
            cascade
            damping={1e-1}
            direction="left"
          >
            <div className="pt-10 sm:pt-15">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Naikkan Keuntungan Room Service Hotelmu 2 Kali Lipat !
              </h2>

              <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
                Setiap tamu dapat melakukan order langsung dari meja atau kamar
                tanpa menunggu staf. Alur pemesanan menjadi lebih cepat, akurat,
                dan efisien. Tanpa antrian, tanpa salah input, dan tanpa
                kehilangan peluang penjualan
              </p>
            </div>
          </Fade>
          <Fade
            delay={500}
            duration={1000}
            cascade
            damping={1e-1}
            direction="right"
          >
            <div>
              <Image
                src="/mama.png"
                width={650}
                height={650}
                alt="Hero Illustration"
              />
            </div>
          </Fade>
          {/* Title */}
        </div>
      </div>
    </section>
  );
}
