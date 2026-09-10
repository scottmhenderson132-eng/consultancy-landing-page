import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "QuickBooks Online Integration Terms of Use",
  description:
    "Terms of use for the private QuickBooks Online integration operated by Scott Henderson Advisory Services.",
};

const EFFECTIVE_DATE = "September 10, 2026";

type Block = string | string[];

const clauses: ReadonlyArray<{ heading: string; body: Block[] }> = [
  {
    heading: "1. The software",
    body: [
      "These terms govern use of the QuickBooks Online integration software (“the Integration”) operated by Scott Henderson Advisory Services (“SHA”, “we”, “us”), a sole proprietorship practising public accounting in British Columbia, Canada. The Integration connects to QuickBooks Online through Intuit’s published APIs and allows SHA to read and record accounting data on behalf of the account holder.",
    ],
  },
  {
    heading: "2. Who may use it",
    body: [
      "The Integration is private software. It is not offered to the general public and is not available for download, purchase, or self-service signup. Access is limited to SHA and to businesses that have an active written services agreement with SHA and have expressly authorized the connection to their QuickBooks Online company.",
    ],
  },
  {
    heading: "3. Licence",
    body: [
      "Subject to these terms, SHA grants an authorized user a non-exclusive, non-transferable, revocable licence to use the Integration solely in connection with services SHA provides to that user. No other rights are granted. The user may not copy, redistribute, sublicense, resell, reverse engineer, or create derivative works from the Integration.",
    ],
  },
  {
    heading: "4. Authorization and connection",
    body: [
      "The Integration accesses a QuickBooks Online company only after the account holder completes Intuit’s OAuth 2.0 authorization flow and grants consent. The account holder may revoke that consent at any time, either from within QuickBooks Online (Apps, then Manage, then Disconnect) or by notifying SHA in writing. Revocation terminates the Integration’s access immediately.",
    ],
  },
  {
    heading: "5. Scope of services",
    body: [
      "The Integration is a tool. It does not itself constitute professional services. Professional services provided by SHA are governed by the separate written services agreement between SHA and the client, which prevails over these terms on any point of conflict, including scope, fees, confidentiality, and liability. SHA holds a CPABC Other Regulated Services (Non-Reviewable) licence. Services outside that licence, including income tax return preparation and filing and compilation, review, and audit engagements, are not provided by SHA and are not performed through the Integration.",
    ],
  },
  {
    heading: "6. Account holder responsibilities",
    body: [
      "The account holder is responsible for the accuracy and completeness of the records in its QuickBooks Online company, for maintaining its own Intuit credentials, and for promptly notifying SHA of any change in authorization. The account holder retains ownership of its accounting data at all times.",
    ],
  },
  {
    heading: "7. Availability",
    body: [
      "The Integration is provided on an as-is and as-available basis. It depends on Intuit’s APIs and on third-party infrastructure, and it may be unavailable, interrupted, or changed without notice. SHA does not warrant uninterrupted or error-free operation.",
    ],
  },
  {
    heading: "8. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, SHA is not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, or data, arising from use of the Integration. Nothing in these terms limits liability that cannot be limited under applicable law or under the CPABC Code of Professional Conduct. Liability for professional services is governed by the services agreement.",
    ],
  },
  {
    heading: "9. Intuit",
    body: [
      "Intuit and QuickBooks are trademarks of Intuit Inc. SHA is not affiliated with, endorsed by, or sponsored by Intuit. Use of QuickBooks Online is governed by the account holder’s own agreement with Intuit.",
    ],
  },
  {
    heading: "10. Changes",
    body: [
      "SHA may update these terms. The effective date above reflects the current version. Material changes affecting an authorized user will be communicated to that user directly.",
    ],
  },
  {
    heading: "11. Governing law",
    body: [
      "These terms are governed by the laws of British Columbia and the federal laws of Canada applicable in British Columbia.",
    ],
  },
  {
    heading: "12. Contact",
    body: [
      "Scott Henderson Advisory Services, Victoria, British Columbia, Canada. privacy@sh-advisory.ca",
    ],
  },
];

export default function QboIntegrationTerms() {
  return (
    <Container>
      <article className="pt-16 pb-16 md:pt-20 md:pb-20 max-w-[560px]">
        <h1 className="font-display font-semibold text-ink dark:text-white leading-[1.12] tracking-[-0.01em] text-[clamp(28px,4vw,40px)]">
          QuickBooks Online Integration Terms of Use
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
