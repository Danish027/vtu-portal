import Subnav from "@/app/(components)/sub-nav";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Subnav label="Notes" />
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <Link
              href={`/notes/${item}`}
              className="bg-gray-200 p-4 py-5 m-4 rounded-lg hover:shadow-md"
              key={item}
            >
              <h1 className="text-2xl">Semester {item}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
