import { Container } from "@/components/Container";
import { BOOKING_URL, MESSAGE_URL } from "@/lib/links";

export const Contact = () => {
  return (
    <Container>
      <section id="contact" className="py-20 border-t border-hairline dark:border-trueGray-800">
        <div className="flex justify-between items-baseline gap-6 mb-12">
          <h2 className="font-display font-semibold text-ink dark:text-white text-[26px]">
            Get in touch
          </h2>
          <div aria-hidden="true" className="text-[12px] tabular-nums text-slate-label dark:text-slate-soft whitespace-nowrap">
            04
          </div>
        </div>

        <div className="bg-panel dark:bg-trueGray-800 border border-hairline dark:border-trueGray-700 p-8 md:p-14 flex flex-wrap items-center justify-between gap-7 rounded">
          <p className="font-display font-semibold text-ink dark:text-white text-2xl max-w-[400px]">
            Reach out. Thirty minutes on where your books and reporting stand, no commitment.
          </p>
          <div className="flex flex-wrap items-center gap-6">
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
              href={MESSAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm font-medium text-slate dark:text-trueGray-300 border-b border-hairline pb-1 hover:text-ink hover:border-ink dark:hover:text-white transition-colors after:absolute after:-inset-x-2 after:-inset-y-3 after:content-['']"
            >
              Send a message
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
};
