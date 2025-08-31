"use client";
import { useEffect } from "react";
import { Button, Group, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

type $Error = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: $Error) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Stack gap={20} align="center" h="100vh" justify="center">
      <Title order={2}>Internal Error</Title>
      <Text c="dimmed" ta="center" py={10}>
        Somthing went wrong while loading the page. Please try again.
      </Text>
      <Group justify="center">
        <Button component={Link} href="/">
          Go Home
        </Button>
        <Button onClick={() => reset()}>Try Again</Button>
      </Group>
    </Stack>
  );
}
