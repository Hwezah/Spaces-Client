import SpaceCard from "@/app/_components/spaceCard";
import { unstable_noStore as no_store } from "next/cache";
import { getSpaces } from "@/app/_lib/data-service";
export default async function SpaceList() {
  no_store(); // Disable caching for this component
  const Spaces = await getSpaces();
  if (!Spaces || Spaces.length === 0) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {Spaces.map((space) => (
        <SpaceCard space={space} key={space.id} />
      ))}
    </div>
  );
}
