import Reservation from "@/app/_components/Reservation";
export const revalidate = 0; // Clear Caching to get the latest data
import Spinner from "@/app/_components/Spinner";
import Space from "@/app/_components/Space";
import { getSpace } from "@/app/_lib/data-service";
import { Suspense } from "react";
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

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <Space space={space} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {space.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation space={space} />
        </Suspense>
      </div>
    </div>
  );
}
