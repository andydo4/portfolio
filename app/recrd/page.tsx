import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";
import ImageModal from "../components/ImageModal";
import Button from "../components/Button";
import { ArrowIcon } from "../components/ArrowIcon";

export default function Recrd() {
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
          <div className="bg-(--recrd-color) w-full h-[220px] md:h-[413px] rounded-xl overflow-hidden relative">
            <Image
              src="/recrd/recrd-big-img.jpg"
              alt=""
              className="absolute drop-shadow-lg inset-0 max-w-[60%] max-h-full object-cover z-1 left-1/2 translate-y-1/4 md:translate-y-1/6 -translate-x-1/2"
              width={1442}
              height={904}
            />
            {/* <Image
              src="/f1/f1-big-gradient.png"
              alt=""
              className="absolute inset-0 max-w-full max-h-full object-cover z-3 select-none pointer-events-none hidden md:block"
              width={845}
              height={413}
            /> */}
          </div>
          <h1 className="text-(--recrd-color) text-5xl md:text-[64px] md:pb-2 text-start mb-2.5 md:mb-0 font-bold mt-2.5">
            recrd
          </h1>
          <div className="text-[#818181] font-normal text-sm md:text-xl flex-row justify-between w-full md:w-auto md:h-[22px] flex items-center mb-2.5">
            <p className="text-left m-0 md:m-0">
              Music ranking social media platform
            </p>
            <p className="m-0 md:m-0 text-left md:text-right">2025</p>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-row items-start justify-center px-15 md:px-0 flex-wrap md:flex-nowrap">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Spotify Web API",
                "MongoDB",
                "Figma",
              ].map((skill) => (
                <Button key={skill}>{skill}</Button>
              ))}
            </div>
            <div className="flex flex-row items-start justify-center">
              <Button
                href="https://recrd.top/login"
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
                Recrd is a social platform music lovers, providing a dedicated
                space to rank, track, and share their favorite albums, inspired
                by community-driven platforms such as Letterboxd and Yelp. Users
                have the ability to curate personal lists by discovering and
                ranking from an internal database of over 14,000 titles. Users
                can connect with friends and meet others who share similar music
                tastes through following profiles, while also gaining
                perspective by viewing album popularity metrics and instantly
                comparing their personal rankings against those of their social
                network.
              </p>
              <h2 className="mt-0 text-white font-semibold mb-0 pr-20 sm:pr-0 text-[40px]">
                Problem
              </h2>
              <p className="pr-0 mt-1.25 text-base leading-[33px] text-[#818181]">
                Current digital music platforms focus primarily on consumption
                and discovery but lack a robust, dedicated social framework for
                long-term community engagement and personalized ranking.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="w-full bg-[#1B1B1B] rounded-2xl flex flex-col text-center font-['Instrument_Sans']">
            <h2 className="text-(--recrd-color) text-[32px] font-semibold mt-4 mb-1.25">
              key contributions
            </h2>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              led a 5-person team, utilizing{" "}
              <span className="font-bold">Discord</span>,{" "}
              <span className="font-bold">Jira</span>, &{" "}
              <span className="font-bold">Trello</span> to ensure efficient task
              management
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              designed a high-fidelity interactive{" "}
              <span className="font-bold">Figma</span> prototype
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              developed a web-scraping script to ingest music album data from{" "}
              <span className="font-bold">Spotify Web API</span> into{" "}
              <span className="font-bold">MongoDB</span> database
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              implemented user authentication with email verification using{" "}
              <span className="font-bold">JWT tokens</span>,{" "}
              <span className="font-bold">bcrypt</span> hashing, and{" "}
              <span className="font-bold">SendGrid</span>
            </p>
            <div className="w-[285px] sm:w-[85%] h-px bg-[#2e2e2e] mx-auto"></div>
            <p className="text-[#818181] w-[285px] sm:w-[85%] text-left m-3 mx-auto">
              coded frontend in <span className="font-bold">React</span>,{" "}
              <span className="font-bold">TypeScript</span>,{" "}
              <span className="font-bold">Tailwind CSS</span>
            </p>
          </ScrollAnimation>
        </div>

        <div className="w-full h-px my-6 bg-[#474747]"></div>

        <div className="flex flex-col font-['Instrument_Sans']">
          <ScrollAnimation className="w-full flex flex-col">
            <div>
              <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                Envisioning the{" "}
                <span className="italic text-(--recrd-color)">
                  core features
                </span>
              </h2>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                Our main objective was to create a centralized place for music
                rankings with a clean, user-friendly interface. We aimed for a
                strong sense of community, similar to a true social media
                application. We prioritized features essential for community
                building, including user-to-user following, visible ranking
                lists, and leaderboards to incentivize interaction.
              </p>
              <Image
                src="/recrd/recrd-initial-diagram.png"
                alt=""
                className="w-full mt-6 rounded-xl"
                width={6504}
                height={3530}
                loading="lazy"
              />
            </div>
            <ScrollAnimation className="mt-6 mb-6 flex flex-col">
              <h2 className="mt-0 text-(--recrd-color) font-semibold leading-tight text-3xl md:text-4xl mb-0">
                Research and planning
              </h2>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                After researching options like the Spotify API and MusicBrainz,
                we selected the Spotify Web API for its balance of data
                accessibility and ease of implementation. We chose a modern,
                scalable stack: React, TypeScript, Tailwind CSS, and MongoDB. We
                utilized Jira and Trello for task tracking and prioritization,
                and Discord for real-time team alignment and decision-making.
              </p>
            </ScrollAnimation>
            <div className="w-full h-px mb-9 mt-3 bg-[#474747]"></div>
          </ScrollAnimation>

          <ScrollAnimation className="w-full flex flex-col">
            <div>
              <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                Designing the{" "}
                <span className="italic text-(--recrd-color)">
                  user experience
                </span>
              </h2>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                Using Figma, we translated concepts into high-fidelity,
                interactive prototypes for both mobile and web. Though extensive
                mobile designs were created, we prioritized website development
                for launch due to its accessibility and simplified deployment.
              </p>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full mt-10 rounded-[22px]"
              >
                <source src="/recrd/profile-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Image
                src="/recrd/recrd-wireframe-prototype.jpg"
                alt=""
                className="w-full h-auto bg-[#1b1b1b] px-5 pb-5 my-8 rounded-[22px]"
                width={1838}
                height={746}
                loading="lazy"
              />
            </div>
            <ScrollAnimation className="mt-6 mb-6 flex justify-between items-center flex-col md:flex-row">
              <Image
                src="/recrd/recrd-listening-party.svg"
                alt=""
                className="w-full sm:w-[50%] h-auto bg-[#1b1b1b] items-center justify-center px-5 py-5 rounded-[22px]"
                width={338}
                height={200}
                loading="lazy"
              />
              <div className="flex flex-col text-left md:text-right w-full md:w-auto">
                <h3 className="text-(--recrd-color) font-bold text-3xl md:text-4xl md:text-balance mt-3 mb-0">
                  Listening party
                </h3>
                <p className="text-[#818181] mt-0.5 md:text-balance text-base leading-[33px]">
                  We envisioned live chat feeds and real-time album rankings
                  upon release, fostering an immediate, strong sense of
                  community around new music.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-6 mb-6 flex justify-between items-center flex-col md:flex-row-reverse">
              <Image
                src="/recrd/recrd-top3.svg"
                alt=""
                className="w-full sm:w-[50%] h-auto bg-[#1b1b1b] items-center justify-center px-5 py-5 rounded-[22px]"
                width={338}
                height={200}
                loading="lazy"
              />
              <div className="flex flex-col text-left w-full md:w-auto">
                <h3 className="text-(--recrd-color) font-bold text-3xl md:text-4xl md:text-balance mt-3 mb-0">
                  Top 3 albums
                </h3>
                <p className="text-[#818181] mt-0.5 md:text-balance text-base leading-[33px]">
                  Designed a profile widget allowing users to showcase their
                  three all-time favorite albums, immediately communicating
                  their profile and personality to others.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-6 mb-6 gap-4 flex justify-between items-center flex-col md:flex-row">
              <Image
                src="/recrd/recrd-leaderboard.jpg"
                alt=""
                className="w-full sm:w-[50%] h-auto bg-[#1b1b1b] items-center justify-center px-5 py-5 rounded-[22px]"
                width={1161}
                height={741}
                loading="lazy"
              />
              <div className="flex flex-col text-left md:text-right w-full md:w-auto">
                <h3 className="text-(--recrd-color) font-bold text-3xl md:text-4xl md:text-balance mt-3 mb-0">
                  Global leaderboards
                </h3>
                <p className="text-[#818181] mt-0.5 md:text-balance text-base leading-[33px]">
                  Leaderboards display top-ranked albums and top-ranked users,
                  creating an incentive for deeper engagement and encouraging
                  users to rank more albums.
                </p>
              </div>
            </ScrollAnimation>
            <div className="w-full h-px mb-9 mt-3 bg-[#474747]"></div>

            <ScrollAnimation className="mt-6 mb-6 flex flex-col">
              <div className="flex flex-col">
                <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-0">
                  Developing{" "}
                  <span className="italic text-(--recrd-color)">recrd</span>
                </h2>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  Once the prototype was finalized, we moved into full-stack
                  development, focusing on a secure and data-rich backend.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-0 mb-6 flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-(--recrd-color) font-bold text-3xl md:text-4xl mb-0">
                  Harnessing the Spotify Web API
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  We developed a dedicated JavaScript web scraping script to
                  ingest data from the Spotify Web API into our database. The
                  main challenge with the Spotify Web API is it's short-lived
                  key requirement and general API limitations made full,
                  automated library ingestion difficult for an MVP. Our solution
                  was to engineer a scraper based on a pre-defined array of
                  artist names. This provided a reliable, high-volume seed data
                  of over{" "}
                  <span className="italic font-medium">14,000 albums</span>,
                  allowing us to launch with a robust catalog while deferring
                  full automation as a future update.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-0 mb-6 flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-(--recrd-color) font-bold text-3xl md:text-4xl mb-0">
                  Establishing the MongoDB database
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  The MongoDB database is structured around three interconnected
                  schemas:
                </p>
                <div className="flex flex-col gap-1.75 mt-6">
                  {[
                    "Album: Stores unique ID and core data (e.g., name, date, artist)",
                    "User: Stores user metadata, including hashed passwords (via bcrypt), unique ID, email, and the JWT token for session management",
                    "Ranking: Tracks a specific user's ranking of an album, linking User and Album IDs alongside the 1-10 ranking score",
                  ].map((q, i) => (
                    <div
                      key={i}
                      className="flex flex-row bg-[#1b1b1b] rounded-[10px] w-full md:w-auto gap-0 items-center"
                    >
                      <p className="text-[#474747] text-base font-semibold px-2.5 py-2.5">
                        {q}
                      </p>
                    </div>
                  ))}
                </div>
                <Image
                  src="/recrd/recrd-db-diagram.svg"
                  alt=""
                  className="w-fit h-auto mt-6 rounded-xl"
                  width={2175}
                  height={1239}
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mt-0 mb-6 flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-(--recrd-color) font-bold text-3xl md:text-4xl mb-0">
                  Secure user authentication and deployment
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  We established a highly secure and functional authentication
                  system:
                </p>
                <div className="flex flex-col gap-1.75 mt-6">
                  {[
                    "Security: Passwords are hashed using bcrypt. User sessions are managed using JWT tokens",
                    "Verification: We implemented email verification and a 'forgot password' flow using SendGrid.",
                    "Deployment & HTTPS: We deployed the application on a Digital Ocean droplet and secured all traffic with HTTPS to ensure data integrity and user trust",
                  ].map((q, i) => (
                    <div
                      key={i}
                      className="flex flex-row bg-[#1b1b1b] rounded-[10px] w-full md:w-auto gap-0 items-center"
                    >
                      <p className="text-[#474747] text-base font-semibold px-2.5 py-2.5">
                        {q}
                      </p>
                    </div>
                  ))}
                </div>
                <Image
                  src="/recrd/recrd-user-flow.png"
                  alt=""
                  className="w-fit h-auto mt-6 rounded-xl"
                  width={4456}
                  height={2088}
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
          </ScrollAnimation>

          <div className="w-full md:w-auto h-px mt-8 mb-2 bg-[#474747]"></div>

          <ScrollAnimation className="mb-6">
            <div>
              <h2 className="mt-0 text-white font-semibold text-[40px] mb-0 pt-8">
                Execution
              </h2>
              <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                Upon creating a profile, users gain access to the full
                functionality of Recrd, including the ability to: rank from a
                list of 14,000+ albums, re-rank albums, view friends' and global
                album rankings, set their Top 3 Albums, and access the
                leaderboards. To date, we have secured 15+ active users and over
                150 albums ranked, validating the core concept.
              </p>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full mt-10 rounded-[22px]"
              >
                <source src="/recrd/recrd-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <ScrollAnimation className="mt-8 mb-0 flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-(--recrd-color) font-bold text-3xl md:text-4xl mb-0">
                  Future development
                </h3>
                <p className="text-[#818181] mt-0.5 text-base leading-[33px]">
                  Based on user feedback and team vision, key future updates
                  include:
                </p>
                <Image
                  src="/recrd/recrd-future-updates.png"
                  alt=""
                  className="w-fit h-auto rounded-xl"
                  width={3112}
                  height={1832}
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
          </ScrollAnimation>

          <div className="w-full h-px mb-6 bg-[#474747]"></div>

          <ScrollAnimation className="w-full flex flex-col font-['Instrument_Sans']">
            <div>
              <h2 className="mt-0 text-white font-semibold leading-tight text-[40px] mb-2">
                Conclusion
              </h2>
            </div>
            <p className="text-[#818181] text-base leading-[33px]">
              Recrd was the perfect opportunity to combine my love for music
              with my passion for coding. I simply wanted to build something
              that helps people connect and share their musical tastes. Beyond
              just building the app, I learned that taking action is way better
              than staying indecisive, and that a team with good communication
              makes everything smoother. I also earned some battle scars (and
              confidence) fighting through Git merge conflicts. We walked away
              having turned a simple concept into a tangible, working platform.
            </p>
          </ScrollAnimation>
          <div className="w-full md:w-auto h-px my-6 bg-[#474747]"></div>
          <a href="https://recrd.top/login" target="_blank" className="group">
            <div className="flex items-center font-bold text-4xl justify-between md:justify-start md:text-6xl md:gap-7 text-white">
              <h1 className="">
                Try <span className=" text-(--recrd-color)">recrd </span>
                {"  "}
                yourself!
              </h1>
              <ArrowIcon className="md:w-12 w-8 h-8 md:h-12 text-(--background-color) duration-200 transition-all bg-(--recrd-color) group-hover:scale-110 rounded-full p-2" />
            </div>
          </a>
          <div className="w-full md:w-auto h-px my-6 bg-[#474747]"></div>
        </div>
      </div>
    </ImageModal>
  );
}
