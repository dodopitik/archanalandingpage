"use client";
import Image from "next/image";
import { useState } from "react";

const fiturList = [
  {
    name: "Halaman Depan",
    title: "Halaman Depan",
    desc: "Halaman depan adalah halaman utama dari aplikasi. Di halaman depan, pengguna dapat melihat menu, produk, dan layanan yang tersedia.",
    img: "/feature/Home Page.svg",
  },
  {
    name: "Kerajang Menu",
    title: "Kerajang Menu",
    desc: "Kerajang Menu adalah halaman yang menampilkan menu produk yang tersedia. Di kerajang menu, pengguna dapat melihat menu yang mereka pilih",
    img: "/feature/cart.svg",
  },
  {
    name: "Halaman Checkout",
    title: "Halaman Checkout",
    desc: "Halaman Checkout menampilkan detail pemesanan yang telah dipilih lalu membayar pesanan mereka.",
    img: "/feature/co 2.svg",
  },
  {
    name: "Nota Pembayaran",
    title: "Nota Pembayaran",
    desc: "Nota Pembayaran menampilkan detail pembayaran yang telah dilakukan dan mencetak nota.",
    img: "/feature/nota.svg",
  },
];

export default function Feature() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev === fiturList.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? fiturList.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-center text-3xl font-semibold mb-6">
        Detail Aplikasi
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {fiturList.map((item, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full text-sm ${
              active === idx
                ? "bg-[#5C4733] text-white"
                : "text-gray-700 hover:text-black"
            }`}
            onClick={() => setActive(idx)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Arrow desktop only */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
          bg-white border border-[#9E7A57] rounded-full p-3 text-[#9E7A57]
          hover:bg-[#5C4733] hover:text-white transition"
        >
          &lt;
        </button>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={fiturList[active].img}
            alt={fiturList[active].title}
            width={800}
            height={1600}
            className="rounded-xl max-w-[250px] sm:max-w-[300px] md:max-w-[350px] w-full h-auto"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-2xl font-bold mb-3">{fiturList[active].title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {fiturList[active].desc}
          </p>
        </div>

        {/* Arrow desktop only */}
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
          bg-white border border-[#9E7A57] rounded-full p-3 text-[#9E7A57]
          hover:bg-[#5C4733] hover:text-white transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
