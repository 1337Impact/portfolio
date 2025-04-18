import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    // <footer className="mb-10 px-4 text-center text-gray-500">
    <footer className="px-4 text-center text-gray-500">
      <p className="mb-2 block text-xs">
        <span className="font-semibold">
          Explore my work in web development.
        </span>{" "}
        Each project reflects my skills and passion. Thanks for visiting!
      </p>

      <small className=" text-xs">
        &copy; {currentYear} Mohammed Benkhattab. All rights reserved.
      </small>
    </footer>
  );
}
