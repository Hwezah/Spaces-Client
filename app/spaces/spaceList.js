import { unstable_noStore as no_store } from "next/cache";
import { getSpaces } from "@/app/_lib/data-service";
import AnimatedSpaceCard from "../_components/AnimatedSpaceCard";
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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[2vw]">
      {displayedSpaces.map((space) => (
        <AnimatedSpaceCard space={space} key={space.id} />
      ))}
    </div>
  );
}
