import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";

export default function Bio() {
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
          <span className="text-[#1e4bae]">welcome </span> to my{" "}
          <span className="text-[#0f6753]">personal </span>
          <span className="text-[#f25a2c]">corner </span> of the{" "}
          <span className="text-[#b948d8]">internet</span>
        </h1>
        <p className="text-left md:text-right mt-1.5 text-base leading-[33px] text-[#818181]">
          My name is Andrew Do and I&apos;m a computer science student at the
          University of Central Florida with a focus on full-stack development,
          UX/UI design, and product design. Currently, I am a software
          engineering intern at Lockheed Martin. Previously, I interned as a
          full stack developer at Prodisphere and as a web development intern at
          Limbitless Solutions. In my free time, if I am not working on personal
          projects, I am hanging out with my friends (I love to play pool and
          watch sports!)
          <br />
          <br />
          What sets me apart is my ability to think from both a developer&apos;s
          and user&apos;s perspective. I care about building products that work
          and are intuitive to use.
        </p>
        <ScrollAnimation className="flex flex-row items-center justify-center gap-1.25 mt-5">
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
            <h2 className="mt-0 text-white font-bold text-[40px] text-balance mb-5 leading-12 md:leading-18 text-left">
              some things I really like
            </h2>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="flex flex-col md:flex-row items-center justify-between mt-[50px] mb-[50px]">
          <Image
            src="/about/bills.webp"
            alt=""
            className="w-full md:w-1/2 rounded-[22px]"
            width={400}
            height={300}
            loading="lazy"
          />
          <div className="text-left md:text-right w-full md:w-auto">
            <h2 className="text-[#1e4bae] text-4xl font-bold mt-3 mb-0">
              football
            </h2>
            <p className="text-[#818181] mt-0.5 text-balance text-base leading-[33px]">
              I have been watching NFL & college football all my life. I am a
              huge Buffalo Bills & UCF Knights fan.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="flex flex-col md:flex-row-reverse items-center justify-between mt-[50px] mb-[50px]">
          <Image
            src="/about/f1.webp"
            alt=""
            className="w-full md:w-1/2 rounded-[22px]"
            width={400}
            height={300}
            loading="lazy"
          />
          <div className="text-left w-full md:w-auto">
            <h2 className="text-[#e8002d] text-4xl font-bold mt-3 mb-0">
              formula 1
            </h2>
            <p className="text-[#818181] mt-0.5 text-balance text-base leading-[33px]">
              #ForzaFerrari
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="flex flex-col md:flex-row items-center justify-between mt-[50px] mb-[50px]">
          <Image
            src="/about/daft.webp"
            alt=""
            className="w-full md:w-1/2 rounded-[22px]"
            width={400}
            height={300}
            loading="lazy"
          />
          <div className="text-left md:text-right w-full md:w-auto">
            <h2 className="text-[#f25a2c] text-4xl font-bold mt-3 mb-0">
              edm music
            </h2>
            <p className="text-[#818181] mt-0.5 text-balance text-base leading-[33px]">
              I have been listening to EDM since I was a child. The first song I
              listened to was Bangarang by Skrillex. I recently attended EDC
              Orlando, and I'm excited to go to more festivals!
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="flex flex-col md:flex-row-reverse items-center justify-between mt-[50px] mb-[50px]">
          <Image
            src="/about/arcane.webp"
            alt=""
            className="w-full md:w-1/2 rounded-[22px]"
            width={400}
            height={300}
            loading="lazy"
          />
          <div className="text-left w-full md:w-auto">
            <h2 className="text-[#0f6753] text-4xl font-bold mt-3 mb-0">
              comic visuals
            </h2>
            <p className="text-[#818181] mt-0.5 text-base leading-[33px] text-balance">
              I am often inspired by the comic styled animation of Spiderman:
              Across the Spiderverse and the painterly + cinematic style of
              animation in Arcane.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <div className="w-full max-w-full h-px my-6 bg-[#474747]"></div>

      <ScrollAnimation className="w-full text-start font-['Instrument_Sans'] my-[30px]">
        <h1 className="text-white text-[45px] leading-tight md:text-[64px] font-bold mt-2.5 mb-0">
          Thanks for visiting!
        </h1>
      </ScrollAnimation>

      <div className="w-full max-w-full h-px mt-6 bg-[#474747]"></div>
    </div>
  );
}
