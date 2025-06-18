import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center  p-4 mt-auto bg-accent-50 dark:bg-primary-900">
      Spaces Allrights reserved © {currentYear}
    </div>
  );
}
