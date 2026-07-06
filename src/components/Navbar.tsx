import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Container } from "@/components/Container";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-paper/[0.92] dark:bg-trueGray-900/[0.92] backdrop-blur-sm border-b border-hairline dark:border-trueGray-800">
      <Container className="!py-5 flex items-center justify-between">
        <Link
          href="/#top"
          className="flex items-center gap-2.5 font-display font-semibold text-[16px] text-ink dark:text-white"
        >
          <span className="w-[26px] h-[26px] rounded-full border-[1.5px] border-ink dark:border-white flex items-center justify-center text-[11px] font-semibold">
            SH
          </span>
          Scott Henderson Advisory
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none">
          <li>
            <Link
              href="#services"
              className="text-sm text-slate dark:text-slate-soft hover:text-ink dark:hover:text-white transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#process"
              className="text-sm text-slate dark:text-slate-soft hover:text-ink dark:hover:text-white transition-colors"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-sm text-slate dark:text-slate-soft hover:text-ink dark:hover:text-white transition-colors"
            >
              About
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <ThemeChanger />
          <Link
            href="#contact"
            className="font-mono text-xs border border-ink dark:border-white text-ink dark:text-white px-4 py-[9px] rounded hover:bg-ink hover:text-paper dark:hover:bg-white dark:hover:text-ink transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </nav>
  );
};
