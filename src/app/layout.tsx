import type { Metadata } from "next";
import { Work_Sans, Noto_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const workSans = Work_Sans({ subsets: ["latin"] });
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sh-advisory.ca"),
  title: "Scott Henderson Advisory Services: Bookkeeping & Fractional CFO for Small and Medium-Sized Businesses",
  description: "Bookkeeping and fractional CFO advisory for small and medium-sized businesses. Monthly books you can read, and reporting that supports decisions all year.",
  openGraph: {
    title: "Scott Henderson Advisory Services",
    description: "CPA advisory for small and medium-sized businesses. Bookkeeping, financial systems, and fractional CFO support.",
    url: "https://sh-advisory.ca/",
    siteName: "Scott Henderson Advisory Services",
    type: "website",
    images: [
      {
        url: "/img/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Scott Henderson Advisory Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scott Henderson Advisory Services",
    description: "CPA advisory for small and medium-sized businesses. Bookkeeping, financial systems, and fractional CFO support.",
    images: ["/img/og-image-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.className} ${notoSans.variable}`}>
        <ThemeProvider attribute="class">
          <Navbar />
          <main id="top">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
