// import Navigation from "./components/Navigation";
import { Suspense } from "react";
import SpaceList from "./spaceList";
import "@/app/_styles/globals.css";
import Filter from "../_components/Filter";
// export const revalidate = 3600; // Clear Caching to get the latest data
// export const revalidate = 0; // Clear Caching to get the latest data

export const metadata = {
  title: "Spaces",
};
// import Spinner from "../_components/Spinner";
import Loading from "./loading";
import ReservationReminder from "../_components/ReservationReminder";
export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  // CHANGE
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Spaces
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Escape to comfort and calm in our private, family-friendly spaces in
        Komamboga, Magere... Designed for quiet living and restful stays, each
        space offers the perfect blend of privacy, warmth, and convenience.
        Whether you&apos;re planning a weekend break or an extended visit, enjoy
        a peaceful home where you can truly unwind and feel at ease. Welcome to
        your personal retreat.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Loading />} key={filter}>
        <SpaceList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
