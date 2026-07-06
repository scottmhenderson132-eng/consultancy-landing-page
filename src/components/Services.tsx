import { Container } from "@/components/Container";

const bookkeeping = [
  "Monthly bookkeeping and reconciliations",
  "Financial statements built to be read, not just filed",
  "GST/HST filing and compliance",
  "Clean books, ready for your accountant, lender, or year-end",
];

const cfoAdvisory = [
  "Cash flow forecasting and scenario planning",
  "Budget vs. actual reporting built around your business",
  "Pricing, financing, and hiring-timing decisions",
  "Owner compensation and structure planning",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline dark:bg-trueGray-800 border border-hairline dark:border-trueGray-800 rounded overflow-hidden">
          <ServiceCard title="Bookkeeping & Compliance" items={bookkeeping} />
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
