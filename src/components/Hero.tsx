import { Container } from "@/components/Container";

export const Hero = () => {
  return (
    <Container>
      <div className="pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-slate dark:text-slate-soft mb-6">
          CPA · Advisory for small and medium-sized businesses
        </div>

        <h1 className="font-display font-semibold text-ink dark:text-white leading-[1.08] tracking-[-0.01em] text-[clamp(32px,5vw,54px)] max-w-[760px]">
          Get back to running your business.
        </h1>

        <p className="mt-7 text-lg leading-[1.65] text-slate dark:text-slate-soft max-w-[560px]">
          You didn&apos;t start your business to worry about managing its
          finances. With comprehensive bookkeeping, financial systems, and
          fractional CFO support, I take finances off your to-do list.
        </p>

        <div className="relative mt-9 h-px bg-hairline max-w-[560px]">
          <span className="absolute -top-[3px] left-[38%] -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-ink dark:bg-white" />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="font-mono text-[13px] bg-ink text-paper dark:bg-white dark:text-ink px-6 py-3.5 rounded hover:opacity-80 transition-opacity"
          >
            Start a conversation
          </a>
          <a
            href="#process"
            className="font-mono text-[13px] text-slate dark:text-slate-soft border-b border-hairline pb-1 hover:text-ink hover:border-ink dark:hover:text-white transition-colors"
          >
            See how it works
          </a>
        </div>
      </div>
    </Container>
  );
};
