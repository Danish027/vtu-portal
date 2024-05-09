CREATE TABLE IF NOT EXISTS "question_papers" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"code" text NOT NULL,
	"year" text NOT NULL,
	"download_link" text NOT NULL
);
