import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";
import ImageModal from "../components/ImageModal";
import Button from "../components/Button";

export default function Prod() {
  return (
    <ImageModal>
      <div className="flex flex-col items-center w-[90%] md:w-[845px] mx-auto">
        <Link
          href="/"
          className="mb-1.5 mt-10 flex w-full flex-row items-center h-[30px] gap-2.5 no-underline transition-transform duration-300 ease hover:scale-110"
        >
          <Image
            src="/back-arrow.svg"
            alt=""
            width={24}
            height={24}
            className="max-h-6"
          />
          <p className="font-['Instrument_Sans'] text-2xl text-[#818181]">
            back
          </p>
        </Link>

        <ScrollAnimation className="w-full text-center font-['Instrument_Sans']">
          <div className="bg-[#00A896] w-full h-[220px] md:h-[413px] rounded-xl overflow-hidden relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 max-w-[65%] max-h-full object-cover transition-transform duration-300 ease drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)] rounded-none left-1/2 translate-y-1/4 md:translate-y-1/6 -translate-x-1/2 z-[1]"
            >
              <source src="/prod/prod-hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1 className="text-[#00A896] text-5xl md:text-[64px] md:pb-2 text-left mb-2.5 md:mb-0 font-bold mt-2.5">
            Prodisphere
          </h1>
          <div className="text-[#818181] font-normal text-sm md:text-xl flex-row justify-between w-full md:w-auto md:h-[22px] flex items-center mb-2.5">
            <p className="text-left m-0 md:m-0">Sports valuation startup</p>
            <p className="m-0 md:m-0 text-left md:text-right">2025</p>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-row items-center justify-center flex-wrap md:flex-nowrap">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "React",
                "Figma",
                "Vercel",
              ].map((skill) => (
                <Button key={skill}>{skill}</Button>
              ))}
            </div>
            <div className="flex flex-row items-center justify-center">
              <Button
                href="https://prodisphere.com/"
                icon="/earth.svg"
                iconAlt="Website"
              >
                Website
              </Button>
            </div>
          </div>
          <div className="w-full h-px my-6 bg-[#474747]"></div>
        </ScrollAnimation>

        <div className="w-full flex flex-col gap-12 md:flex-row">
          <ScrollAnimation className="flex flex-col justify-start mt-0 pt-0 md:w-[1100px]">
            <div className="font-['Instrument_Sans'] pt-0 mt-0">
              <h2 className="mt-0 text-white font-semibold mb-0 pr-20 sm:pr-0 text-[40px]">
                Overview
              </h2>
              <p className="pr-0 mt-1.25 text-base leading-[33px] text-[#818181]">
                As a Full-Stack Developer Intern at Prodisphere, an early-stage
                sports NIL valuation startup, I was tasked with building the
                company&apos;s flagship marketing website entirely from the
                ground up. This project was a full-spectrum learning experience
                where I owned everything from ideation to execution.
              </p>
              <h2 className="mt-0 text-white font-semibold mb-0 pr-20 sm:pr-0 text-[40px]">
                Problem
              </h2>
              <p className="pr-0 mt-1.25 text-base leading-[33px] text-[#818181]">
                Prodisphere previously outsourced their website development, but
                the result lacked flexibility, design polish, and long-term
                maintainability. As the company&apos;s vision and branding began
                to solidify, they needed a modern, in-house solution that better
                reflected their identity; one that could evolve quickly with the
                product and be managed internally.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="w-full bg-[#1B1B1B] rounded-2xl flex flex-col text-center font-['Instrument_Sans']">
            <h2 className="text-[#00A896] text-[32px] font-semibold mt-4 mb-1.25">
              key contributions
            </h2>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              designed wireframes and mockups in{" "}
              <span className="font-bold">Figma</span>
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              conducted UX research and competitive analysis to guide user-first
              design decisions
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              collaborated closely with co-founder on video calls and{" "}
              <span className="font-bold">Jira</span> to align on vision and
              priorities
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              developed the site from scratch using{" "}
              <span className="font-bold">React, TypeScript, TailwindCSS,</span>{" "}
              and <span className="font-bold">Next.js</span>
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              deployed production build using{" "}
              <span className="font-bold">Vercel</span>
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              structured a clean file structure to make the codebase intuitive
              for future developers and easy to maintain
            </p>
          </ScrollAnimation>
        </div>

        <div className="w-full   h-px my-6 bg-[#474747]"></div>

        <div className="flex flex-col font-['Instrument_Sans']">
          <div className="w-full flex flex-col">
            <ScrollAnimation>
              <div>
                <h2 className="mt-0 text-white font-semibold text-[40px] mb-0">
                  Initial{" "}
                  <span className="italic text-[#00A896]">Research</span>
                </h2>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  My design process began with thorough initial research, where
                  I explored a wide variety of sports valuation and analytics
                  websites to gather inspiration. I focused on how these
                  platforms structured their landing pages, the language they
                  used, and how they visually communicated trust and authority.
                  With these insights, I conducted further UX research and
                  translated our findings into wireframes and high-fidelity
                  designs using Figma. This was a collaborative effort,
                  involving close work with the founder to align on the product
                  vision; however, while we had regular calls to iterate on
                  direction, I was ultimately responsible for making key design
                  and development decisions.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-6 mb-6">
              <div className="flex flex-col">
                <h3 className="text-[#00A896] font-bold text-3xl md:text-4xl mt-3 mb-0">
                  Competitive Analysis
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  I analyzed competitor websites in the sports NIL and athlete
                  valuation space, such as <strong>Hudl</strong>,{" "}
                  <strong>MOGL</strong>, and <strong>On3</strong>, to identify
                  opportunities for Prodisphere to differentiate itself.
                </p>
                <Image
                  src="/prod/on3-analysis.png"
                  alt=""
                  className="w-full rounded-xl mt-10"
                  width={5031}
                  height={2692}
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation className="mt-8 flex flex-col md:flex-row items-center">
              <div>
                <h3 className="text-[#00A896] font-bold text-3xl md:text-4xl md:text-balance mb-0">
                  Understanding user & business needs
                </h3>
                <p className="text-[#818181] mt-0.5 text-base md:text-balance leading-[33px]">
                  Through discussions with Prodisphere co-founders, we defined
                  the primary goals for the website.
                </p>
              </div>
              <div className="flex flex-col gap-1.75 mt-6">
                {[
                  "Clearly explain Prodisphere's unique NIL valuation model",
                  "Build credibility and trust with potential users (athletes, agents, brands)",
                  "Drive early interest and lead generation for the upcoming platform",
                ].map((q, i) => (
                  <div
                    key={i}
                    className="flex flex-row bg-[#1b1b1b] rounded-[10px] w-[340px] w-full md:w-auto gap-0 items-center"
                  >
                    <p className="text-[#474747] text-base font-semibold px-2.5 py-2.5">
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          <div className="w-full   h-px my-6 bg-[#474747]"></div>

          <ScrollAnimation className="w-full flex flex-col">
            <div>
              <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                Design <span className="italic text-[#00A896]">Process</span>
              </h2>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                With insights from the initial research, I moved into the design
                phase using Figma. The goal was to create an intuitive,
                professional, and engaging user experience that effectively
                communicated Prodisphere&apos;s value.
              </p>
            </div>
            <div className="mt-6">
              <div className="flex flex-col">
                <h3 className="text-[#00A896] font-bold text-3xl md:text-4xl mb-0">
                  Wireframing & prototyping
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  I began by creating low-fidelity wireframes to establish the
                  information architecture and user flow for the landing page.
                  This focused on structuring content logically, from the hero
                  section to detailed explanations of Prodisphere&apos;s
                  services and calls-to-action.
                </p>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full mt-10 rounded-[22px]"
                >
                  <source src="/prod/initial-prototype.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-center mt-2 mb-[50px] text-[#818181]">
                  Early design prototype of the Prodisphere website
                </p>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-[22px]"
                >
                  <source src="/prod/user-auth-figma.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-center mt-2 text-[#818181]">
                  Concept of user login and sign up
                </p>
              </div>
            </div>
            <ScrollAnimation className="mt-18">
              <div>
                <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                  Key design decisions
                </h2>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  Several key design decisions were made to enhance usability
                  and brand perception:
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-[50px] md:mb-[50px] flex items-center justify-between flex-col md:flex-row">
              <Image
                src="/prod/cta.JPG"
                alt=""
                className="w-full md:w-1/2 sm:mb-2 rounded-[22px]"
                width={1163}
                height={636}
                loading="lazy"
              />
              <div className="text-left md:text-right w-full md:w-auto sm:pl-1.25">
                <h2 className="text-[#00A896] md:text-balance mt-3 md:pl-10 md:mt-0 mb-0 font-extrabold text-3xl sm:text-4xl">
                  Clear Calls-to-Action
                </h2>
                <p className="text-[#818181] mt-0.5 md:text-balance text-base leading-[33px]">
                  I strategically placed CTAs to guide users towards learning
                  more or expressing interest.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-[50px] md:mb-[50px] flex flex-col items-center justify-between md:flex-row-reverse">
              <Image
                src="/prod/high-fidelity-mockup.JPG"
                alt=""
                className="w-full md:w-1/2 rounded-[22px]"
                width={1329}
                height={709}
                loading="lazy"
              />
              <div className="text-left w-full md:w-auto">
                <h2 className="text-[#00A896] mt-3 md:mt-0 mb-0 md:text-balance md:pr-10 font-extrabold text-[32px] sm:text-4xl">
                  High-fidelity mockups
                </h2>
                <p className="text-[#818181] mt-0.5 md:text-balance  mb-3 md:mb-0 text-base leading-[33px]">
                  I created high-fidelity mockups in Figma to illustrate the
                  appearance and functionality of the website&apos;s dashboard
                  and internal tools.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-[50px] md:mb-[50px] flex items-center justify-between flex-col md:flex-row">
              <Image
                src="/prod/typeface.svg"
                alt=""
                className="w-full md:w-1/2 sm:mb-2 rounded-[22px]"
                width={400}
                height={300}
                loading="lazy"
              />
              <div className="text-left md:text-right md:pl-10 w-full md:w-auto">
                <h2 className="text-[#00A896] text-3xl md:text-4xl font-bold mt-3 md:mt-0 mb-0">
                  Establishing a typographic system
                </h2>
                <p className="text-[#818181] mt-0.5 md:text-balance text-base leading-[33px]">
                  I established a typographic system to ensure brand consistency
                  and enhance readability across the platform. This involved
                  selecting primary and secondary typefaces that reflect the
                  company&apos;s modern and professional identity. I then
                  defined a clear visual hierarchy by creating a scale of
                  heading sizes, font weights, and colors.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-[50px] md:mb-[50px] flex flex-col items-center justify-between md:flex-row-reverse">
              <Image
                src="/prod/cards.JPG"
                alt=""
                className="w-full md:w-1/2 rounded-[22px]"
                width={1337}
                height={845}
                loading="lazy"
              />
              <div className="text-left w-full md:w-auto">
                <h2 className="text-[#00A896] mt-3 md:mt-0 mb-0 font-extrabold leading-tight text-[32px] sm:text-4xl">
                  Reusable card components
                </h2>
                <p className="text-[#818181] md:pr-10 md:text-balance mt-0.5 mb-3 md:mb-0 text-base leading-[33px]">
                  I developed a reusable card component to display dynamic
                  content consistently, speeding up development time and
                  ensuring efficient future updates.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-[50px] mb-[50px] flex items-center justify-between flex-col md:flex-row">
              <Image
                src="/prod/faqs.JPG"
                alt=""
                className="w-full md:w-1/2 sm:mb-2 rounded-[22px]"
                width={1006}
                height={704}
                loading="lazy"
              />
              <div className="text-left md:text-right w-full md:w-auto sm:pl-1.25">
                <h2 className="text-[#00A896] mt-3 md:mt-0 mb-0 font-extrabold text-3xl sm:text-4xl">
                  Modular FAQ component
                </h2>
                <p className="text-[#818181] mt-0.5 md:pl-10 md:text-balance text-base leading-[33px]">
                  I built a responsive accordion FAQ component to answer common
                  questions clearly and concisely, enhancing the user experience
                  by providing quick access to important information.
                </p>
              </div>
            </ScrollAnimation>
            <div className="w-full h-px mb-8 bg-[#474747]"></div>
          </ScrollAnimation>

          <ScrollAnimation className="w-full flex flex-col font-['Instrument_Sans']">
            <div>
              <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                Conclusion
              </h2>
            </div>
            <p className="text-[#818181] text-base leading-[33px]">
              My internship at Prodisphere has been a pivotal experience in my
              development journey. Leading the creation of the company&apos;s
              first marketing website from concept to launch provided me with
              immense hands-on experience in a dynamic startup environment. This
              project was my first venture into shipping a production-level
              website for a real business, which taught me the importance of not
              just technical execution, but also clear communication,
              adaptability, and understanding business goals.
              <br />
              <br />
              Working directly with the founder, translating vision into
              tangible designs in Figma, and then bringing those designs to life
              with Next.js, TypeScript, and Tailwind CSS was incredibly
              rewarding. I honed my skills in full-stack development, UX/UI
              design, and agile project management using Jira. Setting the
              technical foundation for future development was a responsibility I
              valued, and it pushed me to focus on creating scalable and
              maintainable code.
              <br />
              <br />
              <span className="font-extrabold text-[#00A896] text-[32px]">
                Establishing Prodisphere&apos;s visual identity
              </span>
              <br />
              I learned the importance of maintaining proper design principles.
              Establishing set heading sizes, defining a consistent color
              palette, and carefully selecting typefaces are not just aesthetic
              choices; they are the foundation of a scalable and maintainable
              design system. This ensures a consistent brand identity, improves
              user experience, and makes future development more efficient.
              <br />
              <br />
              <span className="font-extrabold text-[#00A896] text-[32px]">
                Creating reusable React components
              </span>
              <br />
              Since I was laying down the foundation of Prodisphere&apos;s
              website, it was important that I create reusable components
              whenever I can. Doing this allows me and future Prodisphere
              developers to efficiently update the website, saving time and
              ensuring design consistencies.
              <br />
              <br />
              <span className="font-extrabold text-[#00A896] text-[32px]">
                Utilizing Git version control
              </span>
              <br />
              Using Git for version control, especially with a branching
              strategy, was crucial. It provided a safety net to experiment with
              new features without risking the stability of the main codebase
              and streamlined the process of managing changes. Before this
              internship, I was unfamiliar with Git, and the thought of using it
              scared me. However, after merging branches multiple times,
              countless git pushes, and accidentally overwriting some of my
              code, I am much more comfortable with the software.
              <br />
              <br />
              This project solidified my passion for building user-centric web
              applications and tackling the unique challenges presented by
              early-stage ventures. I am incredibly appreciative of the
              opportunity the Prodisphere team gave me to build their platform
              from the ground up. I am eager to apply what I&apos;ve learned and
              continue to be a part of Prodisphere&apos;s journey.
            </p>
          </ScrollAnimation>

          <div className="w-full md:w-auto h-px mt-6 bg-[#474747]"></div>
        </div>
      </div>
    </ImageModal>
  );
}
