"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

const PricingCarousel = () => {
  return (
    <div id="pricing" className="bg-[#fff] pt-10 pb-20 scroll-mt-45">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Pricing
        </h2>
        <Fade direction="up" duration={2000}>
          <div className="flex justify-center">
            <Tilt>
              <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Card Header */}

                <div className="bg-gradient-to-r from-[#E9E0D7] to-[#dbb997] px-6 py-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Annual Plan
                  </h3>
                  <p className="text-blue-100 text-sm">Paket Bulanan</p>
                </div>

                {/* Card Body */}
                <div className="px-6 py-8">
                  {/* Monthly Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-900">
                        Rp
                      </span>
                      <span className="text-5xl font-bold text-gray-900">
                        1
                      </span>
                      <span className="text-2xl font-semibold text-gray-600">
                        K
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">per orderan</p>
                  </div>

                  {/* Setup Cost */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between gap-3 ">
                      <span className="text-gray-700 font-medium">
                        Biaya Setup Awal
                      </span>
                      <span className="text-xl font-bold text-gray-900">
                        Rp 1.000K/
                        <span className="text-xs text-gray-500"> 10 QR</span>
                      </span>
                    </div>
                  </div>

                  {/* Features or Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Pembayaran per bulan
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">Paket tahunan</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://api.whatsapp.com/send/?phone=62895363076706&text=Halo%2C+saya+mau+berlangganan+aplikasinya&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#9E7A57] hover:bg-[#dfb58c] text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
                  >
                    Pilih Paket
                  </a>
                </div>
              </div>
            </Tilt>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default PricingCarousel;
