import Head from "next/head";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import mello from "../public/undraw_mello_otq1.svg";
import useDownloader from "react-use-downloader";
import coding from "../public/undraw-programming.svg";
import cloud from "../public/undraw-cloud.svg";
import website from "../public/undraw-website.svg";
import { useState } from "react";

export default function Home() {
  const { download } = useDownloader();

  const fileUrl = "cv.pdf";
  const filename = "Harsh-Resume.pdf";

  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>Harsh Portfolio</title>
        <meta
          name="description"
          content="Namaste 🙏, Welcome to my portfolio, I'm Harshvardhan Singh jadon from Gwalior, Madhya Pradesh. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={darkMode ? "px-8" : "bg-white px-8 text-black"}>
        <section className=" min-h-screen">
          <nav className=" mb-8 py-8 flex justify-between">
            <h1 className="text-2xl font-burtons">Harsh</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => {
                    if (darkMode) {
                      setDarkMode(false);
                    } else {
                      setDarkMode(true);
                    }
                  }}
                />
              </li>
              <li>
                <button
                  onClick={() => download(fileUrl, filename)}
                  className="bg-gradient-to-r from-cyan-300 to-teal-500 text-white px-4 py-2 rounded-md ml-4"
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-left p-4">
            <h2 className="text-teal-400 py-2 font-medium text-4xl">
              Harshvardhan Singh Jadon
            </h2>
            <h3 className="text-2xl py-1 flex flex-col">
              <span>Front-End Dev</span> <span>DevOps</span>{" "}
              <span>Cloud Services</span>
            </h3>
            <p
              className={
                darkMode
                  ? "text-md py-5 leading-8 text-gray-300"
                  : "text-md py-5 leading-8 text-gray-800"
              }
            >
              Namaste 🙏, Welcome to my portfolio, I'm Harshvardhan Singh jadon
              from Gwalior, Madhya Pradesh.
            </p>
          </div>
          <div
            className={
              darkMode
                ? "text-4xl text-gray-200 flex justify-center gap-8"
                : "text-4xl text-gray-700 flex justify-center gap-8"
            }
          >
            <a href="https://www.linkedin.com/in/jadonharsh/" target="blank">
              <AiFillLinkedin className="cursor-pointer" />
            </a>
            <a href="https://github.com/jadonharsh109" target="blank">
              <AiFillGithub className="cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/harshhhhhhh_____/"
              target="blank"
            >
              <AiFillInstagram className="cursor-pointer" />
            </a>
          </div>
          <div className="relative p-10 w-80 h-80 mx-auto ">
            <Image src={mello} alt="Wave" className="" />
          </div>
        </section>
        <section className="p-4">
          <div>
            <h2 className="text-2xl text-center py-3">More About Me</h2>
            <p
              className={
                darkMode
                  ? "leading-7 text-center text-gray-300"
                  : "leading-7 text-center"
              }
            >
              I am an <span className="text-teal-600 font-bold">Analyst</span>{" "}
              by profession in{" "}
              <span className="text-teal-600 font-bold">@HCLTech</span> managing
              hybrid{" "}
              <span className="text-teal-600 font-bold">Active Directory</span>,
              Users & computers, DNS records, group policy, and maintenance of
              Domain Controllers. I have been passionate about web development
              (Front-End) and self-learned{" "}
              <span className="text-teal-600 font-bold">HTML5</span>,{" "}
              <span className="text-teal-600 font-bold">CSS3</span>, and{" "}
              <span className="text-teal-600 font-bold">ReactJS</span>,{" "}
              <span className="text-teal-600 font-bold">NextJS</span>,{" "}
              <span className="text-teal-600 font-bold">Tailwind CSS</span>.
            </p>
          </div>
        </section>
        <section className="py-4">
          <div className="flex gap-5 flex-wrap">
            <div className="p-5 shadow-xl">
              <Image src={website} height={400} width={400} alt="website" />
              <h3 className="text-center font-bold py-5 text-xl">
                Website Development
              </h3>
              <p
                className={
                  darkMode
                    ? "text-md py-5 leading-8 text-gray-300 text-center"
                    : "text-md py-5 leading-8 text-center text-gray-800"
                }
              >
                I have a strong interest in front-end (front-end) web
                development and have self-taught HTML5, CSS3, and React.js. I
                can create various types of websites on different platforms.
              </p>
            </div>

            <div className="p-5 shadow-xl">
              <Image src={cloud} height={400} width={400} alt="cloud" />
              <h3 className="text-center font-bold py-5 text-xl">
                Cloud Computing Services
              </h3>
              <p
                className={
                  darkMode
                    ? "text-md py-5 leading-8 text-gray-300 text-center"
                    : "text-md py-5 leading-8 text-center text-gray-800"
                }
              >
                I have experience working on cloud computing services with
                Microsoft Azure and Amazon Web Services and am highly interested
                in it.
              </p>
            </div>

            <div className="p-5 boshadow-xl ">
              <Image src={coding} height={400} width={400} alt="coding" />
              <h3 className="text-center font-bold py-5 text-xl">
                DevOps Automation
              </h3>
              <p
                className={
                  darkMode
                    ? "text-md py-5 leading-8 text-gray-300 text-center"
                    : "text-md py-5 leading-8 text-center text-gray-800"
                }
              >
                I'm currently studying about DevOps Architecture and the
                numerous automation tools it includes for CI/CD Pipeline,
                Containerization, Orchestration, and various cloud services.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
