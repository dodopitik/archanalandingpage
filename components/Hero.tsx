import Image from "next/image";
import Link from "next/link";
import { Slide, Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <div id="home" className=" bg-[#E9E0D7]">
      <div className="max-w-screen-2xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Text section */}
        <div className="py-10 sm:py-24 px-6 order-2 ">
          <div className="max-w-3xl mx-auto text-center">
            <Fade duration={1000} direction="up">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl ">
                Upgrade Your Hotel Rooms with
                <br />
                <span className="text-[#9E7A57]">Smart Order Application</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700">
                Sistem pemesanan modern berbasis QR untuk Hotel , Restoran &
                Kos-Kosan Modern otomatis, cepat, dan langsung tersampaikan ke
                Kasir , Chef atau Operator tanpa ribet.
              </p>
            </Fade>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="https://wa.me/62895363076706?text=Halo%2C%20saya%20mau%20lihat%20demo%20aplikasinya">
                <button className="px-6 py-3 rounded-lg bg-[#5C4733] text-white font-semibold hover:bg-[#9E7A57] transition">
                  Contact Whatsapp
                </button>
              </Link>
              <Link href="https://happy-living.untoxic.space">
                <button className="px-6 py-3 rounded-lg border bg-[#5C4733] text-white font-semibold hover:bg-[#9E7A57] transition">
                  Lihat Demo
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image section */}
        <Fade
          delay={1e3}
          duration={1000}
          cascade
          damping={1e-1}
          direction="down"
        >
          <div className="py-10 sm:py-10 px-5 mx-auto order-1">
            <Image
              src="/kaka.png"
              width={900}
              height={900}
              alt="Hero Illustration"
              quality={100}
              className="object-contain"
            />
          </div>
        </Fade>
      </div>
      <div className=""></div>
    </div>
  );
}
