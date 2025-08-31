// ======== Page structure & definition ========
export type Page = {
  label: string;
  href: string;
  icon: string;
  color?: string;
  list?: Page[];
};

export const PAGES = {
  landing: [
    { label: "Home", href: "/", icon: "tabler:home" },
    { label: "About", href: "/about", icon: "tabler:info-circle" },
  ],
  dash: [
    { label: "Dashboard", href: "/dash", icon: "tabler:home" },
    { label: "Settings", href: "/dash/settings", icon: "tabler:settings" },
  ],
} as const satisfies Record<string, Page[]>;

// ======== Flattened pages ========

const flatten = (pages: readonly Page[]): Page[] =>
  pages.flatMap((page) => (page.list ? [page, ...flatten(page.list)] : [page]));

// keep flattened pages in memory to avoid recalculating on each call.
const flattenedPages = Object.values(PAGES).flatMap(flatten);

// ======== Get page by href ========

type FlattenPages<T> = T extends readonly (infer U)[]
  ? U extends { list: readonly (infer V)[] }
    ? U | FlattenPages<V[]>
    : U
  : never;

type AllPages = FlattenPages<(typeof PAGES)[keyof typeof PAGES]>;

export function getPage<H extends AllPages["href"]>(href: H) {
  return flattenedPages.find((page) => page.href === href) as Extract<AllPages, { href: H }>;
}
