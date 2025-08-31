import { LoadingOverlay } from "@mantine/core";

export default function Loader() {
  return <LoadingOverlay loaderProps={{ type: "bars" }} visible />;
}
