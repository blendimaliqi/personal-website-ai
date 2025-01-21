import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "next-themes";
import HeaderClient from "~/components/HeaderClient";
import Footer from "~/components/Footer";
import { Metadata } from "next";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Blendi Maliqi | Software Developer",
  description:
    "Experienced Software Developer specializing in modern web development with Next.js, React, .NET and cloud technologies. View featured projects and technical expertise.",
  keywords:
    "software developer, full-stack developer, Next.js, React, .NET, cloud architecture, web development",
  authors: [{ name: "Blendi Maliqi" }],
  openGraph: {
    title: "Blendi Maliqi | Software Developer",
    description:
      "Experienced Software Developer delivering scalable web solutions with modern technologies. Specialized in Next.js, React, .NET and cloud architecture.",
    images: [
      {
        url: "/bm.png",
        width: 1200,
        height: 630,
        alt: "Blendi Maliqi - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blendi Maliqi | Software Developer",
    description:
      "Experienced Software Developer delivering scalable web solutions with modern technologies. Specialized in Next.js, React, .NET and cloud architecture.",
    images: ["/bm.png"],
  },
  icons: [{ rel: "icon", url: "/bm.png", type: "image/jpeg" }],
};

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Blendi Maliqi",
    url: "https://blendimaliqi.com",
    jobTitle: "Web Developer",
    description:
      "Professional web developer specializing in Next.js, React and .NET",
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
      <head>
        {/* Google Analytics */}
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
            <main className="flex-grow px-4 sm:px-6 lg:px-8">{children}</main>
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
