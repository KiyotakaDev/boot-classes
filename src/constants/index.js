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
    linkedin_url: "https://www.linkedin.com/in/braismoure/"
  },
  {
    name: "Miguel Angel Duran",
    country: "Spain",
    charge: "Software Engineer, Content Creator",
    img_src: "/devs/miguel.jpg",
    summary:
      "Miguel Ángel Durán is a Content Creator about Programming and Technology as well as a Software Engineer, with more than 15 years of experience. He has a community of more than 700k followers on his social networks. His programming channel on Twitch is one of the most viewed in the world.",
      linkedin_url: "https://www.linkedin.com/in/midudev/"
    },
    {
      name: "Lucas Dalto",
      country: "Argentina",
      charge: "Software Engineer, Content Creator",
      img_src: "/devs/lucas.jpg",
      summary:
      "My name is Lucas Dalto, I'm a programmer, develper, marketer and content creator on the YouTube platform, more than 6 yeasr is the IT field, I Teach programming and channel #1 in Argentina with free boradcasting.",
      linkedin_url: "https://www.linkedin.com/in/soy-dalto/"
    },
  ];
  const socialMedia = [
    { name: "Linkedin", icon: Linkedin },
    { name: "Twitter", icon: X },
    { name: "Youtube", icon: YouT },
];

// Projects
const colors = {
  vite: "from-white via-blue-500 to-blue-700",
  tailwind: "rom-white via-neon to-sky-500",
  zustand: "from-white via-orange-500 to-amber-700",
  router: "from-white via-emerald-500 to-green-700",
  three: "from-white via-pink-500 to-red-700",
  framer: "",
};
const projects = [
  {
    name: "Portfolio",
    description: "My personal portfolio.",
    tags: [
      { name: "Vite", color: colors.vite },
      { name: "Tailwind", color: colors.tailwind },
      { name: "ThreeJS", color: colors.three },
      { name: "Framer Motion", color: colors.framer },
      { name: "React Router", color: colors.router },
    ],
    image: () => import("/projects/Portfolio.png"),
    source_code_link: "https://github.com/KiyotakaDev/Portfolio",
    deploy_link: "https://portfolio-virid-seven-69.vercel.app/",
  },
  {
    name: "PokeAPI",
    description:
      "API consumptio for sampling data fetched from the PokeAPI, filtered by type, and searchable by name or character.",
    tags: [
      { name: "Vite", color: colors.vite },
      { name: "Tailwind", color: colors.tailwind },
      { name: "Zustand", color: colors.zustand },
      { name: "React Router", color: colors.router },
    ],
    image: () => import("/projects/Pokemon-API.png"),
    source_code_link: "https://github.com/KiyotakaDev/PokeApi",
    deploy_link: "https://testing-olive-alpha.vercel.app/",
  },
];

// About me
const technologies = [
  { name: "HTML5", icon: () => import("/tech/html.png") },
  { name: "CSS3", icon: () => import("/tech/css.png") },
  { name: "JavaScript", icon: () => import("/tech/javascript.png") },
  { name: "TailwindCSS", icon: () => import("/tech/tailwindcss.png") },
  { name: "ReactJS", icon: () => import("/tech/reactjs.png") },
  { name: "ThreeJS", icon: () => import("/tech/threejs.png") },
  { name: "Zustand", icon: () => import("/tech/zustand.png") },
  { name: "NodeJS", icon: () => import("/tech/nodejs.png") },
  { name: "ExpressJS", icon: () => import("/tech/expressjs.png") },
  { name: "MongoDB", icon: () => import("/tech/mongodb.png") },
  { name: "Git", icon: () => import("/tech/git.png") },
  { name: "C#", icon: () => import("/tech/csharp.png") },
];

export { navLinks, devs, socialMedia, projects, technologies };
