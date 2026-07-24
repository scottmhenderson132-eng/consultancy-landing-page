import type { Metadata } from "next";
import { Work_Sans, Noto_Sans, Courier_Prime } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const workSans = Work_Sans({ subsets: ["latin"] });
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "Scott Henderson Advisory Services — Bookkeeping & Fractional CFO for Small and Medium-Sized Businesses",
  description: "Bookkeeping and fractional CFO advisory for small and medium-sized businesses. Monthly books you can read, and decisions supported year-round — not just at tax time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.className} ${notoSans.variable} ${courierPrime.variable}`}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
