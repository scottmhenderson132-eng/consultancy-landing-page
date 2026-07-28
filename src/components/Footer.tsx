import { Container } from "@/components/Container";

export function Footer() {
  return (
    <Container className="flex flex-col gap-3 !pt-0 !pb-[60px]">
      <div className="font-mono text-[11px] text-slate-soft">
        SCOTT HENDERSON ADVISORY SERVICES · VICTORIA, BC
      </div>
      <div className="font-mono text-[11px] leading-[1.6] text-slate-soft max-w-[720px]">
        Scott Henderson Advisory Services is registered with CPABC under an
        Other Regulated Services (Non-Reviewable) licence. The practice does
        not provide audit, review, or compilation engagements, or income tax
        return preparation.
      </div>
      <div className="font-mono text-[11px] text-slate-soft">
        © {new Date().getFullYear()}
      </div>
    </Container>
  );
}
