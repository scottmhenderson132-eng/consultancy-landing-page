import { Container } from "@/components/Container";

const steps = [
  {
    num: "01",
    title: "Intro call",
    desc: "Thirty minutes, no pitch deck. We talk about where the business is today and where the gaps actually are.",
  },
  {
    num: "02",
    title: "Scoped engagement",
    desc: "A written agreement covering exactly what's included, delivered on a predictable monthly retainer — no surprise invoices.",
  },
  {
    num: "03",
    title: "Ongoing partnership",
    desc: "Monthly books delivered on schedule, plus a standing line for the questions that come up in between.",
  },
];

export const Process = () => {
  return (
    <Container>
      <section id="process" className="py-20 border-t border-hairline dark:border-trueGray-800">
        <div className="flex justify-between items-baseline gap-6 mb-12">
          <div className="font-display font-semibold text-ink dark:text-white text-[26px]">
            How it works
          </div>
          <div className="font-mono text-[11px] text-slate-soft whitespace-nowrap">
            02
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.num}>
              <div className="font-mono text-[12px] text-slate-soft mb-4">
                {step.num}
              </div>
              <h3 className="font-display font-semibold text-ink dark:text-white text-[17px] mb-2.5">
                {step.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-slate dark:text-slate-soft">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
