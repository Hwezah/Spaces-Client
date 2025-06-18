"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip";
type props = {
  className?: string;
};
export function ModeToggle({ className }: props) {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode((prev) => !prev);
            document.body.classList.toggle("dark");
          }}
        >
          {isDarkMode ? (
            <div className="bg-gray-300 rounded-full p-1.5">
              <SunIcon />
            </div>
          ) : (
            <div className="bg-primary-700 rounded-full p-1.5">
              <MoonIcon className="text-primary-950" />
            </div>
          )}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
