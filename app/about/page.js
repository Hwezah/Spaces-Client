import "@/app/_styles/globals.css";
import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getSpaces } from "@/app/_lib/data-service";
import Link from "next/link";
// import image2 from "@/public/about-2.jpg";
export const revalidate = 0; // Clear Caching to get the latest data
// export const revalidate = 86400; // Clear Caching to get the latest data once a day

export const metadata = {
  title: "About",
};
// export default function Page() {
//   return (
//     <div>
//       <h1>About</h1>
//     </div>
//   );
// }
// export const revalidate = 0; // Clear Caching to get the latest data

export default async function Page() {
  const Spaces = await getSpaces();

  return (
    <div className="grid lg:grid-cols-5 lg:gap-x-24 gap-x-14 lg:gap-y-32 gap-y-22 text-lg items-center">
      <div className="lg:col-span-3">
        <h1 className="text-4xl mb-6 text-accent-400 font-medium">
          Welcome to The Baluti Spaces,
        </h1>

        <div className="space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the city and out, this is your paradise
            away from home. But it&apos;s not just about the luxury spaces.
            It&apos;s about the experience of reconnecting with yourself and
            enjoying simple pleasures with family.
          </p>
          <p>
            Our {Spaces.length} luxury spaces provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding. Wander
            through lush forests, breathe in the fresh air, and watch the stars
            twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="lg:col-span-2 mt-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of space"
        />
      </div>

      <div className="lg:col-span-2 relative aspect-square mt-8">
        <Image
          src={image2}
          fill
          className="object-cover object-center "
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="lg:col-span-3">
        <h1 className="text-4xl mb-6 text-accent-400 font-medium mt-4">
          Meet the Team behind the Spaces,
        </h1>

        <div className="">
          <p>
            A Family-Run Retreat Baluti spaces is a thoughtfully run,
            family-driven retreat designed to offer calm, comfort, and a sense
            of belonging. Rooted in care and built with intention, our spaces
            reflect the warmth and privacy we value ourselves.
          </p>
          <p>
            Whether you&apos;re here to recharge, reconnect, or simply enjoy a
            quieter pace, we’ve created an experience that feels
            personal—because it is. At Baluti spaces, you&apos;re always more
            than just a guest.
          </p>

          <div>
            <Link
              href="/spaces"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our Luxury Spaces
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
