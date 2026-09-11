import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "QuickBooks Online Integration Privacy Policy",
  description:
    "How Scott Henderson Advisory Services handles information accessed through its private QuickBooks Online integration.",
};

const EFFECTIVE_DATE = "September 11, 2026";

type Block = string | string[];

const clauses: ReadonlyArray<{ heading: string; body: Block[] }> = [
  {
    heading: "1. Scope",
    body: [
      "This policy describes how Scott Henderson Advisory Services (“SHA”) handles information accessed through its QuickBooks Online integration (“the Integration”). It applies only to the Integration. SHA’s handling of personal information generally is governed by the Personal Information Protection and Electronic Documents Act (PIPEDA) and by the confidentiality obligations in the CPABC Code of Professional Conduct.",
    ],
  },
  {
    heading: "2. What the Integration accesses",
    body: [
      "Once an account holder authorizes the connection, the Integration may read and, where authorized, write the following categories of data in that QuickBooks Online company:",
      [
        "Company profile information, including legal and operating name, address, fiscal year settings, and sales tax registration details",
        "Chart of accounts, journal entries, and trial balance data",
        "Sales transactions, including invoices, estimates, sales receipts, credit memos, and payments",
        "Purchase transactions, including bills, bill payments, expenses, and purchase orders",
        "Customer and vendor records, including names, addresses, email addresses, and phone numbers",
        "Item, product, and service lists",
        "Bank and credit card account registers and reconciliation status",
        "Attachments and supporting documents linked to transactions",
        "Payroll data, where the account holder has authorized payroll scope",
      ],
      "The Integration requests only the OAuth scopes it needs. It does not access Intuit login credentials, and it never receives or stores an account holder’s Intuit username or password.",
    ],
  },
  {
    heading: "3. Why it is accessed",
    body: [
      "Solely to perform the accounting, compliance, and advisory services SHA has been engaged to provide. That includes bookkeeping and transaction recording, account reconciliation, financial statement preparation, GST, PST, and payroll compliance work, and management reporting and analysis. SHA does not use this data for advertising, profiling, or any purpose unrelated to the engagement.",
    ],
  },
  {
    heading: "4. Artificial intelligence processing",
    body: [
      "SHA uses AI language models as a working tool in the course of providing services. Accounting data retrieved through the Integration may be sent to a third-party AI provider for the purpose of carrying out the engagement, under terms and account settings that do not permit the provider to use the data to train its models. SHA reviews all AI output before it is relied upon or recorded. A professional judgment is never delegated to a model without review.",
    ],
  },
  {
    heading: "5. Disclosure",
    body: [
      "SHA does not sell, rent, or trade data accessed through the Integration. Data is disclosed only: to the account holder and persons the account holder authorizes; to service providers that host or process data on SHA’s behalf under written confidentiality obligations; and where required by law or by a regulatory authority with jurisdiction, including CPABC in the exercise of its practice inspection and investigation powers.",
    ],
  },
  {
    heading: "6. Storage and location",
    body: [
      "Accounting data is read from QuickBooks Online as needed and is not maintained as a duplicate system of record. Working copies, extracts, and OAuth tokens are stored on infrastructure controlled by SHA. Some service providers used by SHA process or store data outside Canada, in which case that data is subject to the laws of the jurisdiction where it is processed.",
    ],
  },
  {
    heading: "7. Security",
    body: [
      "All data in transit is encrypted using TLS 1.2 or higher. OAuth access and refresh tokens are stored encrypted at rest, are not committed to source control, and are accessible only to SHA. Access to systems holding client data requires multi-factor authentication. SHA is a sole practitioner, so no employee or contractor access is granted unless disclosed to the affected account holder in advance.",
    ],
  },
  {
    heading: "8. Retention and deletion",
    body: [
      "OAuth tokens are retained only while the connection is authorized and are destroyed when it is revoked. Working papers and records obtained in the course of an engagement are retained for the period required by professional and legal obligations, currently a minimum of seven years. An account holder may request deletion of data not subject to a retention obligation by writing to privacy@sh-advisory.ca.",
    ],
  },
  {
    heading: "9. Revoking access",
    body: [
      "An account holder may disconnect at any time from within QuickBooks Online (Apps, then Manage, then Disconnect) or by writing to privacy@sh-advisory.ca. On disconnection, the Integration’s access ends and its stored tokens are destroyed.",
    ],
  },
  {
    heading: "10. Breach notification",
    body: [
      "If SHA becomes aware of a breach of security safeguards involving data accessed through the Integration that creates a real risk of significant harm, SHA will notify affected account holders and the Office of the Privacy Commissioner of Canada as required by PIPEDA, without unreasonable delay.",
    ],
  },
  {
    heading: "11. Access and correction",
    body: [
      "An account holder may request access to the personal information SHA holds about it, and may request correction of inaccuracies, by writing to privacy@sh-advisory.ca.",
    ],
  },
  {
    heading: "12. Changes",
    body: [
      "SHA may update this policy. The effective date above reflects the current version.",
    ],
  },
  {
    heading: "13. Contact",
    body: [
      "Scott Henderson Advisory Services, Victoria, British Columbia, Canada. privacy@sh-advisory.ca",
    ],
  },
];

export default function QboIntegrationPrivacy() {
  return (
    <Container>
      <article className="pt-16 pb-16 md:pt-20 md:pb-20 max-w-[560px]">
        <h1 className="font-display font-semibold text-ink dark:text-white leading-[1.12] tracking-[-0.01em] text-[clamp(28px,4vw,40px)]">
          QuickBooks Online Integration Privacy Policy
        </h1>
        <p className="mt-4 text-base text-slate dark:text-slate-soft">
          Scott Henderson Advisory Services
        </p>
        <p className="mt-2 font-mono text-[11px] text-slate-soft">
          {`Effective ${EFFECTIVE_DATE}`}
        </p>

        {clauses.map((clause) => (
          <Clause key={clause.heading} heading={clause.heading} body={clause.body} />
        ))}
      </article>
    </Container>
  );
}

function Clause({ heading, body }: Readonly<{ heading: string; body: Block[] }>) {
  return (
    <section className="mt-9 pt-9 border-t border-hairline dark:border-trueGray-800">
      <h2 className="font-display font-semibold text-ink dark:text-white text-[19px]">
        {heading}
      </h2>
      {body.map((block, i) =>
        Array.isArray(block) ? (
          <ul key={i} className="mt-4">
            {block.map((item) => (
              <li
                key={item}
                className="relative pl-[18px] py-[7px] text-[14.5px] leading-[1.6] text-slate dark:text-slate-soft"
              >
                <span className="absolute left-0 text-slate-soft">·</span>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p
            key={i}
            className="mt-4 text-base leading-[1.75] text-slate dark:text-slate-soft"
          >
            {block}
          </p>
        )
      )}
    </section>
  );
}
