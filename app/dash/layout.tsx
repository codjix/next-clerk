import { Layout } from "@/components/Layout";

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout variant="dash">
      {/* o */}
      {children}
    </Layout>
  );
}
