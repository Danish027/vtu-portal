import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

import * as schema from "./schema";

const client = new Client({
  connectionString:
    "postgres://postgres.rrlubcsqodqplmglvket:FN801np0hNLMUPty@aws-0-ap-south-1.pooler.supabase.com:5432/postgres",
});

client.connect();

export const db = drizzle(client, { schema: schema });
