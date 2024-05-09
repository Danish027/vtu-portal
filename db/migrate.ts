import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrateClient = postgres(process.env.SUPABASE_CONNECTION_STRING!, {
  max: 1,
});

async function main() {
  await migrate(drizzle(migrateClient), {
    migrationsFolder: "./db/migrations",
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
