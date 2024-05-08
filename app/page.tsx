import { HeroBanner } from "./(components)/hero-banner";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();

  const user = await currentUser();
  return <HeroBanner />;
}
