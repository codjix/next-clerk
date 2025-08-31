import Link from "next/link";
import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { CONFIG } from "@/features/core/const";

export const metadata = {
  title: `Not Found | ${CONFIG.title}`,
};

export default function NotFound() {
  return (
    <Stack gap={20} align="center" h="100vh" justify="center">
      <Text c="var(--mantine-primary-color-filled)">404</Text>
      <Title order={2}>Not Found</Title>
      <Text c="dimmed" ta="center" py={10}>
        Sorry, couldn't find the page you're looking for. It might be deleted or moved to another URL.
      </Text>
      <Group justify="center">
        <Button component={Link} href="/">
          Go Home
        </Button>
        <Button component={Link} href="#">
          Refresh
        </Button>
      </Group>
    </Stack>
  );
}
