import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Connect QuickBooks Online",
  robots: { index: false, follow: false },
};

// Public URL of the MCP server's authorize endpoint. Inlined at build time.
const authorizeUrl = process.env.NEXT_PUBLIC_QBO_AUTHORIZE_URL;

const steps: ReadonlyArray<string> = [
  "Sign in to QuickBooks Online",
  "Select the company to connect",
  "Approve the requested access",
];

export default function QboConnect() {
  return (
    <Container>
      <div className="pt-16 pb-16 md:pt-20 md:pb-20 max-w-[560px]">
        <h1 className="font-display font-semibold text-ink dark:text-white leading-[1.12] tracking-[-0.01em] text-[clamp(28px,4vw,40px)]">
          Connect QuickBooks Online
        </h1>

        <p className="mt-7 text-base leading-[1.75] text-slate dark:text-slate-soft">
          Authorization runs through Intuit’s OAuth 2.0 flow. You will be asked
          to sign in to QuickBooks Online and approve access for the company you
          want to connect. You can revoke access at any time from QuickBooks
          Online under Apps, then Manage, then Disconnect.
        </p>

        <div className="mt-10">
          {authorizeUrl ? (
            <a
              href={authorizeUrl}
              className="inline-block font-mono text-[13px] bg-ink text-paper dark:bg-white dark:text-ink px-6 py-3.5 rounded hover:opacity-80 transition-opacity"
            >
              Continue to Intuit
            </a>
          ) : (
            <>
              <span
                aria-disabled="true"
                className="inline-block font-mono text-[13px] bg-panel dark:bg-trueGray-800 text-slate-soft border border-hairline dark:border-trueGray-700 px-6 py-3.5 rounded cursor-not-allowed select-none"
              >
                Continue to Intuit
              </span>
              <p className="mt-4 text-base leading-[1.75] text-slate dark:text-slate-soft">
                Authorization is not currently open. Contact
                privacy@sh-advisory.ca.
              </p>
            </>
          )}
        </div>

        <ol className="mt-12 border-t border-hairline dark:border-trueGray-800">
          {steps.map((step, i) => (
            <li
              key={step}
              className="grid grid-cols-[42px_1fr] gap-2 py-4 border-b border-hairline dark:border-trueGray-800"
            >
              <span className="font-mono text-[12px] text-slate-soft pt-[3px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[14.5px] leading-[1.6] text-slate dark:text-slate-soft">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          <Link
            href="/legal/qbo-integration-privacy"
            className="font-mono text-[13px] text-slate dark:text-slate-soft border-b border-hairline pb-1 hover:text-ink hover:border-ink dark:hover:text-white transition-colors"
          >
            Privacy policy
          </Link>
          <Link
            href="/legal/qbo-integration-terms"
            className="font-mono text-[13px] text-slate dark:text-slate-soft border-b border-hairline pb-1 hover:text-ink hover:border-ink dark:hover:text-white transition-colors"
          >
            Terms of use
          </Link>
        </div>
      </div>
    </Container>
  );
}
