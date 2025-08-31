import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import { db } from "@/database";

export const runMigrations = async () => {
  const start = Date.now();

  try {
    migrate(db, { migrationsFolder: "./database/migrations" });
    console.log(`Migrations completed successfully in ${Date.now() - start}ms`);
  } catch (error) {
    console.error("Migrations failed: ", error);
  }
};

await runMigrations();
