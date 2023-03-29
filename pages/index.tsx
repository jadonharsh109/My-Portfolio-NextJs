import Head from "next/head";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import mello from "../public/undraw_mello_otq1.svg";
import useDownloader from "react-use-downloader";

export default function Home() {
  const { download } = useDownloader();

  const fileUrl = "cv.pdf";
  const filename = "Harsh-Resume.pdf";
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
      <main className="bg-white px-8">
        <section className=" min-h-screen">
          <nav className=" mb-8 py-10 flex justify-between">
            <h1 className="text-2xl font-burtons">Harsh</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
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
          <div className="text-left p-5">
            <h2 className="text-teal-400 py-2 font-medium text-4xl">
              Harshvardhan Singh Jadon
            </h2>
            <h3 className="text-2xl py-1 flex flex-col">
              <span>Front-End Dev</span> <span>DevOps</span>{" "}
              <span>Cloud Services</span>
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Namaste 🙏, Welcome to my portfolio, I'm Harshvardhan Singh jadon
              from Gwalior, Madhya Pradesh.
            </p>
          </div>
          <div className="text-4xl text-gray-700 flex justify-center gap-8">
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
        <section>
          <div>
            <h2 className="text-2xl text-center py-3">More About Me</h2>
            <p className="text-center leading-7">
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
      </main>
    </>
  );
}
