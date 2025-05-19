"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }
  return (
    <div className="border border-primary-800 flex">
      <button
        onClick={() => handleFilter("all")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        All Spaces
      </button>
      <button
        onClick={() => handleFilter("small")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        1&mdash;3 guests
      </button>
      <button
        onClick={() => handleFilter("medium")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        4&mdash;7 guests
      </button>
      <button
        onClick={() => handleFilter("large")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        8+ guests
      </button>
    </div>
  );
}
