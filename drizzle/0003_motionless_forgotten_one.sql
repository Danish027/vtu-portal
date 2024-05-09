CREATE TABLE IF NOT EXISTS "notes" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"code" text NOT NULL,
	"module" text NOT NULL,
	"description" text NOT NULL,
	"download_link" text NOT NULL
);
