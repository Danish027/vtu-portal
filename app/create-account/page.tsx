import Subnav from "@/app/(components)/sub-nav";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { CreateAccounutForm } from "./create-account-form";
import { getUser } from "@/actions/users/getUser";

const page = async () => {
  const { userId } = auth();

  if (!userId) return redirect("/sign-in");

  const user = await getUser();

  if (user) {
    return redirect("/dashboard");
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <CreateAccounutForm />
    </div>
  );
};

export default page;
