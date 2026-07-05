import { Container } from "@/components/Container";

export const About = () => {
  return (
    <Container>
      <section id="about" className="py-20 border-t border-hairline dark:border-trueGray-800">
        <div className="flex justify-between items-baseline gap-6 mb-12">
          <div className="font-display font-semibold text-ink dark:text-white text-[26px]">
            About
          </div>
          <div className="font-mono text-[11px] text-slate-soft whitespace-nowrap">
            03
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-11 items-start">
          <div className="w-[120px] h-[120px] rounded-full border-[1.5px] border-ink dark:border-white flex items-center justify-center font-display font-semibold text-ink dark:text-white text-[32px]">
            SH
          </div>

          <div className="space-y-4 text-base leading-[1.75] text-slate dark:text-slate-soft max-w-[560px]">
            <p>
              <strong className="font-semibold text-ink dark:text-white">
                Scott Henderson, CPA
              </strong>{" "}
              founded this practice to work directly with a small number of
              owner-managed businesses — enough to know the numbers well, not
              so many that anything slips.
            </p>
            <p>
              Before starting the practice, Scott led accounting for a
              growth-stage company, working across financial reporting, tax,
              and the operational detail that owner-managed businesses live in
              day to day.
            </p>
            <p>Based in Victoria, BC, working remotely with clients across Canada.</p>
          </div>
        </div>
      </section>
    </Container>
  );
};
