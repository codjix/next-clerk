import { $ } from "bun";

await $`rm -rf dist`;
await $`env BUNDLE=1 next build`;
await $`mv .next/standalone dist`;
await $`mv .next/static dist/.next`;
