"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams?.get("capacity") ?? "all";
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All Spaces
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8+ guests
      </Button>
    </div>
  );
}

function Button({ filter, activeFilter, children, handleFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-3 py-2 hover:bg-accent-300 dark:hover:bg-primary-600  ${
        filter === activeFilter ? "dark:bg-primary-700 bg-accent-500" : ""
      }`}
    >
      {children}
    </button>
  );
}
