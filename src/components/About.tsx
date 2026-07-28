import Image from "next/image";
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
          <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
            <Image
              src="/img/scott-headshot.jpg"
              alt="Scott Henderson"
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-base leading-[1.75] text-slate dark:text-slate-soft max-w-[560px]">
            <p>
              I founded this practice to work directly with a small number
              of small and medium-sized businesses. Enough to know the
              numbers well, not so many that anything slips.
            </p>
            <p>
              Before this I led accounting for a growth-stage company,
              covering financial reporting, receivables, payables and cash
              management. That’s the operational detail SMBs live in every
              day, and it’s where most of the pain is.
            </p>
            <p>
              Most owners I’ve worked with weren’t bad at their finances.
              They were busy. The books slipped, the reporting went stale,
              and decisions got made on instinct instead of numbers. That’s
              the gap I close.
            </p>
            <p>Based in Victoria, BC, working remotely with clients across Canada.</p>
            <p className="pt-2 font-display font-semibold text-ink dark:text-white">
              Scott Henderson, CPA
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};
