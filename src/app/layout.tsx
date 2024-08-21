import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "next-themes";
import HeaderClient from "~/components/HeaderClient";
import Footer from "~/components/Footer"; // Import the Footer component

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "font-sans")}>
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
      </body>
    </html>
  );
}
