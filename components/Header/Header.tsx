"use client";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";
import { Group, Stack, AppShell, ActionIcon, ScrollAreaAutosize, Text } from "@mantine/core";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { CONFIG, PAGES } from "@/features/core/const";
import { useNavBarOpened } from "../Layout";
import { UserProfile } from "./UserProfile";
import { Iconify } from "../ui/Iconify";
import { NavItem } from "./NavItem";

export const Header = ({ variant = "landing" }: { variant?: keyof typeof PAGES }) => {
  const [opened, setOpened] = useNavBarOpened();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const icon = `tabler:layout-sidebar-right-${!opened ? "expand" : "collapse"}`;

  return (
    <>
      <AppShell.Header>
        <Group h="100%" justify="space-between" px={20}>
          <Group gap={10} align="center">
            <ActionIcon size={35} variant="default" onClick={() => setOpened(!opened)}>
              <Iconify hFlip={isMobile} height={25} icon={icon} />
            </ActionIcon>
            <Text key={variant} component={Link} href={variant == "landing" ? "/" : "/dash"} fz={25} fw="bold">
              {variant == "landing" ? CONFIG.title : "Dashboard"}
            </Text>
          </Group>
          <Group gap={10} align="center">
            <ThemeSwitcher />
            <UserProfile />
          </Group>
        </Group>
      </AppShell.Header>
      {/* ============================== */}
      <AppShell.Navbar p={20}>
        <ScrollAreaAutosize scrollbars={false}>
          <Stack gap={10}>
            {PAGES[variant].map((link, index) => (
              <NavItem key={index} {...link} />
            ))}
          </Stack>
        </ScrollAreaAutosize>
      </AppShell.Navbar>
    </>
  );
};
