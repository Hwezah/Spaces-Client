import Link from "next/link";
import Image from "next/image";
import React from "react";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <div className="w-10 sm:w-12 md:w-14 lg:w-16">
        <Image
          src="/logo.png"
          alt="The Wild Oasis logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <span className="text-xl font-semibold -100">Spaces</span>
    </Link>
  );
}

export default Logo;
