"use server";
import { db } from "@/db";
import { InsertUser, User, users } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function createUser({ user }: { user: InsertUser }) {
  const { userId } = auth();

  if (!userId) return;

  const data = await db.select().from(users).where(eq(users.id, userId));

  if (data.length === 0) {
    await db.insert(users).values({
      ...user,
      id: userId,
    });
  }
}
