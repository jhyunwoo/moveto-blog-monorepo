import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/lib/db/drizzle",
  schema: "./src/lib/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
});
