import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display, Courier_Prime } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const sourceSans = Source_Sans_3({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "Scott Henderson Advisory Services — Bookkeeping & Fractional CFO for Owner-Managed Businesses",
  description: "Bookkeeping and fractional CFO advisory for owner-managed businesses. Monthly books you can read, and decisions supported year-round — not just at tax time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans.className} ${playfairDisplay.variable} ${courierPrime.variable}`}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
