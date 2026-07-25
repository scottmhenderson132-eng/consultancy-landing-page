"use client";

import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import ThemeChanger from "./DarkSwitch";
import { Container } from "@/components/Container";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-paper/[0.92] dark:bg-trueGray-900/[0.92] backdrop-blur-sm border-b border-hairline dark:border-trueGray-800"
    >
      {({ open }) => (
        <>
          <Container className="!py-5 flex items-center justify-between">
            <Link
              href="/#top"
              aria-label="Scott Henderson Advisory"
              className="flex items-center font-display font-semibold text-[16px] text-ink dark:text-white"
            >
              <span className="w-[26px] h-[26px] rounded-full border-[1.5px] border-ink dark:border-white flex items-center justify-center text-[11px] font-semibold">
                SH
              </span>
            </Link>

            <ul className="hidden md:flex items-center gap-8 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate dark:text-slate-soft hover:text-ink dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5">
              <ThemeChanger />
              <Link
                href="#contact"
                className="hidden sm:inline-block font-mono text-xs border border-ink dark:border-white text-ink dark:text-white px-4 py-[9px] rounded hover:bg-ink hover:text-paper dark:hover:bg-white dark:hover:text-ink transition-colors"
              >
                Get in touch
              </Link>
              <DisclosureButton
                aria-label="Toggle menu"
                className="md:hidden flex items-center justify-center w-8 h-8 text-ink dark:text-white"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </DisclosureButton>
            </div>
          </Container>

          <DisclosurePanel className="md:hidden border-t border-hairline dark:border-trueGray-800">
            <ul className="flex flex-col list-none px-8 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <DisclosureButton
                    as={Link}
                    href={link.href}
                    className="block py-2 text-sm text-slate dark:text-slate-soft hover:text-ink dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </DisclosureButton>
                </li>
              ))}
              <li>
                <DisclosureButton
                  as={Link}
                  href="#contact"
                  className="block py-2 text-sm text-slate dark:text-slate-soft hover:text-ink dark:hover:text-white transition-colors"
                >
                  Get in touch
                </DisclosureButton>
              </li>
            </ul>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
