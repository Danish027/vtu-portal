import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrateClient = postgres(
  "postgres://postgres.rrlubcsqodqplmglvket:FN801np0hNLMUPty@aws-0-ap-south-1.pooler.supabase.com:5432/postgres",
  {
    max: 1,
  }
);

async function main() {
  await migrate(drizzle(migrateClient), {
    migrationsFolder: "./db/migrations",
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
