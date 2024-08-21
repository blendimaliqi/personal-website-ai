import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "next-themes";
import HeaderClient from "~/components/HeaderClient";
import { Metadata } from "next";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Blendi Maliqi | Web Developer Portfolio",
  description:
    "Professional portfolio of Blendi Maliqi, showcasing web development projects and skills in Next.js, React, and more.",
  keywords: "web developer, frontend developer, Next.js, React, portfolio",
  authors: [{ name: "Blendi Maliqi" }],
  openGraph: {
    title: "Blendi Maliqi | Web Developer Portfolio",
    description:
      "Professional portfolio of Blendi Maliqi, showcasing web development projects and skills.",
    images: [
      {
        url: "https://www.blendimaliqi.com/blendi.jpg",
        width: 1200,
        height: 630,
        alt: "Blendi Maliqi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blendi Maliqi | Web Developer Portfolio",
    description:
      "Professional portfolio of Blendi Maliqi, showcasing web development projects and skills.",
    images: ["https://www.blendimaliqi.com/blendi.jpg"],
  },
  icons: [{ rel: "icon", url: "/tabicon.jpg", type: "image/jpeg" }],
};

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Blendi Maliqi",
    url: "https://blendimaliqi.com",
    jobTitle: "Web Developer",
    description: "Professional web developer specializing in Next.js and React",
    sameAs: [
      "https://linkedin.com/in/blendimaliqi",
      "https://github.com/blendimaliqi",
      // Add other social media profiles
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body
        className={cn("min-h-screen bg-background")}
        suppressHydrationWarning
      >
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <HeaderClient />
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
          (function() {
            const theme = localStorage.getItem('theme') || 'system';
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.classList.add(theme === 'system' ? systemTheme : theme);
          })();
        `}
        </Script>
      </body>
    </html>
  );
}
