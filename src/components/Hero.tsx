import { Container } from "@/components/Container";
import { BOOKING_URL } from "@/lib/links";

export const Hero = () => {
  return (
    <Container>
      <div className="pt-16 pb-16 md:pt-20 md:pb-20">
        <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-slate dark:text-slate-soft mb-6">
          CPA · Advisory for small and medium-sized businesses
        </p>

        <h1 className="font-display font-semibold text-ink dark:text-white leading-[1.08] tracking-[-0.01em] text-[clamp(32px,5vw,54px)] max-w-[760px]">
          Get back to running your business.
        </h1>

        <p className="mt-7 text-lg leading-[1.65] text-slate dark:text-slate-soft max-w-[560px]">
          You didn’t start your business to worry about managing its
          finances. I handle the monthly books, the systems behind them, and
          the reporting you need to make decisions.
        </p>

        <div aria-hidden="true" className="relative mt-9 h-px bg-hairline dark:bg-trueGray-800 max-w-[560px]">
          <span className="absolute -top-[3px] left-[38%] -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-ink dark:bg-white" />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-ink text-paper dark:bg-white dark:text-ink px-6 py-3.5 rounded hover:opacity-80 transition-opacity"
          >
            Book a 30-minute call
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="#process"
            className="relative text-sm font-medium text-slate dark:text-slate-soft border-b border-hairline pb-1 hover:text-ink hover:border-ink dark:hover:text-white transition-colors after:absolute after:-inset-x-2 after:-inset-y-3 after:content-['']"
          >
            See how it works
          </a>
        </div>
      </div>
    </Container>
  );
};
