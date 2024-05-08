import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white w-full  border-gray-200 dark:bg-gray-900 border-b">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            VTU Portal
          </span>
        </Link>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
