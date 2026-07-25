import { Container } from "@/components/Container";

export const Contact = () => {
  return (
    <Container>
      <section id="contact" className="py-20 border-t border-hairline dark:border-trueGray-800">
        <div className="flex justify-between items-baseline gap-6 mb-12">
          <div className="font-display font-semibold text-ink dark:text-white text-[26px]">
            Get in touch
          </div>
          <div className="font-mono text-[11px] text-slate-soft whitespace-nowrap">
            04
          </div>
        </div>

        <div className="bg-panel dark:bg-trueGray-800 border border-hairline dark:border-trueGray-700 p-14 flex flex-wrap items-center justify-between gap-7 rounded">
          <h2 className="font-display font-semibold text-ink dark:text-white text-2xl max-w-[400px]">
            Reach out. Happy to talk through whatever&apos;s on your mind, no commitment.
          </h2>
          <a
            href="mailto:scott@sh-advisory.ca"
            className="font-mono text-[15px] text-ink dark:text-white border-b border-ink dark:border-white pb-[3px]"
          >
            scott@sh-advisory.ca
          </a>
        </div>
      </section>
    </Container>
  );
};
