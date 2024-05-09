import { db } from "@/db";
import { HeroBanner } from "./(components)/hero-banner";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();

  return <HeroBanner />;
}
