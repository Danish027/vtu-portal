import Subnav from "@/app/(components)/sub-nav";
import { db } from "@/db";
import { notes, subjects } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { ArrowLeft, File } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({
  params,
}: {
  params: {
    subject: string;
  };
}) => {
  const data = await db
    .select()
    .from(notes)
    .where(eq(notes.code, params.subject));

  const sortedData = data.sort(
    (a, b) => parseInt(a.module) - parseInt(b.module)
  );

  return (
    <div>
      <Subnav label={`Semester ${params.subject}`} />
      <div className="flex text-blue-500 hover:underline items-center gap-2 pl-5">
        <ArrowLeft className="size-5" />
        <Link href="/notes" className="text-blue-500">
          Back
        </Link>
      </div>

      {sortedData.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-semibold text-gray-700 mt-[200px]">
            Notes uploaded soon.
          </h1>
        </div>
      ) : (
        <>
          <p className="text-2xl font-semibold text-gray-700 m-5 underline">
            {sortedData[0]?.name}
          </p>
          <div className="grid grid-cols-1">
            {sortedData.map((item) => {
              return (
                <Link
                  href={`${item.downloadLink}`}
                  className="bg-gray-200 p-4 py-5 m-4 rounded-lg flex flex-col justify-center items-start hover:shadow-md"
                  key={item.id}
                >
                  <div className="flex items-center gap-4">
                    <File className="size-10 p-2 rounded-full bg-rose-200 text-rose-500" />
                    <h3 className="text-lg font-semibold">
                      {" "}
                      Module {item.module}
                    </h3>
                  </div>
                  <h1 className="text-gray-700 mt-2">{item.description}</h1>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default page;
