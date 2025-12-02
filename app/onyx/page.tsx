import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";
import ImageModal from "../components/ImageModal";
import Button from "../components/Button";

export default function Onyx() {
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
          <div className="bg-[#b948d8] relative w-full h-[220px] md:h-[413px] rounded-xl overflow-hidden">
            <Image
              src="/onyx-img.webp"
              alt=""
              className="absolute inset-0 max-w-[75%] max-h-full object-cover rounded-xl z-[1] left-1/2 translate-y-[15px] md:translate-y-0 -translate-x-1/2"
              width={1131}
              height={724}
            />
            <Image
              src="/onyx-gradient-img.png"
              alt=""
              className="absolute inset-0 max-w-full max-h-full object-cover z-[2] select-none pointer-events-none hidden md:block"
              width={560}
              height={450}
            />
          </div>
          <h1 className="text-[#b948d8] text-5xl md:text-[64px] md:pb-2 text-left mb-2.5 md:mb-0 font-bold mt-2.5">
            Onyx
          </h1>
          <div className="text-[#818181] font-normal text-sm md:text-xl flex-row justify-between w-full md:w-auto md:h-[22px] flex items-center mb-2.5">
            <p className="text-left m-0 md:m-0">
              A modern and minimalist study flashcards app
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
                "MongoDB",
                "Figma",
              ].map((skill) => (
                <Button key={skill}>{skill}</Button>
              ))}
            </div>
            <div className="flex flex-row items-center md:items-start justify-center md:justify-start">
              <Button
                href="https://github.com/andydo4/onyx-demo1"
                icon="/github.svg"
                iconAlt="Code"
              >
                Code
              </Button>
              <Button
                href="https://www.youtube.com/watch?v=6jLTUKsMUUc"
                icon="/youtube.svg"
                iconAlt="Demo"
              >
                Demo
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
                I created a full stack web-based flashcards studying app,
                combining the best features of popular flashcard study tools
                into one modernized package. I designed my app with minimalism
                and simplicity in mind, to give students a distraction free
                environment to study flashcards.
              </p>
            </div>
            <div className="font-['Instrument_Sans'] pt-0 mt-0">
              <h2 className="mt-0 text-white font-semibold mb-0 pr-20 sm:pr-0 text-[40px]">
                Problem
              </h2>
              <p className="pr-0 mt-1.25 text-base leading-[33px] text-[#818181]">
                Quizlet and Omnisets are not as versatile as Anki, but
                Anki&apos;s user interface is too outdated.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="w-full bg-[#1B1B1B] rounded-2xl flex flex-col text-center font-['Instrument_Sans']">
            <h2 className="text-[#b948d8] text-[32px] font-semibold mt-4 mb-1.25">
              key contributions
            </h2>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              designed user interface in{" "}
              <span className="font-bold">Figma</span>
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              developed front end using{" "}
              <span className="font-bold">HTML, CSS, JavaScript</span>
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              implemented RESTful API with{" "}
              <span className="font-bold">Node.js, Express, MongoDB</span>
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              secured user authentication using{" "}
              <span className="font-bold">bcrypt</span> hashing &{" "}
              <span className="font-bold">JWT</span> authentication tokens
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              added a text editor for creating flashcards using{" "}
              <span className="font-bold">Quill.js</span>
            </p>
          </ScrollAnimation>
        </div>

        <div className="w-full h-px my-6 bg-[#474747]"></div>

        <div className="flex flex-col font-['Instrument_Sans']">
          <ScrollAnimation className="w-full flex flex-col">
            <div>
              <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                Initial <span className="italic text-[#b948d8]">Research</span>
              </h2>
              <p className="text-[#818181] mt-1.25 text-base leading-[33px]">
                I started by using 3 popular flashcard tools: Quizlet, Omnisets,
                and Anki, taking note of features I like, dislike, and wish were
                available.
              </p>
            </div>

            <ScrollAnimation className="flex justify-between gap-4 md:gap-0 flex-col md:flex-row mt-6">
              <div className="flex flex-col">
                <Image
                  src="/anki.png"
                  alt=""
                  className="w-[400px] h-auto mb-2"
                  width={391}
                  height={202}
                  loading="lazy"
                />
                <h4 className="mt-1.25 text-white text-2xl font-bold mb-0">
                  Anki
                </h4>
                <p className="mt-0.5 text-[#818181] text-base leading-6">
                  Anki&apos;s interface is too outdated, and it&apos;s
                  versatility <br />
                  may overwhelm users. However, I love the spaced <br />
                  repetition algorithms.
                </p>
              </div>
              <div className="flex flex-col">
                <Image
                  src="/quizlet.webp"
                  alt=""
                  className="w-[400px] h-auto mb-2"
                  width={390}
                  height={202}
                  loading="lazy"
                />
                <h4 className="mt-1.25 text-white text-2xl font-bold mb-0">
                  Quizlet
                </h4>
                <p className="mt-0.5 text-[#818181] text-base leading-6">
                  Quizlet&apos;s interface is too cluttered, and there are{" "}
                  <br />
                  many unnecessary features.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation className="mt-8 w-full flex justify-between flex-col md:flex-row sm:gap-2.5 pb-8">
              <div className="flex flex-col justify-center">
                <h3 className="text-[#b948d8] font-bold text-3xl md:text-4xl mb-0">
                  Surveys
                </h3>
                <p className="mt-1.25 text-[#818181] text-base md:text-balance leading-[33px]">
                  I surveyed 10 students at UCF, and asked the following
                  questions:
                </p>
              </div>
              <div className="flex flex-col gap-1.75 sm:pr-0">
                {[
                  "What is your favorite flashcards app?",
                  "What do you like about it?",
                  "What do you dislike about it?",
                  "What features did you wish existed?",
                ].map((q, i) => (
                  <div
                    key={i}
                    className="flex flex-row bg-[#1b1b1b] rounded-[10px] w-full py-3 md:w-[440px] gap-0 items-center"
                  >
                    <Image
                      src={`/${i + 1}.svg`}
                      alt=""
                      width={36}
                      height={24}
                      className="pl-2.5"
                      loading="lazy"
                    />
                    <p className="text-[#474747] pl-4 text-xl font-semibold">
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
          <ScrollAnimation className="w-full flex flex-col justify-center items-center mb-5">
            <Image
              src="/onyx/onyx-survey.webp"
              alt=""
              className="w-full"
              width={6408}
              height={3748}
              loading="lazy"
            />
          </ScrollAnimation>

          <div className="w-full   h-px my-6 bg-[#474747]"></div>

          <ScrollAnimation className="w-full flex flex-col">
            <div>
              <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                Design <span className="italic text-[#b948d8]">Process</span>
              </h2>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                I wanted this project to stand out in design. I knew I
                wouldn&apos;t be able to make something as intricate as the
                popular study apps, but I could make a good UI. Listening to
                user feedback, I kept things simple and focused only on the
                essentials, cutting out any unnecessary extras.
              </p>
            </div>
            <ScrollAnimation className="mt-6 mb-6 flex justify-between items-center flex-col md:flex-row">
              <Image
                src="/onyx/onyx-texts.webp"
                alt=""
                className="w-full sm:w-[55%] h-auto bg-[#1b1b1b] px-5 pb-5 rounded-[22px]"
                width={1234}
                height={393}
                loading="lazy"
              />
              <div className="flex flex-col text-left md:text-right w-full md:w-auto">
                <h3 className="text-[#b948d8] font-bold text-3xl md:text-4xl md:text-balance mt-3 mb-0">
                  Consistent styling
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  I chose a purple and pink color <br />
                  scheme to create an aesthetic <br />
                  studying atmosphere for students.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-6 mb-6 flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-[#b948d8] font-bold text-3xl md:text-4xl mb-0">
                  Dark and light mode
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  In Figma, I designed every page in a dark and light mode.
                </p>
                <Image
                  src="/onyx/darklightmode.webp"
                  alt=""
                  className="w-full mt-6 rounded-xl"
                  width={1905}
                  height={896}
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-6 mb-6 flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-[#b948d8] font-bold text-3xl md:text-4xl mb-0">
                  Designing for all screen sizes
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  Ensuring that Onyx is compatible for all forms of devices,
                  making learning as accessible as possible.
                </p>
                <Image
                  src="/onyx/onyx-mobile.webp"
                  alt=""
                  className="w-full mt-6 rounded-xl"
                  width={1600}
                  height={1000}
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-6 mb-6">
              <div>
                <h2 className="mt-0 text-white font-semibold text-[40px] mb-0 pt-8">
                  Simplifying the studying process.
                </h2>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  Studying is hard. What makes it worse? Unnecessary features,
                  too much clutter, and absurd paywalls.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-[50px] mb-[50px] flex items-center justify-between flex-col md:flex-row">
              <Image
                src="/onyx/onyx-home.webp"
                alt=""
                className="w-full md:w-1/2 rounded-[22px]"
                width={1308}
                height={1080}
                loading="lazy"
              />
              <div className="text-right md:text-right w-full md:w-auto sm:pl-1.25">
                <h2 className="text-[#b948d8] mt-3 md:mt-0 mb-0 text-balance font-extrabold text-3xl sm:text-4xl">
                  making the home page feel like{" "}
                  <span className="italic">home.</span>
                </h2>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-[50px] mb-[50px] flex flex-col items-center justify-between md:flex-row-reverse">
              <Image
                src="/onyx/onyx-add.webp"
                alt=""
                className="w-full md:w-1/2 rounded-[22px]"
                width={1308}
                height={1080}
                loading="lazy"
              />
              <div className="text-left w-full md:w-auto">
                <h2 className="text-[#b948d8] mt-0 mb-0 font-extrabold text-[32px] text-balance sm:text-4xl">
                  technical when it matters most.
                </h2>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-[50px] mb-[50px] flex items-center justify-between flex-col md:flex-row">
              <Image
                src="/onyx/onyx-test.webp"
                alt=""
                className="w-full md:w-1/2 rounded-[22px]"
                width={1308}
                height={1080}
                loading="lazy"
              />
              <div className="text-left md:text-right w-full md:w-auto">
                <h2 className="text-[#b948d8] text-3xl md:text-4xl text-balance font-bold mt-3 md:mt-0 mb-0">
                  learn more with spaced repetition.
                </h2>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>

          <div className="w-full   h-px my-6 bg-[#474747]"></div>

          <div className="w-full flex flex-col font-['Instrument_Sans']">
            <ScrollAnimation className="w-full flex flex-col">
              <div>
                <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                  Developing <span className="italic text-[#b948d8]">Onyx</span>
                </h2>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  After designing the prototype in Figma, I coded the front end
                  using HTML and CSS. Then I set up the MongoDB local database
                  to be connected to my Node.js server using Express.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-8 w-full gap-0 mb-0">
              <h3 className="text-[#b948d8] font-bold text-3xl md:text-4xl mb-0">
                Implementing the database
              </h3>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                In MongoDB, I created 3 collections, each with their own schema
                and all connected by user IDs.
              </p>
              <Image
                src="/onyx/onyx-db-flowchart.webp"
                alt=""
                className="w-full -translate-y-[60px] sm:translate-y-0 mt-8 rounded-[22px]"
                width={2686}
                height={1694}
                loading="lazy"
              />
            </ScrollAnimation>
            <ScrollAnimation className="mt-8 w-full gap-0 mb-0 -translate-y-[120px] sm:translate-y-0">
              <h3 className="text-[#b948d8] font-bold text-3xl md:text-4xl mb-0">
                Handling user authentication
              </h3>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                I used JavaScript to validate a user input, which would then be
                sent via POST request to the MongoDB local server. The user
                input would then be checked for if an account has already been
                made, otherwise the user&apos;s new password would be hashed
                using bycrypt hashing. Upon successful user creation, the server
                generates a JWT that includes the user&apos;s ID with a 1 hour
                expiration time, which is then stored in local storage to be
                used to access the user&apos;s data such as flashcards and
                studysets.
              </p>
              <Image
                src="/onyx/onyx-user-flow.webp"
                alt=""
                className="w-full mt-8 rounded-[22px]"
                width={4212}
                height={2944}
                loading="lazy"
              />
            </ScrollAnimation>
            {/* <h2 className="text-white text-3xl mt-6 font-semibold">
              onyx is still a work in progress!
            </h2> */}
          </div>

          <div className="w-full h-px mt-6 bg-[#474747]"></div>
        </div>
      </div>
    </ImageModal>
  );
}
