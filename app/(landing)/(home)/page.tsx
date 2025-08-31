import { type Metadata } from "next";
import { Group, Stack, Title, Divider, ThemeIcon } from "@mantine/core";
import { Iconify } from "@/components/ui/Iconify";
import { CONFIG, getPage } from "@/features/core/const";

export const metadata: Metadata = {
  title: `Home | ${CONFIG.title}`,
};

export default function HomePage() {
  const page = getPage("/");

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
      <p>Home Page</p>
    </Stack>
  );
}
