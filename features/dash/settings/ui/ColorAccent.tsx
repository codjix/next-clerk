"use client";
import { Group, Select, ThemeIcon, useMantineTheme } from "@mantine/core";
import { useCookieState } from "@/hooks/useCookieState";
import { Iconify } from "@/components/ui/Iconify";

export const ColorAccent = () => {
  const { colors } = useMantineTheme();
  const [primaryColor, setPrimaryColor] = useCookieState("theme-primary-color", "green");

  const icon = (icon: string, color?: string) => (
    <ThemeIcon variant="transparent" color={color}>
      <Iconify width={20} icon={icon} />
    </ThemeIcon>
  );

  return (
    <Select
      label="Choose Color Accent"
      description="Select your preferred color accent for the application interface."
      onChange={(value) => setPrimaryColor(value ?? "green")}
      leftSection={icon("tabler:color-swatch", primaryColor!)}
      data={Object.keys(colors).sort()}
      value={primaryColor}
      allowDeselect={false}
      renderOption={({ option, checked }) => (
        <Group w="100%" justify="space-between" gap="xs">
          <Group gap="xs">
            {icon("tabler:color-swatch", option.value)}
            {option.value}
          </Group>
          {checked && icon("tabler:check")}
        </Group>
      )}
    />
  );
};
