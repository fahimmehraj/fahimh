import { FaApple, FaBluetooth, FaMobileAlt, FaReact } from "react-icons/fa";
import { SiAndroid, SiArduino, SiClerk, SiOcaml, SiOpenai, SiPostgresql, SiRust, SiTensorflow } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMysql, TbBrandReactNative } from "react-icons/tb";
import { MdLock } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";

const projects = [
  {
    title: "Jukebox",
    description:
      "High-throughput Discord audio streaming server in Rust sustaining 2.4K+ concurrent WebSocket connections and 1.2K+ UDP sockets, delivering ~60K audio packets/sec with sub-5ms latency",
    href: "https://github.com/fahimmehraj/jukebox",
    technologies: [<SiRust key={1} />, <TbNetwork key={2} />],
    alt: "Rust, Tokio, WebSocket, UDP",
  },
  {
    title: "DillyDally",
    description:
      "AI-powered Pomodoro productivity system with real-time face tracking and screen monitoring that analyzes focus patterns using TensorFlow.js and generates personalized attention reports\n\nBuilt at HackPrinceton 2025",
    href: "https://github.com/DIodide/DillyDally",
    technologies: [<FaReact key={1} />, <SiTensorflow key={2} />, <SiOpenai key={3} />, <TbNetwork key={4} />],
    alt: "React, TypeScript, TensorFlow.js, Convex, OpenAI",
  },
  {
    title: "Hangry Squid",
    description:
      "Multiplayer social deduction game inspired by Hunger Games and Squid Games with state-machine-driven UI architecture and async RPC networking, supporting 16+ concurrent players with 120+ real-time messages",
    href: "https://github.com/fahimmehraj/hangry-squid",
    technologies: [<SiOcaml key={1} />, <HiUsers key={2} />, <TbNetwork key={3} />],
    alt: "OCaml, Bonsai, RPC, Multiplayer",
  },
  {
    title: "AtomHacks Website",
    description:
      "Front page for high school hackathon + fully custom dashboard for submissions that handled 150+ users during the event",
    href: "https://atomhacks.org",
    technologies: [
      <FaReact key={1} />,
      <RiNextjsFill key={2} />,
      <RiTailwindCssFill key={3} />,
      <TbBrandMysql key={4} />,
      <MdLock key={5} />,
    ],
    alt: "React with Next.js, Tailwind CSS, MySQL, NextAuth",
  },
  {
    title: "SideQuest",
    description:
      "An innovative mobile app platform built for broke college students to do work for other students as a side hustle\n\nWon 2nd at All Star Code's Technical Entrepreneurship Incubator",
    href: "https://github.com/frykher/SideQuest",
    technologies: [
      <TbBrandReactNative key={1} />,
      <FaMobileAlt key={2} />,
      <FaApple key={3} />,
      <SiAndroid key={4} />,
      <SiPostgresql key={5} />,
      <SiClerk key={6} />,
    ],
    alt: "React Native, PostgreSQL, Clerk Auth",
  },
  {
    title: "Bloomie",
    description:
      "An artificial plant built with microelectronics that teaches people of all ages how to care for plants through a sensor based feedback loop\n\nBuilt with a group at MIT's Beaverworks Summer Institute.",
    href: "https://www.youtube.com/watch?v=luvmYKZcUog",
    technologies: [
      <SiArduino key={1} />,
      <TbBrandReactNative key={2} />,
      <FaMobileAlt key={3} />,
      <FaBluetooth key={4} />,
    ],
    alt: "Arduino Platform, React Native (optional mobile app), Bluetooth",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 id="projects">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-6">
        {projects.map((project, i) => (
          <a title={project.alt} href={project.href} target="_blank" key={i}>
            <div className="flex flex-col bg-gray-200/5 h-full rounded-xl p-4 hover:cursor-pointer hover:shadow-[-4px_4px_0px_#52eaff] hover:translate-x-2 transition-all">
              <h2 className="mb-4">{project.title}</h2>
              <p className="no-underline whitespace-pre-line">{project.description}</p>
              <span className="mt-auto text-slate-400 text-xl flex gap-2">{project.technologies}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
