import { Metadata } from "next";
import { cookies } from "next/headers";
import type { MantineColorScheme as Scheme } from "@mantine/core";
import { mantineHtmlProps, ColorSchemeScript } from "@mantine/core";
import { Providers } from "@/components/Providers";
import { CONFIG } from "@/features/core/const";

export const metadata: Metadata = {
  title: CONFIG.title,
  description: CONFIG.description,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookie = await cookies();
  const scheme = (cookie.get("mantine-scheme")?.value as Scheme) ?? "auto";

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme={scheme} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Providers cookies={cookie.toString()}>
          {/* o */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
