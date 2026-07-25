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

        <div className="bg-panel dark:bg-trueGray-800 border border-hairline dark:border-trueGray-700 p-8 md:p-14 flex flex-wrap items-center justify-between gap-7 rounded">
          <h2 className="font-display font-semibold text-ink dark:text-white text-2xl max-w-[400px]">
            Reach out. Happy to talk through whatever&apos;s on your mind, no commitment.
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://forms.gle/t7rwjJYN9nKuQdbq6"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] bg-ink text-paper dark:bg-white dark:text-ink px-6 py-3.5 rounded hover:opacity-80 transition-opacity"
            >
              Send a message
            </a>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0lTjtqvBpSZyx6UMeIb6H1HedAQY6F8OaYQ6hMrGsxkXsIN7pY6lZAMNfWgy1eXwERuCOBbmwu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-slate dark:text-slate-soft border-b border-hairline pb-1 hover:text-ink hover:border-ink dark:hover:text-white transition-colors"
            >
              Or skip to booking a call
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
};
