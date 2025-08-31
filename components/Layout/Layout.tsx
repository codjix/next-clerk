"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AppShell, Container } from "@mantine/core";
import { useColorScheme, useHeadroom, useMediaQuery } from "@mantine/hooks";
import { useCookieState } from "@/hooks/useCookieState";
import { ScrollTop } from "../ui/ScrollTop";
import { Header } from "../Header";
import { PAGES } from "@/features/core/const";

type $Layout = {
  children?: React.ReactNode;
  variant?: keyof typeof PAGES;
};
export const Layout = ({ children, variant }: $Layout) => {
  const scheme = useColorScheme();
  const [opened] = useNavBarOpened();
  const pinned = useHeadroom({ fixedAt: 120 });

  const color = scheme === "dark" ? "#242424" : "#ffffff";
  const containerStyle = { container: "main-view / inline-size" };

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: true }}
      navbar={{ width: 300, collapsed: { mobile: !opened, desktop: opened }, breakpoint: "sm" }}
    >
      <meta name="theme-color" content={color} />
      <Header variant={variant} />
      <AppShell.Main>
        <Container style={containerStyle} size="lg" p={20} pt={25}>
          {children}
        </Container>
        <ScrollTop />
      </AppShell.Main>
    </AppShell>
  );
};

export const useNavBarOpened = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [opened, setOpened] = useCookieState("navbar-opened", true);

  useEffect(() => {
    if (isMobile) setOpened(false);
  }, [pathname, isMobile]);

  return [Boolean(opened), (value: boolean) => setOpened(value)] as const;
};
