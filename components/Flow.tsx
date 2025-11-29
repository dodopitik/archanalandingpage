import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Flow = () => {
  return (
    <section className="bg-[#fff]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
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
                Mengintegrasikan Pengelolaan Operasional
              </h2>

              <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
                Diracang untuk menghubungkan semua unit restoran, baik dari
                Waiter, Chef/Kitchen, Barista, Kasir, Manager, hingga Owner.
              </p>
            </Fade>
          </div>
        </div>
      </div>
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
                Mengoptimalkan Efisiensi Kinerja & Service Level
              </h2>

              <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
                Dengan fitur terkini, Anda sebagai Owner bisa lebih fokus
                menjalankan hal yang lebih esensial dalam bisnis restoran sambil
                tetap sajikan pelayanan terbaik.
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
};

export default Flow;
