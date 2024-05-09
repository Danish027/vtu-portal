import Subnav from "@/app/(components)/sub-nav";
import React from "react";
import UserProfile from "./user-profile";
import { db } from "@/db";
import { users } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

const page = async () => {
  const { userId } = auth();

  if (!userId) return redirect("/sign-in");

  const user = await db.select().from(users).where(eq(users.id, userId));

  return (
    <div>
      <Subnav label="Dashboard" />
      <div className="border-dotted border-2 rounded-lg">
        <UserProfile user={user[0]} />
      </div>
    </div>
  );
};

export default page;
