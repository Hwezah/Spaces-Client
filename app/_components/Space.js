import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import SpaceDescriptionText from "@/app/_components/SpaceDescriptionText";
export default function Space({ space }) {
  const { name, description, maxCapacity, image } = space;
  return (
    <div className="grid lg:grid-cols-[3fr_4fr] gap-20 bg-primary-900 py-3 px-10 mb-24 items-center justify-center">
      <div className="relative scale-[1.15] lg:-translate-x-3 aspect-square flex-1">
        <Image src={image} alt={`space ${name}`} fill object-cover />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-7xl mb-5 lg:translate-x-[-254px] bg-primary-800 p-6 pb-1 w-[150%]">
          Space {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <SpaceDescriptionText text={description} />
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
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
  );
}
