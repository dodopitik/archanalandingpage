// src/components/BrandMarquee.tsx
import Image from "next/image";

const logos = [
  { src: "/logos/archana.png", alt: "Hotel A" },
  { src: "/logos/archana.png", alt: "Hotel B" },
  { src: "/logos/archana.png", alt: "Restaurant X" },
  { src: "/logos/archana.png", alt: "Cafe Y" },
  // tambahin lagi brand lain di sini
];

export default function Marquee() {
  return (
    <section className="bg-[#E9E0D7] py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Brand yang Telah Menggunakan{" "}
          <span className="text-[#9E7A57] font-bold">Archana Smart Order</span>
        </h2>

        <div className="marquee">
          <div className="marquee__track">
            {/* list pertama */}
            {logos.map((logo, i) => (
              <div
                key={`logo-1-${i}`}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={60}
                  className="object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}

            {/* list kedua (duplikasi untuk efek infinity) */}
            {logos.map((logo, i) => (
              <div
                key={`logo-2-${i}`}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={60}
                  className="object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}

            {/* list kedua (duplikasi untuk efek infinity) */}
            {logos.map((logo, i) => (
              <div
                key={`logo-2-${i}`}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={60}
                  className="object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
