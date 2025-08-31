import Link from "next/link";
import { type Metadata } from "next";
import { Group, Stack, Title, Divider, ThemeIcon, Box, Card } from "@mantine/core";
import { PAGES, getPage } from "@/features/core/const";
import { Iconify } from "@/components/ui/Iconify";

import styles from "@/assets/styles/grid.module.scss";

export const metadata: Metadata = {
  title: `Home | Dashboard`,
};

export default function HomePage() {
  const page = getPage("/dash");
  const features = PAGES.dash.filter((page) => page.href !== "/dash");

  return (
    <Stack>
      <Group>
        <ThemeIcon size="xl" variant="light">
          <Iconify height={30} icon={page.icon} />
        </ThemeIcon>
        <Title order={3}>{page.label}</Title>
      </Group>
      <Divider />
      <Box className={styles.grid}>
        {features.map((feature, index) => (
          <Card key={index} component={Link} href={feature.href}>
            <Stack h={150} justify="center" align="center" gap={10}>
              <ThemeIcon size={80} variant="light">
                <Iconify width={60} icon={feature.icon} />
              </ThemeIcon>
              <Title order={3} ta="center">
                {feature.label}
              </Title>
            </Stack>
          </Card>
        ))}
      </Box>
    </Stack>
  );
}
