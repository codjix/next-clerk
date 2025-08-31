"use client";
import { ActionIcon, MantineColorScheme, useMantineColorScheme } from "@mantine/core";
import { Iconify } from "./Iconify";

export const ThemeSwitcher = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const schemes = [
    ["Auto", "tabler:contrast-filled"],
    ["Dark", "tabler:moon"],
    ["Light", "tabler:sun"],
  ].map(([title, icon]) => ({
    icon: <Iconify height={20} icon={icon} />,
    value: title.toLowerCase() as MantineColorScheme,
    title,
  }));

  const curentScheme = schemes.find((item) => item.value == colorScheme);
  const currentIndex = schemes.indexOf(curentScheme as (typeof schemes)[0]);

  const setScheme = () => setColorScheme(schemes[(currentIndex + 1) % 3].value);

  return (
    <ActionIcon size={35} variant="default" onClick={setScheme}>
      {curentScheme?.icon}
    </ActionIcon>
  );
};
