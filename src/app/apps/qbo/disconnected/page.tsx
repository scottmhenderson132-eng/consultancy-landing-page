import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Disconnected",
  robots: { index: false, follow: false },
};

export default function QboDisconnected() {
  return (
    <Container>
      <div className="pt-16 pb-16 md:pt-20 md:pb-20 max-w-[560px]">
        <h1 className="font-display font-semibold text-ink dark:text-white leading-[1.12] tracking-[-0.01em] text-[clamp(28px,4vw,40px)]">
          Disconnected
        </h1>

        <p className="mt-7 text-base leading-[1.75] text-slate dark:text-slate-soft">
          The QuickBooks Online integration no longer has access to your company.
          Stored authorization tokens for this connection have been destroyed.
        </p>

        <p className="mt-6 text-base leading-[1.75] text-slate dark:text-slate-soft">
          If you disconnected by mistake, you can authorize the connection again.
        </p>

        <div className="mt-5">
          <Link
            href="/apps/qbo/connect"
            className="font-mono text-[13px] text-slate dark:text-slate-soft border-b border-hairline pb-1 hover:text-ink hover:border-ink dark:hover:text-white transition-colors"
          >
            Reconnect
          </Link>
        </div>

        <p className="mt-10 text-base leading-[1.75] text-slate dark:text-slate-soft">
          Records already created in the course of an engagement are retained in
          line with the retention period set out in the{" "}
          <Link
            href="/legal/qbo-integration-privacy"
            className="text-ink dark:text-white border-b border-hairline hover:border-ink dark:hover:border-white transition-colors"
          >
            privacy policy
          </Link>
          .
        </p>

        <p className="mt-12 pt-9 border-t border-hairline dark:border-trueGray-800 text-base leading-[1.75] text-slate dark:text-slate-soft">
          Questions: privacy@sh-advisory.ca
        </p>
      </div>
    </Container>
  );
}
