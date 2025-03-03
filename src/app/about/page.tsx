import { Metadata } from "next";
import AboutPageClient from "~/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About Me | Blendi Maliqi",
  description:
    "Learn more about Blendi Maliqi, a software developer specializing in modern web development technologies.",
  alternates: {
    canonical: "https://blendimaliqi.com/about",
  },
  openGraph: {
    title: "About Me | Blendi Maliqi",
    description:
      "Learn more about Blendi Maliqi, a software developer specializing in modern web development technologies.",
    url: "https://blendimaliqi.com/about",
    type: "profile",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Blendi Maliqi - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "About Me | Blendi Maliqi",
    description:
      "Learn more about Blendi Maliqi, a software developer specializing in modern web development technologies.",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
