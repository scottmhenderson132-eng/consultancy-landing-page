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
              I&apos;ve always felt it was my mission to help people. The
              hard part was bridging the gap between what people needed and
              what I could offer.
            </p>
            <p>
              I founded this practice to work directly with a select number
              of small and medium-sized businesses (SMBs). Enough to know
              the numbers well, not so many that anything slips.
            </p>
            <p>
              I previously led accounting for a growth-stage company,
              working across financial reporting, receivables, payables and
              cash management. I was molded by the operational detail that
              SMBs live in day to day.
            </p>
            <p>
              I&apos;ve seen numerous business owners struggle to stay on
              top of their finances. I&apos;ve seen what works and what
              doesn&apos;t when a business is scaling quickly. With a
              personal, tailored approach to each client, you can get back
              the time you need to run and grow the business you&apos;ve
              always wanted.
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
