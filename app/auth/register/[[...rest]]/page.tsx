import { type Metadata } from "next";
import { Center } from "@mantine/core";
import { SignUp } from "@clerk/nextjs";
import { CONFIG } from "@/features/core/const";

export const metadata: Metadata = {
  title: `Register | ${CONFIG.title}`,
};

export default function RegisterPage() {
  return (
    <Center h="100vh">
      <SignUp />
    </Center>
  );
}
