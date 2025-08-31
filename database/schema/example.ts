import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { SharedColumns } from "./index";
import { relations } from "drizzle-orm";

export type $ExampleSelect = typeof example.$inferSelect;
export type $ExampleInsert = typeof example.$inferInsert;
export const example = sqliteTable("example", {
  ...SharedColumns,
  key: text("key").notNull(),
  value: text("value").notNull(),
  status: text("status", { enum: ["created", "pending", "cancelled"] }).notNull(),
});

export const exampleRelations = relations(example, ({ many, one }) => ({}));
