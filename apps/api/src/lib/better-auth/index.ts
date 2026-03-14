// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import type { Context } from "hono";
import { getDb } from "../../db";
import { betterAuthOptions } from "./options";

export function getAuth(c: Context) {
  // c.env.DB는 wrangler.toml에 설정한 D1 바인딩 이름입니다.
  const db = getDb(c.env.db);

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite", // D1은 SQLite 기반입니다.
    }),
    baseURL: c.env.BETTER_AUTH_URL,
    secret: c.env.BETTER_AUTH_SECRET,
    ...betterAuthOptions,
  });
}
