"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-[#E9E0D7] shadow-xl sticky top-0">
      <div className="mx-auto max-w-7xl px-4 py-2 ">
        <div className="flex items-center justify-between ">
          {/* Left: Logo + Title */}
          <div className="flex items-center gap-3 ">
            <Image
              src="/archana.png"
              alt="Archana Logo"
              width={70}
              height={70}
              priority
            />
            <h1 className="font-semibold hidden md:block">Smart Order APP</h1>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Search (placeholder) */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search…"
              className="rounded-md px-3 py-1.5 outline-none"
            />
          </div>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {/* Icon sederhana */}
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-black" />
              <span className="block h-0.5 w-6 bg-black" />
              <span className="block h-0.5 w-6 bg-black" />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-3 space-y-2 items-center mx-auto">
            <Link href="/" className="block">Home</Link>
            <Link href="/about" className="block">About</Link>
            <Link href="/pricing" className="block">Pricing</Link>
            <Link href="/contact" className="block">Contact</Link>
            <div>
              <input
                type="text"
                placeholder="Search…"
                className="mt-2 w-full rounded-md px-3 py-2 outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}