import type { Metadata } from "next";
import { Book, Home, Layers, StickyNote, Users } from "lucide-react";
import Sidebar from "./(components)/sidebar";
import { auth } from "@clerk/nextjs/server";
import { getUser } from "@/actions/users/getUser";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "VTU Portal",
  description: "Generated by create next app",
};

const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <Home className="size-5" />,
  },
  {
    label: "Notes",
    href: "/notes",
    icon: <Book className="size-5" />,
  },
  {
    label: "Question Papers",
    href: "/question-papers",
    icon: <StickyNote className="size-5" />,
  },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  if (!userId) return redirect("/sign-in");

  const user = await getUser();

  if (!user) return redirect("/create-account");

  return (
    <html lang="en">
      <body>
        <Sidebar items={SIDEBAR_ITEMS} />
        <div className="p-4 sm:ml-64">{children}</div>
      </body>
    </html>
  );
}