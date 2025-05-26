import SpaceCard from "@/app/_components/SpaceCard";
import { unstable_noStore as no_store } from "next/cache";
import { getSpaces } from "@/app/_lib/data-service";
export default async function SpaceList({ filter }) {
  no_store(); // Disable caching for this component
  const Spaces = await getSpaces();
  if (!Spaces.length) return null;
  let displayedSpaces = Spaces;
  if (filter === "all") {
    displayedSpaces = Spaces;
  }
  if (filter === "small") {
    displayedSpaces = Spaces.filter((space) => Number(space.maxCapacity) <= 3);
  }
  if (filter === "medium") {
    displayedSpaces = Spaces.filter(
      (space) =>
        Number(space.maxCapacity) >= 4 && Number(space.maxCapacity) <= 7
    );
  }
  if (filter === "large") {
    displayedSpaces = Spaces.filter((space) => Number(space.maxCapacity) >= 8);
  }
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedSpaces.map((space) => (
        <SpaceCard space={space} key={space.id} />
      ))}
    </div>
  );
}
