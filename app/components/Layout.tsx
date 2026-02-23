"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center">
      {children}
      <footer
        className={`${
          isHomePage ? "w-full max-w-[1200px]" : "w-[90%] md:w-[845px]"
        } mt-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-2.5 md:gap-0`}
      >
        <div className="text-[#474747] text-base font-semibold">
          <Link href="/" className="hover:text-white transition-colors">
            &copy; {new Date().getFullYear()} Andrew Do
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-2.5 md:gap-10 text-center md:text-left">
          <button
            onClick={scrollToTop}
            className="text-[#474747] hover:text-white transition-colors font-['Instrument_Sans'] text-base"
          >
            back to top
          </button>
          <Link
            href="/bio"
            className="text-[#474747] hover:text-white transition-colors font-['Instrument_Sans'] text-base"
          >
            bio
          </Link>
          <Link
            href="/work"
            className="text-[#474747] hover:text-white transition-colors font-['Instrument_Sans'] text-base"
          >
            work
          </Link>
          <a
            href="https://github.com/andydo4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#474747] hover:text-white transition-colors font-['Instrument_Sans'] text-base"
          >
            github
          </a>
          <a
            href="http://www.linkedin.com/in/andrew-do4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#474747] hover:text-white transition-colors font-['Instrument_Sans'] text-base"
          >
            linkedin
          </a>
          <a
            href="/2026-Andrew-Do-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#474747] hover:text-white transition-colors font-['Instrument_Sans'] text-base"
          >
            resume
          </a>
        </div>
      </footer>
    </div>
  );
}
