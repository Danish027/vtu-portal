import Subnav from "@/app/(components)/sub-nav";
import { db } from "@/db";
import { subjects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({
  params,
}: {
  params: {
    semester: string;
  };
}) => {
  if (isNaN(parseInt(params.semester))) return notFound();

  if (parseInt(params.semester) > 8 || parseInt(params.semester) < 1)
    return notFound();

  const data = await db
    .select()
    .from(subjects)
    .where(eq(subjects.semister, parseInt(params.semester)));

  return (
    <div>
      <Subnav label={`Semester ${params.semester}`} />
      <div className="flex text-blue-500 hover:underline items-center gap-2">
        <ArrowLeft className="size-5" />
        <Link href="/notes" className="text-blue-500">
          Back
        </Link>
      </div>

      <div className="grid grid-cols-3">
        {data.map((item) => {
          return (
            <Link
              href={`/notes/${params.semester}/${item.code}`}
              className="bg-gray-200 p-4 py-5 m-4 rounded-lg flex flex-col justify-end items-start hover:shadow-md"
              key={item.id}
            >
              <h3 className="mt-2">{item.code}</h3>
              <h1 className="text-2xl text-gray-800">{item.name}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
