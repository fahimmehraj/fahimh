import { FaApple, FaBluetooth, FaGithub, FaMobileAlt, FaReact } from "react-icons/fa";
import { SiAndroid, SiArduino, SiClerk, SiGradle, SiPostgresql } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMysql, TbBrandReactNative } from "react-icons/tb";
import { MdLock } from "react-icons/md";
import { PiBracketsCurly } from "react-icons/pi";

const projects = [
  {
    title: "AtomHacks Website",
    description: "Front page for high school hackathon + fully custom dashboard for submissions that handled 150+ users during the event",
    href: "https://atomhacks.org",
    technologies: [<FaReact key={1} />, <RiNextjsFill key={2} />, <RiTailwindCssFill key={3} />, <TbBrandMysql key={4} />, <MdLock key={5} />],
    alt: "React with Next.js, Tailwind CSS, MySQL, NextAuth",
  },
  {
    title: "SideQuest",
    description: "An innovative mobile app platform built for broke college students to do work for other students as a side hustle\n\nWon 2nd at All Star Code's Technical Entrepreneurship Incubator",
    href: "https://github.com/frykher/SideQuest",
    technologies: [<TbBrandReactNative key={1} />, <FaMobileAlt key={2} />, <FaApple key={3} />, <SiAndroid key={4} />, <SiPostgresql key={5} />, <SiClerk key={6} />],
    alt: "React Native, PostgreSQL, Clerk Auth",
  },
  {
    title: "Bloomie",
    description:
      "An artificial plant built with microelectronics that teaches people of all ages how to care for plants through a sensor based feedback loop\n\nBuilt with a group at MIT's Beaverworks Summer Institute.",
    href: "https://www.youtube.com/watch?v=luvmYKZcUog",
    technologies: [<SiArduino key={1} />, <TbBrandReactNative key={2} />, <FaMobileAlt key={3} />, <FaBluetooth key={4} />],
    alt: "Arduino Platform, React Native (optional mobile app), Bluetooth",
  },
  {
    title: "JetBrains Kanagawa Theme",
    description: "A theme for JetBrains IDEs with 30k+ downloads and CI/CD pipelines",
    href: "https://github.com/fahimmehraj/jetbrains-kanagawa-theme",
    technologies: [<SiGradle key={1} />, <FaGithub key={2}/>, <PiBracketsCurly key={3} />],
    alt: "Java, Android, Python, Flask",
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
