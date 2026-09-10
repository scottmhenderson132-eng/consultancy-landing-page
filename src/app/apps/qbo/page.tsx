import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "QuickBooks Online Integration",
  robots: { index: false, follow: false },
};

const status: ReadonlyArray<{ term: string; detail: string }> = [
  { term: "Connection", detail: "Managed by SHA" },
  { term: "Access", detail: "Read and write through Intuit’s published APIs" },
  { term: "Authorization", detail: "Revocable at any time from QuickBooks Online" },
];

const manageLinks: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/apps/qbo/connect", label: "Connect or reconnect" },
  { href: "/legal/qbo-integration-privacy", label: "Privacy policy" },
  { href: "/legal/qbo-integration-terms", label: "Terms of use" },
];

export default function QboApp() {
  return (
    <Container>
      <div className="pt-16 pb-16 md:pt-20 md:pb-20 max-w-[560px]">
        <h1 className="font-display font-semibold text-ink dark:text-white leading-[1.12] tracking-[-0.01em] text-[clamp(28px,4vw,40px)]">
          QuickBooks Online Integration
        </h1>

        <p className="mt-7 text-base leading-[1.75] text-slate dark:text-slate-soft">
          This integration connects a QuickBooks Online company to the accounting
          and reporting workflows operated by Scott Henderson Advisory Services.
          It is private software used by SHA and by clients with an active
          services agreement. There is no public signup.
        </p>

        <dl className="mt-10 border-t border-hairline dark:border-trueGray-800">
          {status.map((row) => (
            <div
              key={row.term}
              className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-4 border-b border-hairline dark:border-trueGray-800"
            >
              <dt className="font-mono text-[11px] tracking-[0.14em] uppercase text-slate-soft sm:pt-1">
                {row.term}
              </dt>
              <dd className="text-[14.5px] leading-[1.6] text-slate dark:text-slate-soft">
                {row.detail}
              </dd>
            </div>
          ))}
        </dl>

        <section className="mt-12">
          <h2 className="font-display font-semibold text-ink dark:text-white text-[17px]">
            Manage this connection
          </h2>
          <ul className="mt-4 flex flex-col items-start gap-3">
            {manageLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-[13px] text-slate dark:text-slate-soft border-b border-hairline pb-1 hover:text-ink hover:border-ink dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 pt-9 border-t border-hairline dark:border-trueGray-800 text-base leading-[1.75] text-slate dark:text-slate-soft">
          Questions about this integration: privacy@sh-advisory.ca
        </p>
      </div>
    </Container>
  );
}
