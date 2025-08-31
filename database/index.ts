import { drizzle } from "drizzle-orm/bun-sqlite";
import * as schema from "./schema";
export * from "./schema";

export type $DB = typeof db;
export type $DBTrx = Parameters<Parameters<$DB["transaction"]>[0]>[0];
const db = drizzle("./data/db.sqlite", { schema });

export { db, schema };
