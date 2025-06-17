import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center bg-primary-900 p-4 mt-auto">
      Spaces Allrights reserved © {currentYear}
    </div>
  );
}
