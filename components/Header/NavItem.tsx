"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavLink, Stack } from "@mantine/core";
import { usePathname } from "next/navigation";
import { Page } from "@/features/core/const";
import { Iconify } from "../ui/Iconify";

export const NavItem = ({ href, icon, label, list }: Page) => {
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);
  const children = list?.map((link, index) => <NavItem key={index} {...link} />);

  useEffect(() => {
    setOpened(pathname.startsWith(href));
  }, [pathname, href]);

  return (
    <NavLink
      href={href}
      label={label}
      component={Link}
      leftSection={<Iconify width={30} icon={icon} />}
      children={children ? <Stack gap={10} children={children} /> : undefined}
      onClick={() => setOpened((prev) => !prev)}
      style={{ borderRadius: 10 }}
      active={pathname === href}
      variant="light"
      opened={opened}
    />
  );
};
