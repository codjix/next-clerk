"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, ActionIcon } from "@mantine/core";
import { UserButton, useSession } from "@clerk/nextjs";
import { Iconify } from "../ui/Iconify";

export const UserProfile = () => {
  const path = usePathname();
  const { isLoaded, isSignedIn } = useSession();

  if (!isLoaded) {
    return <ActionIcon size={35} variant="default" loading />;
  } else if (!isSignedIn) {
    return (
      <Button component={Link} href="/dash">
        Login
      </Button>
    );
  }

  const href = path.startsWith("/dash") ? "/" : "/dash";
  const label = path.startsWith("/dash") ? "Visit Website" : "Dashboard";
  const icon = path.startsWith("/dash") ? "tabler:world" : "tabler:layout-dashboard";
  const labelIcon = <Iconify key={icon} height={16} icon={icon} />;

  return (
    <UserButton key={label}>
      <UserButton.MenuItems>
        <UserButton.Link {...{ href, label, labelIcon }} />
      </UserButton.MenuItems>
    </UserButton>
  );
};
