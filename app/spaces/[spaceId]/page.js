import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import SpaceDescriptionText from "@/app/_components/SpaceDescriptionText";

export const revalidate = 0; // Clear Caching to get the latest data

// import Link from "next/link";
import { getSpace } from "@/app/_lib/data-service";
export async function generateMetadata({ params }) {
  const { name } = await getSpace(params.spaceId);
  return { title: `Space ${name}` };
}

// export async function generateStaticParams() {
//   const spaces = await getSpaces();
//   const ids = spaces.map((space) => ({
//     spaceId: space.id.toString(),
//   }));
//   return ids;
// }

export default async function Page({ params }) {
  const space = await getSpace(params.spaceId);
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    space;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid lg:grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24 items-center justify-center">
        <div className="relative scale-[1.15] lg:-translate-x-3 aspect-square flex-1">
          <Image src={image} alt={`space ${name}`} fill object-cover />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 lg:translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Space {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <SpaceDescriptionText text={description} />
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of
                <span className="font-bold"> Komamboga</span> (Kampala, Uganda)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
