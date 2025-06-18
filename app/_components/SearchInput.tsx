import { Search } from "lucide-react";
import React from "react";

export const SearchInput = ({
  placeholder = "Search Spaces",
  className = "",
}) => {
  return (
    <div className={`relative ${className} w-full`}>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-700 dark:bg-primary-900 lg:p-4 md:p-3 p-2 rounded-full">
        <Search className="h-6 w-6 text-white" />
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-8 pr-16 lg:py-[1.3rem] md:py-[1rem] py-[.7rem] rounded-full shadow bg-white dark:bg-primary-950 text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
    </div>
  );
};
