// better-auth.config.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuthOptions } from "./src/lib/better-auth/options";

export const auth = betterAuth({
  ...betterAuthOptions,
  // CLI는 스키마 생성 목적이므로 실제 DB 연결이 불필요합니다.
  database: drizzleAdapter(null as any, {
    provider: "sqlite",
  }),
});
