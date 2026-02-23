import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";

export default function Work() {
  return (
    <div className="flex flex-col items-center w-[90%] md:w-[845px] mx-auto">
      <Link
        href="/"
        className="mt-10 flex w-full flex-row items-center h-[30px] gap-2.5 no-underline transition-transform duration-300 ease hover:scale-110"
      >
        <Image
          src="/back-arrow.svg"
          alt=""
          width={24}
          height={24}
          className="max-h-6"
        />
        <p className="font-['Instrument_Sans'] text-2xl text-[#818181]">back</p>
      </Link>

      <ScrollAnimation className="w-full text-center font-['Instrument_Sans']">
        <h1 className="text-left text-white text-[45px] md:text-[64px] font-bold leading-12 md:leading-18 mb-0">
          my <span className="text-(--lime-color)">work </span>{" "}
          <span className="text-[#b948d8]">experience</span>
        </h1>

        <ScrollAnimation className="flex flex-row items-center w-full justify-between md:justify-end gap-1.25 mt-5">
          <a
            href="/2026-Andrew-Do-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-1.75 m-1.25 text-white text-xs font-medium w-15 h-7 px-2.5 py-1.25 rounded-[5px] transition-transform duration-300 ease hover:scale-110"
            style={{ background: "var(--lime-color)" }}
          >
            resume
          </a>
          <a
            href="http://www.linkedin.com/in/andrew-do4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-1.75 m-1.25 text-white text-xs font-medium w-15 h-7 px-2.5 py-1.25 rounded-[5px] transition-transform duration-300 ease hover:scale-110"
            style={{ background: "var(--green-color)" }}
          >
            linkedin
          </a>
          <a
            href="/work"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-1.75 m-1.25 text-white text-xs font-medium w-15 h-7 px-2.5 py-1.25 rounded-[5px] transition-transform duration-300 ease hover:scale-110"
            style={{ background: "var(--blue-color)" }}
          >
            work
          </a>
          <a
            href="https://github.com/andydo4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-1.75 m-1.25 text-white text-xs font-medium w-15 h-7 px-2.5 py-1.25 rounded-[5px] transition-transform duration-300 ease hover:scale-110"
            style={{ background: "var(--orange-color)" }}
          >
            github
          </a>
          <a
            href="mailto:andrewhuudo@gmail.com"
            className="flex flex-row items-center justify-center gap-1.75 m-1.25 text-white text-xs font-medium w-15 h-7 px-2.5 py-1.25 rounded-[5px] transition-transform duration-300 ease hover:scale-110"
            style={{ background: "var(--pink-color)" }}
          >
            email
          </a>
        </ScrollAnimation>
      </ScrollAnimation>

      <div className="w-full max-w-full h-px my-6 bg-[#474747]"></div>

      <div className="w-full font-['Instrument_Sans']">
        <ScrollAnimation>
          <div>
            <p className="text-[#818181] font-semibold">Incoming Summer 2026</p>
            <div className="flex gap-2 items-center">
              <h2 className="mt-0 text-[#6400e7] font-bold text-[40px] text-left">
                NBCUniversal
              </h2>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="flex flex-col md:flex-row items-center justify-between mb-[50px]">
          <ul className="list-disc text-[#818181] text-base mt-3 mb-0 pl-6">
            <li>NBC News Digital - Consumer Web</li>
          </ul>
        </ScrollAnimation>
        <ScrollAnimation>
          <div>
            <p className="text-[#818181] font-semibold">July 2025 - Present</p>
            <div className="flex gap-2 items-center">
              <h2 className="mt-0 text-white font-bold text-[40px] text-left">
                Lockheed Martin
              </h2>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="flex flex-col md:flex-row items-center justify-between mb-[50px]">
          <ul className="list-disc text-[#818181] text-base mt-3 mb-0 pl-6">
            <li>
              Rebuilt a legacy WordPress internal hub website using Svelte,
              TypeScript, and Tailwind CSS
            </li>
            <li>
              Improved load times from ∼ 3 seconds to near instant using a
              single page load architecture
            </li>
            <li>
              Established a CI/CD pipeline on GitLab for automated testing and
              integrated Matomo web analytics
            </li>
            <li>
              Engineered a custom OAuth2 Single-Sign-On (SSO) and implemented
              role-based access control (RBAC)
            </li>
            <li>
              Secured local and staging environments by setting up end-to-end
              encryption using HTTPS via mkcert
            </li>
            <li>
              Drove user experience (UX) improvements by conducting employee
              interviews and feedback sessions
            </li>
            <li>
              Developing a Content Management System (CMS) by writing a dynamic,
              array-driven TypeScript architecture
            </li>
          </ul>
        </ScrollAnimation>

        <ScrollAnimation>
          <div>
            <p className="text-[#818181] font-semibold">
              March 2025 - September 2025
            </p>
            <div className="flex gap-2 items-center">
              <h2 className="mt-0 text-(--prod-color) font-bold text-[40px] text-left">
                Prodisphere
              </h2>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="flex flex-col md:flex-row items-center justify-between mb-[50px]">
          <ul className="list-disc text-[#818181] text-base mt-3 mb-0 pl-6">
            <li>
              Independently built{" "}
              <a
                href="https://www.prodisphere.com/"
                className="font-semibold underline underline-offset-2"
              >
                prodisphere.com
              </a>{" "}
              (200+ users) from scratch for an early-stage startup, adhering to
              advisors’ vision and setting the long-term technical foundation
              for future developers to work upon
            </li>
            <li>
              Conducted UX research to design UX/UI in Figma and establish
              design standards
            </li>
            <li>
              Built scalable, reusable components and pages in Next.js, React,
              TypeScript, and Tailwind CSS
            </li>
            <li>
              Collaborated with leadership in an agile environment leveraging
              Jira to manage sprints and track progress
            </li>
          </ul>
        </ScrollAnimation>

        <ScrollAnimation>
          <div>
            <p className="text-[#818181] font-semibold">May 2025 - July 2025</p>
            <div className="flex gap-2 items-center">
              <h2 className="mt-0 text-[#10A6D8] font-bold leading-12 text-[36px] md:text-[40px] text-left">
                Limbitless Solutions
              </h2>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="flex flex-col md:flex-row items-center justify-between">
          <ul className="list-disc text-[#818181] text-base mt-3 mb-0 pl-6">
            <li>
              Designed and developed a personal portfolio in HTML, CSS, and
              Firebase
            </li>
            <li>
              Created a high-fidelity Figma mockup for the “Year in Review 2025”
              page
            </li>
            <li>
              Implemented an interactive timeline feature based on a Figma
              design started by previous interns
            </li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className="w-full max-w-full h-px mt-6 bg-[#474747]"></div>
    </div>
  );
}
