import { type Metadata } from "next";
import { Center } from "@mantine/core";
import { SignIn } from "@clerk/nextjs";
import { CONFIG } from "@/features/core/const";

export const metadata: Metadata = {
  title: `Login | ${CONFIG.title}`,
};

export default function LoginPage() {
  return (
    <Center h="100vh">
      <SignIn />
    </Center>
  );
}
