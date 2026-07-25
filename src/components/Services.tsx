import { Container } from "@/components/Container";

const bookkeeping = [
  "Monthly bookkeeping and reconciliations",
  "Financial statements built to be read, not just filed",
  "GST/HST and PST filing and compliance",
  "Books built to CPA standards, ready for your tax preparer or lender, any time of year",
];

const cfoAdvisory = [
  "Cash flow forecasting and scenario planning",
  "Clear reporting built around your business",
  "Guidance on pricing, financing, and when to hire",
  "Owner compensation decisions grounded in what the business can actually support",
];

const systemsImplementation = [
  "Chart of accounts and workflows built around how your business actually runs",
  "Tailored software implementations, from credit card processing to full accounting systems",
  "Designed to minimize how much time you spend in the books",
];

export const Services = () => {
  return (
    <Container>
      <section id="services" className="py-20 border-t border-hairline dark:border-trueGray-800">
        <div className="flex justify-between items-baseline gap-6 mb-12">
          <div className="font-display font-semibold text-ink dark:text-white text-[26px]">
            Services
          </div>
          <div className="font-mono text-[11px] text-slate-soft whitespace-nowrap">
            01
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-hairline dark:bg-trueGray-800 border border-hairline dark:border-trueGray-800 rounded overflow-hidden">
          <ServiceCard title="Bookkeeping & Compliance" items={bookkeeping} />
          <ServiceCard title="Financial Systems & Software" items={systemsImplementation} />
          <ServiceCard title="Fractional CFO Advisory" items={cfoAdvisory} />
        </div>
      </section>
    </Container>
  );
};

function ServiceCard({ title, items }: Readonly<{ title: string; items: string[] }>) {
  return (
    <div className="bg-paper dark:bg-trueGray-900 p-10">
      <h3 className="font-display font-semibold text-ink dark:text-white text-[19px] mb-[18px]">
        {title}
      </h3>
      <ul>
        {items.map((item, i) => (
          <li
            key={item}
            className={`relative pl-[18px] py-[9px] text-[14.5px] text-slate dark:text-slate-soft ${
              i === 0 ? "" : "border-t border-hairline dark:border-trueGray-800"
            }`}
          >
            <span className="absolute left-0 text-slate-soft">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
