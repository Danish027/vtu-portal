// import type { Config } from "drizzle-kit";
// import * as dotenv from "dotenv";
// dotenv.config();

// export default {
//   schema: "./db/schema.ts",
//   out: "./drizzle",
//   driver: "pg",
//   dbCredentials: {
//     connectionString:
//       "postgres://postgres.fqptfwenkwmriljxdkbz:2xCow8GdNwoVqbNr@aws-0-ap-south-1.pooler.supabase.com:5432/postgres",
//   },
// } satisfies Config;

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrateClient = postgres(
  "postgres://postgres.fqptfwenkwmriljxdkbz:2xCow8GdNwoVqbNr@aws-0-ap-south-1.pooler.supabase.com:5432/postgres",
  { max: 1 }
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
