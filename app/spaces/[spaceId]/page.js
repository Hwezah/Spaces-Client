import Reservation from "@/app/_components/Reservation";
export const revalidate = 0; // Clear Caching to get the latest data
import Spinner from "@/app/_components/Spinner";
import SpaceCard from "@/app/_components/SpaceCard";
import { getSpace } from "@/app/_lib/data-service";
import { Suspense } from "react";
export async function generateMetadata({ params }) {
  const { name } = await getSpace(params.spaceId);
  return { title: `Space ${name}` };
}

export default async function Page({ params }) {
  const space = await getSpace(params.spaceId);

  return (
    <div className=" mx-auto mt-8 max-w-[90rem]">
      <div className="mb-10">
        <SpaceCard space={space} layout="row" />
      </div>

      <div>
        <h2 className="text-4xl font-semibold text-center mb-10 text-accent-400">
          Reserve {space.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation space={space} />
        </Suspense>
      </div>
    </div>
  );
}
