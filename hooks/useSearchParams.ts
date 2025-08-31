"use client";
import { useCallback } from "react";
import { useRouter, useSearchParams as useSearch } from "next/navigation";

export const useSearchParams = () => {
  const router = useRouter();
  const search = useSearch();

  const get = useCallback((key: string) => search.get(key), [router, search]);
  const set = useCallback(
    (key: string, val: string) => {
      const params = new URLSearchParams(search.toString());
      params.set(key, val);
      router.push(`?${params.toString()}`);
    },
    [router, search]
  );

  return { get, set, search };
};
