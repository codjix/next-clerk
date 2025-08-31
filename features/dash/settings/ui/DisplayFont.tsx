"use client";
import { Checkbox, Group, Select, Slider, Stack, Text, ThemeIcon } from "@mantine/core";
import { useCookieState } from "@/hooks/useCookieState";
import { Iconify } from "@/components/ui/Iconify";

export const FontLoader = () => {
  const [value] = useCookieState("theme-font-family", "Roboto");

  return (
    <link
      rel="stylesheet"
      href={`https://fonts.googleapis.com/css2?family=${value.replace(" ", "+")}:wght@400;700;900&display=swap`}
    />
  );
};

export const DisplayFont = () => {
  const [fontFamily, setFontFamily] = useCookieState("theme-font-family", "Roboto");
  const [autoContrast, setAutoContrast] = useCookieState("theme-auto-contrast", false);
  const [scale, setScale] = useCookieState<number>("theme-scale", 1);

  const icon = (icon: string) => (
    <ThemeIcon variant="transparent">
      <Iconify width={20} icon={icon} />
    </ThemeIcon>
  );

  return (
    <Stack gap={20}>
      <Select
        label="Font family"
        description="Select the font family for the application interface."
        onChange={(value: any) => setFontFamily(value)}
        leftSection={icon("tabler:text-grammar")}
        checkIconPosition="right"
        value={fontFamily}
        data={[
          { value: "Roboto", label: "Roboto - Normal" },
          { value: "Comic Neue", label: "Comic Neue - Thin" },
          { value: "Kalam", label: "Kalam - Cursive" },
          { value: "Sansita", label: "Sansita - Anime" },
          { value: "Fira Code", label: "Fira Code - Mono" },
        ]}
        renderOption={({ option, checked }) => (
          <Group w="100%" justify="space-between" gap="xs">
            <Group gap="xs">
              {icon("tabler:text-grammar")}
              {option.label}
            </Group>
            {checked && icon("tabler:check")}
          </Group>
        )}
      />

      <div>
        <Text size="sm">Display size</Text>
        <Text size="xs" c="dimmed" mb={10}>
          Adjust the size of the text displayed in the application interface.
        </Text>
        <Slider
          min={0.6}
          max={1.4}
          step={0.2}
          marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 0.2 + 0.6 }))}
          onChange={(value) => setScale(value)}
          value={scale}
          defaultValue={1}
        />
      </div>

      <Checkbox
        label="Auto contrast"
        description="Enable the overall contrast and mixture of colors for better visibility."
        onChange={() => setAutoContrast(!autoContrast)}
        checked={autoContrast}
      />
    </Stack>
  );
};
