import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./database/migrations",
  schema: "./database/schema/index.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: "./data/db.sqlite",
  },
});
