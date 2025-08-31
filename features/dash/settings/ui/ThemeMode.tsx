"use client";
import { MantineColorScheme, SegmentedControl, Stack, Text, useMantineColorScheme } from "@mantine/core";
import { Iconify } from "@/components/ui/Iconify";

export const ThemeMode = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const options = [
    ["Auto", "tabler:contrast-filled"],
    ["Dark", "tabler:moon"],
    ["Light", "tabler:sun"],
  ].map(([label, icon]) => ({
    value: label.toLowerCase() as MantineColorScheme,
    label: (
      <Stack align="center" gap={5} p={10}>
        <Iconify height={30} icon={icon} />
        <Text>{label}</Text>
      </Stack>
    ),
  }));

  return (
    <>
      <Text size="sm">Choose Theme Mode</Text>
      <Text size="xs" c="dimmed" mb={10}>
        Select your preferred theme appearance for the application interface.
      </Text>
      <SegmentedControl
        data={options}
        onChange={(scheme: any) => setColorScheme(scheme)}
        value={colorScheme}
        fullWidth
      />
    </>
  );
};
