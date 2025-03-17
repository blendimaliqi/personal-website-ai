import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "next-themes";
import HeaderClient from "~/components/HeaderClient";
import Footer from "~/components/Footer";
import { Metadata, Viewport } from "next";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Blendi Maliqi | Software Developer",
  description:
    "Experienced Software Developer specializing in modern web development with Next.js, React, .NET and cloud technologies. View featured projects and technical expertise.",
  keywords:
    "software developer, fullstack developer, Next.js, React, .NET, cloud architecture, web development",
  authors: [{ name: "Blendi Maliqi" }],
  metadataBase: new URL("https://blendimaliqi.com"),
  alternates: {
    canonical: "https://blendimaliqi.com",
  },
  openGraph: {
    title: "Blendi Maliqi | Software Developer",
    description:
      "Experienced Software Developer delivering scalable web solutions with modern technologies. Specialized in Next.js, React, .NET and cloud architecture.",
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
    card: "summary_large_image",
    title: "Blendi Maliqi | Software Developer",
    description:
      "Experienced Software Developer delivering scalable web solutions with modern technologies. Specialized in Next.js, React, .NET and cloud architecture.",
    images: ["/android-chrome-512x512.png"],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  manifest: "/site.webmanifest",
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Blendi Maliqi",
    url: "https://blendimaliqi.com",
    jobTitle: "Software developer",
    description:
      "Professional software developer specializing in Next.js, React and .NET",
    sameAs: [
      "https://linkedin.com/in/blendimaliqi",
      "https://github.com/blendimaliqi",
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZF3LS48WEW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZF3LS48WEW');
          `}
        </Script>
      </head>
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
            <main className="flex-1 px-4 pb-16 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
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
