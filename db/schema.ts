import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

export type Branch = "CSE" | "ISE" | "ECE" | "ME" | "CV" | "AE" | "EEE";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  fullName: text("full_name").notNull(),
  profilePicture: varchar("profile_picture"),
  userType: text("user_type").notNull(),
  branch: text("branch"),
  usn: varchar("usn"),
  semister: text("semister"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = Omit<User, "id" | "createdAt" | "updatedAt">;

// subject table

export const subjects = pgTable("subjects", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull(),
  branch: text("branch").notNull(),
  semister: integer("semister").notNull(),
});

// notes table

export const notes = pgTable("notes", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull(),
  module: text("module").notNull(),
  description: text("description").notNull(),
  downloadLink: text("download_link").notNull(),
});

// question papers table
export const questionPapers = pgTable("question_papers", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull(),
  year: text("year").notNull(),
  downloadLink: text("download_link").notNull(),
});
