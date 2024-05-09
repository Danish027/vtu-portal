import { db } from "@/db";
import { users } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function getUser() {
  const { userId } = auth();

  if (!userId) return null;

  const user = await db.select().from(users).where(eq(users.id, userId));
  return user[0] ?? undefined;
}
