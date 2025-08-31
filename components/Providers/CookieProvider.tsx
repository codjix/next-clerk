"use client";
import Cookie from "universal-cookie";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const CookieCtx = createContext(new Cookie());

export function useCookieState<T extends any = string>(name: string): [T | undefined, (value: T) => void];
export function useCookieState<T extends any = string>(name: string, init: T): [T, (value: T) => void];
export function useCookieState<T extends any = string>(name: string, init?: T) {
  const store = useContext(CookieCtx);
  const [value, setValue] = useState(store.get<T>(name) ?? init);

  useEffect(() => {
    store.addChangeListener((opts) => {
      if (name == opts.name) setValue(opts.value);
    });
  }, []);

  const setVal = useCallback((value: T) => store.set(name, value, { path: "/" }), []);

  return [value, setVal] as const;
}

type $CookieProvider = {
  children?: React.ReactNode;
  cookies?: string;
};
export const CookieProvider = ({ children, cookies }: $CookieProvider) => {
  const cookie = new Cookie(cookies);

  return (
    <CookieCtx value={cookie}>
      {/* o */}
      {children}
    </CookieCtx>
  );
};
