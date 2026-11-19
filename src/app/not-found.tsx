import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { BOOKING_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Page not found | Scott Henderson Advisory Services",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container>
      <div className="pt-16 pb-24 md:pt-24 md:pb-32 max-w-[560px]">
        <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-slate-label dark:text-slate-soft mb-6">
          404
        </p>
        <h1 className="font-display font-semibold text-ink dark:text-white leading-[1.12] tracking-[-0.01em] text-[clamp(28px,4vw,40px)]">
          This page doesn’t reconcile.
        </h1>
        <p className="mt-7 text-base leading-[1.75] text-slate dark:text-slate-soft">
          The link may be old, or the page has moved. Everything on the site
          starts from the home page.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium bg-ink text-paper dark:bg-white dark:text-ink px-6 py-3.5 rounded hover:opacity-80 transition-opacity"
          >
            Back to the home page
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm font-medium text-slate dark:text-slate-soft border-b border-hairline pb-1 hover:text-ink hover:border-ink dark:hover:text-white transition-colors after:absolute after:-inset-x-2 after:-inset-y-3 after:content-['']"
          >
            Book a call
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </Container>
  );
}
