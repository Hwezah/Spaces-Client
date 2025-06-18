import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    // Make this main element fixed to cover the entire viewport.
    // It will act as a background layer.
    // z-0 places it behind other positioned content like headers (which typically have higher z-indices).
    <main className="fixed inset-0 z-0">
      {/* Background image */}
      <Image
        src={bg}
        alt="Mountains and forests with two spaces"
        fill
        placeholder="blur"
        priority // Good for LCP
        className="object-cover object-center" // Image fills the fixed parent
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 md:mb-10 tracking-tight font-normal">
          Spaces.
        </h1>

        <Link
          href="/spaces"
          className="inline-flex flex-col items-center justify-center bg-accent-500 rounded-full font-semibold hover:bg-accent-600 transition-all w-28 h-28 text-base sm:w-32 sm:h-32 sm:text-lg"
        >
          <div className="rounded-full mb-1 sm:mb-1.5 text-primary-950">
            <ArrowUpRight size={28} />
          </div>
          <span className="text-primary-950">Explore</span>
        </Link>
      </div>
    </main>
  );
}
