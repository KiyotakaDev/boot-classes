// Navigation
const navLinks = [
  { name: "Developers", id: "developers" },
  { name: "Projects", id: "projects" },
  { name: "About me", id: "about" },
];

// Dev data
const devs = [
    {
    name: "Brais Moure",
    country: 'Spain',
    charge: 'Software Engineer',
    img_src: '/devs/brais.png',
    company: 'Moure Dev Founder',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam quae veniam, est at non, accusantium animi minima id sint consequuntur asperiores quas rem facilis in porro nemo voluptatibus! Nulla.'
  },
  {
    name: "Migel Angel Duran",
    country: 'Spain',
    charge: 'Software Engineer',
    img_src: '/devs/midu.png',
    company: 'None',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam quae veniam, est at non, accusantium animi minima id sint consequuntur asperiores quas rem facilis in porro nemo voluptatibus! Nulla.'
  },
  {
    name: "Lucas Dalto",
    country: "Argentina",
    charge: "Software Engineer",
    img_src: "/devs/dalto.jpg",
    company: "None",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam quae veniam, est at non, accusantium animi minima id sint consequuntur asperiores quas rem facilis in porro nemo voluptatibus! Nulla.",
  },
]
const socialMedia = [
  { name: "Linkedin", icon: "/icons/linkedin.svg" },
  { name: "Twitter", icon: "/icons/twitter-x.svg" },
  { name: "Youtube", icon: "/icons/youtube.svg" },
]

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
    image: () => import("/projects/chappy-project.png"),
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
      { name: "React Router", color: colors.router }
    ],
    image: () => import("/projects/Pokemon-API.png"),
    source_code_link: "https://github.com/KiyotakaDev/PokeApi",
    deploy_link: "https://testing-olive-alpha.vercel.app/"
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
