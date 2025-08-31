import { MetadataRoute } from "next";
import { CONFIG } from "@/features/core/const";

import logo192 from "@/assets/images/logo-192.png";
import logo512 from "@/assets/images/logo-512.png";

const icons = [
  { src: logo192.src, type: "image/png", sizes: "192x192" },
  { src: logo512.src, type: "image/png", sizes: "512x512" },
];

export default function manifest(): MetadataRoute.Manifest {
  const isProd = process.env.NODE_ENV == "production";

  return {
    scope: "/",
    start_url: "/",
    name: CONFIG.title,
    display: "standalone",
    short_name: CONFIG.title,
    description: CONFIG.description,
    background_color: "#242424",
    theme_color: "#242424",
    ...(isProd ? { icons } : {}),
  };
}
