import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "./components/ScrollAnimation";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212]">
      <div className="w-full max-w-[1200px] relative flex justify-center items-center">
        <div className="font-['Instrument_Sans'] mt-[260px] md:mt-[220px]">
          <div className="flex justify-center md:justify-start md:items-end m-0 pb-0">
            <Image
              src="/person.svg"
              alt="Person icon"
              width={70}
              height={70}
              className="hidden md:block"
            />
            <h1 className="text-white text-[52px] md:text-[96px] md:translate-y-[37px] font-bold m-0 mt-4 md:mt-0">
              Andrew Do
            </h1>
            <div className="pl-0 md:pl-[340px] absolute mt-4 md:mt-0 md:relative md:top-0 md:right-0">
              <div className="md:hidden">
                <Image
                  src="/smile.svg"
                  alt="Smile"
                  width={60}
                  height={60}
                  className="w-[70px] translate-x-[-60px] translate-y-[-130px]"
                />
                <Image
                  src="/flower.svg"
                  alt="Flower"
                  width={70}
                  height={70}
                  className="w-[95px] translate-x-[10px] translate-y-[-250px]"
                />
                <Image
                  src="/music.svg"
                  alt="Music"
                  width={50}
                  height={50}
                  className="w-[70px] translate-x-[85px] translate-y-[-270px]"
                />
              </div>
              <div className="hidden md:block">
                <Image
                  src="/smile.svg"
                  alt="Smile"
                  width={76}
                  height={76}
                  className="absolute w-[96px] translate-y-[100px] relative top-0 left-[-70px]"
                />
                <Image
                  src="/flower.svg"
                  alt="Flower"
                  width={94}
                  height={94}
                  className="absolute w-[116px] top-[20px] right-[-40px] block"
                />
                <Image
                  src="/music.svg"
                  alt="Music"
                  width={67}
                  height={67}
                  className="absolute w-[90px] relative bottom-[-30px] left-[120px]"
                />
              </div>
            </div>
          </div>
          <div>
            <h2
              className="text-[#acacac] text-[20px] text-center md:text-start leading-tight md:text-[48px] font-medium md:m-2.5 px-[35px] md:px-0 mb-5 md:mb-0"
              style={{ fontWeight: 550 }}
            >
              Computer Science student at <span className="font-bold">UCF</span>{" "}
              with a <br className="hidden md:block" />
              passion for{" "}
              <span className="text-[#1e4bae] italic">
                full-stack development
              </span>{" "}
              and <span className="text-[#0f6753] italic">UX design.</span>
            </h2>
            <div className="flex flex-row pl-0 md:pl-2.5 md:mt-3 justify-center md:justify-start">
              <div className="w-[17%] md:w-[120px] h-[9px] md:h-[15px] bg-[#31BF42]"></div>
              <div className="w-[17%] md:w-[120px] h-[9px] md:h-[15px] bg-[#0f6753]"></div>
              <div className="w-[17%] md:w-[120px] h-[9px] md:h-[15px] bg-[#1e4bae]"></div>
              <div className="w-[17%] md:w-[120px] h-[9px] md:h-[15px] bg-[#b948d8]"></div>
              <div className="w-[17%] md:w-[120px] h-[9px] md:h-[15px] bg-[#f25a2c]"></div>
            </div>
            <div className="pl-0 md:pl-2.5 justify-center md:justify-start text-xl md:text-2xl font-normal mt-0.5 flex gap-12.5 md:gap-[114px]">
              <a
                href="/2026-Andrew-Do-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#acacac] no-underline hover:text-white"
              >
                resume
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-do4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#acacac] no-underline hover:text-white"
              >
                linkedin
              </a>
              <Link
                href="/work"
                className="text-[#acacac] no-underline hover:text-white"
              >
                work
              </Link>
              <Link
                href="/bio"
                className="text-[#acacac] no-underline hover:text-white"
              >
                bio
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[60px] md:mt-[200px]">
        <ScrollAnimation className="pb-[30px] mb-[100px] md:mb-0 flex justify-center select-none pointer-events-none">
          <div className="flex gap-1 justify-center items-center text-center md:text-left md:justify-start md:items-start">
            <Image src="/arrow.svg" alt="" width={40} height={40} />
            <Image src="/arrow.svg" alt="" width={40} height={40} />
            <Image src="/arrow.svg" alt="" width={40} height={40} />
          </div>
        </ScrollAnimation>

        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col md:flex-row gap-[50px] items-center md:items-start">
            <ScrollAnimation className="flex flex-col w-[90%] md:w-full">
              <Link href="/prod" className="no-underline group">
                <div className="w-full md:w-[560px] h-[275px] md:h-[450px] overflow-hidden flex justify-center items-center bg-[#00A896]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-[85%] max-h-full object-cover transition-transform duration-300 ease group-hover:scale-105 drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
                  >
                    <source src="/prod/prod-hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="bg-[#303030] w-full md:w-[560px] h-[44px] flex flex-row items-center justify-between no-underline">
                  <h2 className="font-['Instrument_Sans'] font-bold text-2xl text-white pl-2.5">
                    Prodisphere
                  </h2>
                  <p className="font-['Instrument_Sans'] text-[#acacac] pr-2.5 no-underline">
                    Sports valuation startup
                  </p>
                </div>
              </Link>
            </ScrollAnimation>

            <ScrollAnimation className="flex flex-col w-[90%] md:w-full">
              <Link href="/recrd" className="no-underline group">
                <div className="w-full md:w-[560px] h-[275px] md:h-[450px] overflow-hidden bg-[#E7BC10] relative flex justify-center items-center">
                  <div className="relative w-[80%] h-[80%]">
                    <Image
                      src="/recrd/recrd-big-img.jpg"
                      alt=""
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-105"
                    />
                    <Image
                      src="/recrd/recrd-big-gradient.webp"
                      alt=""
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="bg-[#303030] w-full md:w-[560px] h-[44px] flex flex-row items-center justify-between no-underline">
                  <h2 className="font-['Instrument_Sans'] font-bold text-2xl text-white pl-2.5">
                    recrd
                  </h2>
                  <p className="font-['Instrument_Sans'] text-[#acacac] pr-2.5 no-underline">
                    Music ranking social media platform
                  </p>
                </div>
              </Link>
            </ScrollAnimation>
          </div>
          <div className="flex flex-col md:flex-row gap-[50px] w-full items-center md:items-start">
            <ScrollAnimation className="flex flex-col w-[90%] md:w-full">
              <Link href="/f1stats" className="no-underline group">
                <div className="w-full md:w-[560px] h-[275px] md:h-[450px] overflow-hidden bg-[#e8002d] relative flex justify-center items-center">
                  <div className="relative w-[80%] h-[80%]">
                    <Image
                      src="/f1stats-gradient-img.png"
                      alt=""
                      fill
                      className="absolute inset-0 w-full h-full object-cover opacity-15 select-none pointer-events-none"
                    />
                    <Image
                      src="/f1stats-img.webp"
                      alt=""
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="bg-[#303030] w-full md:w-[560px] h-[44px] flex flex-row items-center justify-between no-underline">
                  <h2 className="font-['Instrument_Sans'] font-bold text-2xl text-white pl-2.5">
                    F1Stats
                  </h2>
                  <p className="font-['Instrument_Sans'] text-[#acacac] pr-2.5 no-underline">
                    Real time f1 data website
                  </p>
                </div>
              </Link>
            </ScrollAnimation>
            <ScrollAnimation className="flex flex-col w-[90%] md:w-full">
              <Link href="/onyx" className="no-underline group">
                <div className="w-full md:w-[560px] h-[275px] md:h-[450px] overflow-hidden bg-[#b948d8] relative flex justify-center items-center">
                  <div className="relative w-[80%] h-[80%]">
                    <Image
                      src="/onyx-gradient-img.png"
                      alt=""
                      fill
                      className="absolute inset-0 w-full h-full object-cover translate-x-[165px] md:translate-x-[253px] z-[3] select-none pointer-events-none"
                    />
                    <Image
                      src="/onyx-img.webp"
                      alt=""
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="bg-[#303030] w-full md:w-[560px] h-[44px] flex flex-row items-center justify-between no-underline">
                  <h2 className="font-['Instrument_Sans'] font-bold text-2xl text-white pl-2.5">
                    Onyx
                  </h2>
                  <p className="font-['Instrument_Sans'] text-[#acacac] pr-2.5 no-underline">
                    Study flashcards app
                  </p>
                </div>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
