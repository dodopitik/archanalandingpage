import Image from "next/image";

export default function Hero() {
  return (
    <div className=" bg-[#E9E0D7]">
      <div className="max-w-screen-2xl min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Text section */}
        <div className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl ">
              Upgrade Your Hotel Rooms with
              <br />
              <span className="text-[#9E7A57]">Smart Order Application</span>
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              Sistem pemesanan modern berbasis QR untuk Hotel & Restoran 
              otomatis, cepat, dan langsung tersampaikan ke Kasir dan Chef
              tanpa ribet.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <button className="px-6 py-3 rounded-lg bg-[#5C4733] text-white font-semibold hover:bg-[#9E7A57] transition">
                Coba Gratis
              </button>
              <button className="px-6 py-3 rounded-lg border bg-[#5C4733] text-white font-semibold hover:bg-[#9E7A57] transition">
                Lihat Demo
              </button>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="py-20 px-5 mx-auto">
          <Image
            src="/hero.svg"
            width={700}
            height={700}
            alt="Hero Illustration"
          />
        </div>

      </div>
    </div>
  );
}
