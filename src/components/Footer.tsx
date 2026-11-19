import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-col gap-3 !pt-0 !pb-[60px]">
        <div className="text-[12px] font-medium tracking-[0.08em] text-slate-label dark:text-slate-soft">
          SCOTT HENDERSON ADVISORY SERVICES · SERVING CLIENTS ACROSS BRITISH COLUMBIA
        </div>
        <p className="text-[13px] leading-[1.6] text-slate dark:text-slate-soft max-w-[720px]">
          Scott Henderson Advisory Services is registered with CPABC under an
          Other Regulated Services (Non-Reviewable) licence. The practice does
          not provide audit, review, or compilation engagements, or income tax
          return preparation.
        </p>
        <div className="text-[12px] tabular-nums text-slate-label dark:text-slate-soft">
          © {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
}
