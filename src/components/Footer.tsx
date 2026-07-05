import { Container } from "@/components/Container";

export function Footer() {
  return (
    <Container className="flex flex-wrap items-center justify-between gap-4 !pt-0 !pb-[60px]">
      <div className="font-mono text-[11px] text-slate-soft">
        SCOTT HENDERSON ADVISORY SERVICES — VICTORIA, BC
      </div>
      <div className="font-mono text-[11px] text-slate-soft">
        © {new Date().getFullYear()}
      </div>
    </Container>
  );
}
