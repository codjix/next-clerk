import { $DBTrx } from "../index";
import * as schema from "../schema";

export const exampleSeeds = async (trx: $DBTrx, dev = true) => {
  if (dev) {
    await trx.insert(schema.example).values({
      id: "key10000-0000-0000-0000-000000000000",
      key: "exampleKey1",
      value: "exampleValue1",
      status: "created",
    });
  }
};
