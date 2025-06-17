import Link from "next/link"; // Import Link
import Image from "next/image";
import { ArrowUpRight } from "lucide-react"; // Import the icon
import { cn } from "@/lib/utils"; // Assuming cn is available

export default function SpaceCard({ space, layout = "default" }) {
  // Assuming 'space' object has 'name', 'maxCapacity', 'image', etc.
  const { id, name, maxCapacity, image, description } = space; // Destructure id
  const isRowLayout = layout === "row";
  return (
    // Add 'group' and 'relative' for hover effect and positioning
    <Link
      href={`/spaces/${id}`}
      className={cn(
        "group relative rounded-lg overflow-hidden flex hover:scale-105 transition-transform duration-200",
        isRowLayout
          ? " flex-col md:flex-row items-stretch gap-6 h-fit "
          : "flex-col"

        // Default to flex-col, use flex (row) and items-stretch for 'row' layout
      )}
    >
      {image && (
        <div
          className={cn(
            "relative overflow-hidden h-[14rem] ",
            isRowLayout ? "w-full lg:w-1/2 h-[30rem]" : "w-full "
          )}
        >
          <Image
            src={image}
            alt={`Image of ${name}`}
            fill
            className="object-cover hover:scale-105 transition-all duration-200"
            priority
          />
        </div>
      )}
      <div
        className={cn(
          " py-2 flex flex-col flex-grow min-w-0",
          isRowLayout ? "h-fit md:w-1/2" : ""
        )}
      >
        <div className="flex justify-between  items-center leading-none">
          <h3
            className={cn(
              "font-semibold text-accent-100 py-1",
              isRowLayout ? "truncate" : ""
            )}
          >
            {name}
          </h3>
          <span>
            Max: <span className="font-semibold">{maxCapacity}</span>
          </span>
        </div>
        <p
          className={cn(
            "text-primary-200 text-sm flex-grow  md:text-md lg:text-lg",
            isRowLayout ? "" : "leading-none"
          )}
        >
          {description || "No description available."}
        </p>
        {/* You can add more details or a link here */}
      </div>

      {/* Overlay with icon, shown on group hover */}
      {isRowLayout ? (
        ""
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 group-hover:bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="rounded-full p-2 bg-black text-white h-12 w-12 transform group-hover:scale-110 transition-transform duration-300" />
        </div>
      )}
    </Link>
  );
}
