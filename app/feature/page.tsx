"use client";
import Image from "next/image";
import { useState } from "react";

const fiturList = [
  {
    name: "Digital Payments",
    title: "Digital Payments",
    desc: "Terima pembayaran non-tunai lebih cepat, aman, dan otomatis tercatat dalam sistem.",
    img: "/featurecart.png",
  },
  {
    name: "Dine In & Take Away",
    title: "Dine In & Take Away",
    desc: "Terima pembayaran non-tunai lebih cepat, aman, dan otomatis tercatat dalam sistem.",
    img: "/featuredashboard.png",
  },
  {
    name: "Dasbor",
    title: "Dasbor",
    desc: "Tampilkan ringkasan data secara cepat dan real-time untuk membantu analisa produktivitas bisnis Anda.",
    img: "/featuredashboard.png",
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
    <div className="max-w-7xl h-screen mx-auto py-10">
      <h2 className="text-center text-3xl font-semibold mb-6">
        Fitur Unggulan Kami
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {fiturList.map((item, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full text-sm ${
              active === idx
                ? "bg-red-500 text-white"
                : "text-gray-700 hover:text-black"
            }`}
            onClick={() => setActive(idx)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Content Slider */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-5 ">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 mx-5 -translate-y-1/2 bg-white border border-red-400 rounded-full p-3 text-red-500 hover:bg-red-500 hover:text-white transition"
        >
          &lt;
        </button>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={fiturList[active].img}
            alt="fitur"
            width={300}
            height={600}
            className="rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="p-10">
          <h3 className="text-2xl font-bold mb-3">{fiturList[active].title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {fiturList[active].desc}
          </p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 mx-5 bg-white border border-red-400 rounded-full p-3 text-red-500 hover:bg-red-500 hover:text-white transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
