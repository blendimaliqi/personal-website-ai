import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "next-themes";
import HeaderClient from "~/components/HeaderClient";
import Footer from "~/components/Footer";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Blendi Maliqi Portfolio",
  description: "Personal portfolio of Blendi Maliqi",
  icons: {
    icon: "/tabicon.jpg",
  },
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
      <Head>
        {/* Add your favicon link here */}
        <link rel="icon" href="/tabicon.jpg" type="image/jpeg" />
        <title>Your Page Title</title>
      </Head>
      <body
        className={cn("min-h-screen bg-background")}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <HeaderClient />
            <main className="flex-grow">{children}</main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            const theme = localStorage.getItem('theme') || 'system';
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.classList.add(theme === 'system' ? systemTheme : theme);
          })();
        `,
          }}
        />
      </body>
    </html>
  );
}
