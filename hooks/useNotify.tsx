"use client";
import { useCallback } from "react";
import { notifications } from "@mantine/notifications";
import { DefaultMantineColor, ThemeIcon } from "@mantine/core";
import { Iconify } from "@/components/ui/Iconify";

export type $Notify = {
  message: React.ReactNode;
  color?: DefaultMantineColor;
  icon?: string;
};

export const useNotify = () => useCallback(Notify, []);
const Notify = ({ message, color, icon }: $Notify) => {
  notifications.show({
    color,
    message,
    withBorder: true,
    autoClose: true,
    icon: (
      <ThemeIcon color={color} size="35px">
        <Iconify style={{ width: "70%", height: "70%" }} icon={icon ?? "tabler:info-circle"} />
      </ThemeIcon>
    ),
  });
};

Notify.success = (message: string) => {
  Notify({ message, color: "var(--mantine-primary-color-filled)", icon: "tabler:check" });
};

Notify.error = (message: string) => {
  Notify({ message, color: "red", icon: "tabler:alert-triangle" });
};
