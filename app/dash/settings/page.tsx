import { type Metadata } from "next";
import { Group, Stack, Title, Divider, ThemeIcon, Badge, Fieldset } from "@mantine/core";
import { ColorAccent, DisplayFont, ThemeMode } from "@/features/dash/settings";
import { Iconify } from "@/components/ui/Iconify";
import { getPage } from "@/features/core/const";

export const metadata: Metadata = {
  title: `Settings | Dashboard`,
};

export default function SettingsPage() {
  const page = getPage("/dash/settings");

  return (
    <Stack>
      <Group>
        <ThemeIcon size="xl" variant="light">
          <Iconify height={30} icon={page.icon} />
        </ThemeIcon>
        <Title order={3}>{page.label}</Title>
      </Group>
      <Divider />

      <Fieldset {...fieldsetOptions("Theme mode")}>
        <ThemeMode />
      </Fieldset>
      <Fieldset {...fieldsetOptions("Color accent")}>
        <ColorAccent />
      </Fieldset>
      <Fieldset {...fieldsetOptions("Display font")}>
        <DisplayFont />
      </Fieldset>
    </Stack>
  );
}

const fieldsetOptions = (legend: React.ReactNode) => {
  return {
    variant: "filled",
    legend: (
      <Badge variant="default" h={30}>
        {legend}
      </Badge>
    ),
  };
};
