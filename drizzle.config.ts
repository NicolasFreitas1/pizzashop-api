import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema/users.ts",
  out: "./drizzle",
  driver: "pg",
} satisfies Config;
