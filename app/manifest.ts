import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GrowthYari",
    short_name: "GrowthYari",
    description:
      "Live career coaching, structured practice and proof-of-work you can show an employer.",
    start_url: "/",
    display: "standalone",
    background_color: "#101a16",
    theme_color: "#177c5d",
    icons: [
      {
        src: "/brand/growthyari-mark-256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/growthyari-mark-64.png",
        sizes: "64x64",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}