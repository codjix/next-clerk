import { db } from "@/database";
import * as seeds from "@/database/seeds";

export const runSeeds = async () => {
  const start = Date.now();
  const dev = process.env.NODE_ENV === "development";

  return db
    .transaction(async (trx) => Object.values(seeds).map((seedItem) => seedItem(trx, dev)))
    .finally(() => console.log(`Seeding completed successfully in ${Date.now() - start}ms`))
    .catch((err) => console.error("Seeding failed: ", err));
};

await runSeeds();
