import { DevSvg, ProjectSvg, ProfileSvg } from "../components/nav.svgs";
import { Linkedin, X, YouT } from "../components/dev.svgs";

// Navigation
const navLinks = [
  { name: "Developers", id: "/developers", Icon: DevSvg },
  { name: "Projects", id: "/projects", Icon: ProjectSvg },
  { name: "About me", id: "/about", Icon: ProfileSvg },
];

// Dev data
const devs = [
  {
    name: "Brais Moure",
    country: "Spain",
    charge: "Freelance, Content Creator",
    img_src: "/devs/brais.jpg",
    summary:
      "I am a freelance IT entrepreneur and technology lover. I have worked in large companies in the sector such as Inditex, Indra or Altia. I spent my last 3 years, before establishing myself as a freelancer, as a Software Architect in the Logistics-Commercial area of Inditex.",
    linkedin_url: "https://www.linkedin.com/in/braismoure/",
  },
  {
    name: "Miguel Angel Duran",
    country: "Spain",
    charge: "Software Engineer, Content Creator",
    img_src: "/devs/miguel.jpg",
    summary:
      "Miguel Ángel Durán is a Content Creator about Programming and Technology as well as a Software Engineer, with more than 15 years of experience. He has a community of more than 700k followers on his social networks. His programming channel on Twitch is one of the most viewed in the world.",
    linkedin_url: "https://www.linkedin.com/in/midudev/",
  },
  {
    name: "Lucas Dalto",
    country: "Argentina",
    charge: "Software Engineer, Content Creator",
    img_src: "/devs/lucas.jpg",
    summary:
      "My name is Lucas Dalto, I'm a programmer, develper, marketer and content creator on the YouTube platform, more than 6 yeasr is the IT field, I Teach programming and channel #1 in Argentina with free boradcasting.",
    linkedin_url: "https://www.linkedin.com/in/soy-dalto/",
  },
];
const socialMedia = [
  { name: "Linkedin", icon: Linkedin },
  { name: "Twitter", icon: X },
  { name: "Youtube", icon: YouT },
];

// Projects
const projects = [
  {
    name: "Portfolio",
    description: "My personal portfolio :D.",
    tags: [
      { name: "Vite", id: "vite" },
      { name: "Tailwind", id: "tailwind" },
      { name: "ThreeJS", id: "three" },
      { name: "Framer Motion", id: "framer" },
      { name: "React Router", id: "router" },
    ],
    image: () => import("/projects/Portfolio.png"),
    source_code_link: "https://github.com/KiyotakaDev/Portfolio",
    deploy_link: "https://portfolio-virid-seven-69.vercel.app/",
  },
  {
    name: "PokeAPI",
    description:
      "API consumptio for sampling data fetched from the PokeAPI, searchable by name or character.",
    tags: [
      { name: "Vite", id: "vite" },
      { name: "Tailwind", id: "tailwind" },
      { name: "Zustand", id: "zustand" },
      { name: "React Router", id: "router" },
    ],
    image: () => import("/projects/Pokemon-API.png"),
    source_code_link: "https://github.com/KiyotakaDev/PokeApi",
    deploy_link: "https://testing-olive-alpha.vercel.app/",
  },
  {
    name: "Heisig Template",
    description: "Anki template with Japanese recognition for Kanji learning.",
    tags: [
      { name: "HTLM", id: "three" },
      { name: "CSS", id: "tailwind" },
    ],
    image: () => import("/projects/heisig.png"),
    source_code_link: "https://github.com/KiyotakaDev/Portfolio",
  },
];

// About me
const technologies = [
  {
    name: "HTML5",
    level: "Medium-Advanced",
    icon: () => import("/tech/html.png"),
  },
  {
    name: "CSS3",
    level: "Medium-Advanced",
    icon: () => import("/tech/css.png"),
  },
  {
    name: "JavaScript",
    level: "Medium-Advanced",
    icon: () => import("/tech/javascript.png"),
  },
  {
    name: "TailwindCSS",
    level: "Intermediate",
    icon: () => import("/tech/tailwindcss.png"),
  },
  {
    name: "ReactJS",
    level: "Intermediate",
    icon: () => import("/tech/reactjs.png"),
  },
  { name: "ThreeJS", level: "basic", icon: () => import("/tech/threejs.png") },
  { name: "Zustand", level: "basic", icon: () => import("/tech/zustand.png") },
  {
    name: "NodeJS",
    level: "Intermediate",
    icon: () => import("/tech/nodejs.png"),
  },
  {
    name: "ExpressJS",
    level: "Intermediate",
    icon: () => import("/tech/expressjs.png"),
  },
  { name: "MongoDB", level: "basic", icon: () => import("/tech/mongodb.png") },
  {
    name: "PostgreSQL",
    level: "basic",
    icon: () => import("/tech/postgres.png"),
  },
  { name: "Git", level: "Intermediate", icon: () => import("/tech/git.png") },
  { name: "C#", level: "basic", icon: () => import("/tech/csharp.png") },
  { name: ".NET", level: "basic", icon: () => import("/tech/net.png") },
  { name: "Flutter", level: "basic", icon: () => import("/tech/flutter.png") },
];
const experience = [
  {
    charge: "Documenter",
    company: "Claro",
    contract: "Apprenticeship Contract",
    date: "2022 - 2023",
    points: [
      "Trained by an agile group of 5 people.",
      "Read queries made in PL/SQL.",
      "Functionality testing of applications made by other teams.",
      "Application efficiency test.",
      "Documentation of previously tested applications.",
    ],
  },
];
const education = [
  {
    name: "Software Development Technician",
    place: "Servicion Nacional de Aprendizaje - SENA",
    date: "2022 - 2023",
  },
  {
    name: "Self-Taught",
    place: "Internet",
    date: "Since July 2022",
  },
];

export {
  navLinks,
  devs,
  socialMedia,
  projects,
  technologies,
  experience,
  education,
};
