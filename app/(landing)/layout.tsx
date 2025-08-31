import { Layout } from "@/components/Layout";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout variant="landing">
      {/* o */}
      {children}
    </Layout>
  );
}
