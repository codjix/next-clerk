"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "./MantineProvider";
import { CookieProvider } from "./CookieProvider";
import { FontLoader } from "@/features/dash/settings";

const queryClient = new QueryClient();

type $Providers = {
  children?: React.ReactNode;
  cookies?: string;
};
export const Providers = ({ children, cookies }: $Providers) => {
  return (
    <ClerkProvider>
      <CookieProvider cookies={cookies}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <FontLoader />
            {children}
          </MantineProvider>
        </QueryClientProvider>
      </CookieProvider>
    </ClerkProvider>
  );
};
