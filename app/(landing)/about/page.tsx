import { type Metadata } from "next";
import { Group, Stack, Title, Divider, ThemeIcon } from "@mantine/core";
import { CONFIG, getPage } from "@/features/core/const";
import { Iconify } from "@/components/ui/Iconify";

export const metadata: Metadata = {
  title: `About | ${CONFIG.title}`,
};

export default function AboutPage() {
  const page = getPage("/about");

  return (
    <Stack>
      <Group>
        <ThemeIcon size="xl" variant="light">
          <Iconify height={30} icon={page.icon} />
        </ThemeIcon>
        <Title order={3}>{page.label}</Title>
      </Group>
      <Divider />
      {/* o */}
      <p>About Page</p>
    </Stack>
  );
}
