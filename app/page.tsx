import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";
import React from "react";
import { ArrowUpRight } from "lucide-react";
export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        className="object-cover object-center"
        fill
        placeholder="blur"
        alt="Mountains and forests with two spaces"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-50 mb-6 md:mb-10 tracking-tight font-normal">
          Spaces.
        </h1>

        <Link
          href="/spaces"
          className="inline-flex flex-col items-center justify-center bg-accent-500 rounded-full text-primary-800 font-semibold hover:bg-accent-600 transition-all w-28 h-28 text-base sm:w-32 sm:h-32 sm:text-lg"
        >
          {/* Wrapper for icon to give it a circular background */}
          <div className=" rounded-full mb-1 sm:mb-1.5">
            <ArrowUpRight size={28} className="text-primary-800" />
          </div>
          <span className="">Explore</span>
        </Link>
      </div>
    </main>
  );
}
