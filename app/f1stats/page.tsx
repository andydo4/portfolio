import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";
import ImageModal from "../components/ImageModal";
import Button from "../components/Button";

export default function F1Stats() {
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
          <div className="bg-[#e8002d] w-full h-[220px] md:h-[413px] rounded-xl overflow-hidden relative">
            <Image
              src="/f1stats-img.webp"
              alt=""
              className="absolute inset-0 max-w-[60%] max-h-full object-cover z-1 left-1/2 translate-y-[10px] md:translate-y-0 -translate-x-1/2"
              width={1680}
              height={1350}
            />
            <Image
              src="/f1/f1-big-gradient.png"
              alt=""
              className="absolute inset-0 max-w-full max-h-full object-cover z-3 select-none pointer-events-none hidden md:block"
              width={845}
              height={413}
            />
          </div>
          <h1 className="text-[#e8002d] text-5xl md:text-[64px] md:pb-2 text-left mb-2.5 md:mb-0 font-bold mt-2.5">
            F1Stats
          </h1>
          <div className="text-[#818181] font-normal text-sm md:text-xl flex-row justify-between w-full md:w-auto md:h-[22px] flex items-center mb-2.5">
            <p className="text-left m-0 md:m-0">
              Real time Formula 1 data website
            </p>
            <p className="m-0 md:m-0 text-left md:text-right">2025</p>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-row items-center md:items-start justify-center md:justify-start flex-wrap md:flex-nowrap">
              {[
                "JavaScript",
                "HTML",
                "CSS",
                "Node.js",
                "Express",
                "EJS",
                "Figma",
              ].map((skill) => (
                <Button key={skill}>{skill}</Button>
              ))}
            </div>
            <div className="flex flex-row items-center md:items-start justify-center md:justify-start">
              <Button
                href="https://github.com/andydo4/f1stats"
                icon="/github.svg"
                iconAlt="Code"
              >
                Code
              </Button>
              <Button
                href="https://f1statstracker.vercel.app/"
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
                I built a web-based Formula 1 statistics tracker that aggregates
                live race data, driver standings, and team results from 1950 to
                2025 into one unified platform. By sourcing data from the{" "}
                <a
                  href="https://api.jolpi.ca/ergast/f1/"
                  className="text-[#818181]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ergast API
                </a>{" "}
                and presenting it with interactive graphs, EJS templating, and
                responsive CSS, the app delivers a streamlined, mobile-optimized
                experience for exploring F1 history. <br />
                <br />
                This was a passion project of mine that allowed me to combine my
                love for Formula 1 with my programming skills. It taught me
                about API handling and optimizing performance.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="w-full bg-[#1B1B1B] rounded-2xl flex flex-col text-center font-['Instrument_Sans']">
            <h2 className="text-[#e8002d] text-[32px] font-semibold mt-4 mb-1.25">
              key contributions
            </h2>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              designed user interface in{" "}
              <span className="font-bold">Figma</span>
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              developed front end using{" "}
              <span className="font-bold">HTML, CSS, JavaScript,</span> and{" "}
              <span className="font-bold">EJS</span> templates
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              utlized <span className="font-bold">Node.js</span> and{" "}
              <span className="font-bold">Express</span> to fetch and process
              live data from <span className="font-bold">Ergast API</span>
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              optimized load times (~0.9s FCP, ~0.9s Speed Index), benchmarked
              with Lighthouse
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              boosted backend throughput by ~2% via GZIP compression, JavaScript
              bundling, & deferred loading, verified by Autocannon
            </p>
          </ScrollAnimation>
        </div>

        <div className="w-full h-px my-6 bg-[#474747]"></div>

        <div className="flex flex-col font-['Instrument_Sans']">
          <ScrollAnimation className="w-full flex flex-col">
            <div>
              <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                Design and{" "}
                <span className="italic text-[#e8002d]">Development</span>
              </h2>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                The design goal for F1Stats was to create a sleek, modern user
                interface that mirrors the high-tech, fast-paced aesthetic of
                Formula 1.
              </p>
            </div>
            <ScrollAnimation className="mt-6 mb-6 flex justify-between items-center flex-col md:flex-row">
              <Image
                src="/f1/f1-fonts.webp"
                alt=""
                className="w-full sm:w-[90%] h-auto bg-[#1b1b1b] px-5 pb-5 rounded-[22px]"
                width={1308}
                height={906}
                loading="lazy"
              />
              <div className="flex flex-col text-left md:text-right w-full md:w-auto">
                <h3 className="text-[#e8002d] font-bold text-3xl md:text-4xl md:text-balance mt-3 mb-0">
                  Choosing the right fonts
                </h3>
                <p className="text-[#818181] mt-0.5 md:text-balance text-base leading-[33px]">
                  To ensure the design felt authentic, I selected fonts that are
                  similar to the style used in official F1 branding.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-6 mb-6 flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-[#e8002d] font-bold text-3xl md:text-4xl mb-0">
                  Integrating Ergast API
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  Ergast API is a free, open-source service that offers
                  comprehensive Formula 1 statistics spanning from 1950 to 2024.
                  It provides in-depth data on driver standings, constructor
                  performance, race results, and more.
                </p>
                <Image
                  src="/f1/f1-flow.png"
                  alt=""
                  className="w-full mt-6 rounded-xl"
                  width={8736}
                  height={9858}
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-0 mb-6 flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-[#e8002d] font-bold text-3xl md:text-4xl mb-0">
                  Mobile optimization
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  Recognizing that many users would access the site on the go, I
                  prioritized a responsive, mobile-first design approach from
                  the start.
                </p>
                <Image
                  src="/f1/f1-mobile.webp"
                  alt=""
                  className="w-full mt-6 rounded-xl"
                  width={3462}
                  height={2972}
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
          </ScrollAnimation>

          <div className="w-full md:w-auto h-px mt-8 mb-2 bg-[#474747]"></div>

          <ScrollAnimation className="mb-6">
            <div>
              <h2 className="mt-0 text-white font-semibold text-[40px] mb-0 pt-8">
                Vercel Analytics
              </h2>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                After deploying F1Stats to Vercel, I shared my website on
                LinkedIn. Within 3 days, it amassed 58 visitors and 107 page
                views.
              </p>
              <Image
                src="/f1/f1-viewers.webp"
                alt=""
                className="w-full border border-[#474747] rounded-[22px] mt-6"
                width={1778}
                height={733}
                loading="lazy"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="mt-[50px] mb-[50px] flex items-center justify-between flex-col md:flex-row">
            <Image
              src="/f1/f1-devices.JPG"
              alt=""
              className="w-full md:w-1/2 sm:mb-2 rounded-[22px] border border-[#474747]"
              width={884}
              height={570}
              loading="lazy"
            />
            <div className="text-right md:text-right w-full md:w-auto sm:pl-1.25">
              <h2 className="text-[#e8002d] mt-3 md:mt-0 mb-0 font-extrabold text-3xl sm:text-4xl">
                All forms of viewing
              </h2>
              <p className="text-[#818181] mt-0.5 md:text-balance text-base leading-[33px]">
                Post-launch analytics confirmed that a majority of visitors were
                on mobile devices, reinforcing the importance of an optimized
                experience on smaller screens.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="mt-[50px] mb-[50px] flex flex-col-reverse items-center justify-between md:flex-row-reverse">
            <Image
              src="/f1/f1-os.JPG"
              alt=""
              className="w-full md:w-1/2 rounded-[22px] border border-[#474747]"
              width={883}
              height={573}
              loading="lazy"
            />
            <div className="text-left w-full md:w-auto">
              <h2 className="text-[#e8002d] mt-0 mb-0 font-extrabold text-[32px] sm:text-4xl">
                Operating systems
              </h2>
              <p className="text-[#818181] mt-0.5 mb-3 md:mb-0 text-base leading-[33px]">
                79% of viewers were on iOS devices.
              </p>
            </div>
          </ScrollAnimation>

          <div className="w-full h-px my-6 bg-[#474747]"></div>

          <ScrollAnimation className="w-full flex flex-col">
            <div>
              <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                Performance{" "}
                <span className="italic text-[#e8002d]">Optimization</span>
              </h2>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                When building F1Stats, I wanted not only a responsive user
                interface, but also a highly optimized backend to deliver data
                as quickly as possible. To achieve this, I implemented several
                performance improvements and measured their real-world impact
                through benchmarking tools.
              </p>
            </div>
            <ScrollAnimation className="mt-[50px] mb-[50px] flex items-center justify-between flex-col md:flex-row">
              <Image
                src="/f1/f1-compression.png"
                alt=""
                className="w-full md:w-1/2 rounded-[22px]"
                width={1326}
                height={786}
                loading="lazy"
              />
              <div className="text-right text-left md:text-right w-full md:w-auto">
                <h3 className="text-[#e8002d] text-3xl md:text-4xl font-bold mt-3 md:mt-0 mb-0">
                  GZIP compression
                </h3>
                <p className="text-[#818181] mt-0.5 md:text-balance text-base leading-[33px]">
                  To reduce server response size and accelerate delivery, I
                  implemented GZIP compression to my files, which minimized
                  bandwidth usage.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-6 mb-6 flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-[#e8002d] text-3xl md:text-4xl font-bold mb-0">
                  JS bundling & deferred loading
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  I bundled 2 JavaScript files using esbuild, reducing them into
                  a single, minified file, cutting down the number of server
                  requests. I also deferred non-critical JavaScript, which
                  helped avoid blocking the initial browser paint and allowed
                  the site to feel fast before all scripts finished loading.
                </p>
                <Image
                  src="/f1/f1-bundle.png"
                  alt=""
                  className="w-full mt-6 rounded-xl"
                  width={958}
                  height={520}
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-8">
              <div>
                <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                  Benchmarking Metrics
                </h2>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  I used Lighthouse to benchmark performance. Even before
                  optimization, my code was already well-structured, so the
                  scores were already strong. Still, I fine-tuned what I could.
                  After implementing GZIP compression, bundling JavaScript, and
                  deferring non-essential scripts, I achieved ~0.9s for both FCP
                  and Speed Index. The gains were minimal, but it was a
                  satisfying confirmation that the foundation I built was
                  already fast.
                </p>
                <Image
                  src="/f1/f1-optimize.JPG"
                  alt=""
                  className="w-full mt-6 rounded-xl"
                  width={1013}
                  height={723}
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
          </ScrollAnimation>

          <div className="w-full h-px my-8 bg-[#474747]"></div>

          <ScrollAnimation className="w-full flex flex-col font-['Instrument_Sans']">
            <h2 className="text-white text-2xl leading-8 font-bold">
              This project was an opportunity to combine my love for Formula 1
              with my passion for coding. I learned how to fetch and process
              real-time data from an API and how to optimize my codebase for
              smaller screens. However, the most meaningful part for me was
              getting the chance to learn more about Formula 1&apos;s history. I
              also found one of my new favorite F1 cars...
            </h2>
            <Image
              src="/f1/leyton-house.webp"
              alt="1990 Leyton House-Judd CG901"
              className="w-[85%] rounded-[22px] mx-auto my-2.5"
              width={2000}
              height={820}
              loading="lazy"
            />
            <h2 className="text-[#818181] font-bold mx-auto my-0 text-xl">
              1990 Leyton House-Judd CG901
            </h2>
          </ScrollAnimation>

          <div className="w-full md:w-auto h-px mt-6 bg-[#474747]"></div>
        </div>
      </div>
    </ImageModal>
  );
}
