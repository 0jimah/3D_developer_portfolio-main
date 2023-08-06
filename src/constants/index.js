import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  swilook,
  zlyde,
  Athletia,
  homely,
  swilookimage,
  gym,
  nft,
  gymapp,
  angular,
  nestjs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sofware Developer",
    company_name: "Swilook UG, Germany",
    icon: swilook,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "Tech stack used: Nodejs, AWS , TypeScript, React, React Native , MongoDB, Apollo GraphQL.",
      "Designed the system architecture according to the business requirement.",
      "Developed and incorporated the algorithms for image processing, website linking and users website allocation. ",
      "Performed full deployment to the IOS and Google Store.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Zlyde GmbH, Germany",
    icon: zlyde,
    iconBg: "#383E56",
    date: "Nov 2021 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Digital Rights Manager",
    company_name: "Athletia Sport GmbH, Germany",
    icon: Athletia,
    iconBg: "#383E56",
    date: "Oct 2021 - Mar 2022",
    points: [
      "Content and data management across the various platform.",
      "Controlling and protecting the rights connected with digital information, guaranteeing legal compliance.",
      "Reviewing and Claiming Sport content data on major social media platforms.",
      "Monitoring and detecting any unauthorized use or infringement of copyrighted material.",
      "Joined the Team in setting queries and content to the backend endpoints for content regulation.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Tech stack used: Nodejs, TypeScript, React , MongoDB, Speechly annotation language, Apollo GraphQL.",
  //     "Developed a Voice user interface for the existing Analytics tools using Alan AI and speechly.",
  //     "Implemented and integrated the Apollo client with the VUI designs.",
  //     "Carried out regular research to create proof-of-concepts for new technologies and implementation designs.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Swilook Outfits",
    description:
    "Swilook is a fashion companion app that offers personalized styling advice and the latest trends. It caters to individual tastes and preferences, offering a diverse collection of clothing and accessories from top brands. The app is intuitive interface allows users to browse through categories and refine their search using filters.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "graphQL",
        color: "pink-text-gradient",
      },
    ],
    image: swilookimage,
    source_code_link: "https://swilook.com/",
  },
  {
    name: "Homely",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: homely,
    source_code_link: "https://homelyestate.netlify.app/",
  },
  {
    name: "Gym app",
    description:
      "The Gym Web App is an innovative platform designed to help fitness enthusiasts discover and explore a vast array of exercises tailored to their fitness goals and preferences. With its user-friendly interface and comprehensive exercise database",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://gymappfun.netlify.app/",
  },
  {
    name: "NFT mobile App",
    description:
      "The user-friendly interface provides a seamless browsing and buying experience. Explore categories like art, music, virtual real estate, and gaming assets, with detailed information about each asset.Engage with the NFT community through interactive features, including artist follow-ups, discussions, auctions,and sales.",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://landing-nft.netlify.app/",
  },
  {
    name: "Gym registration App",
    description:
      " The Gym Registration App is a web application created with Angular and Firebase that streamlines the process of registering new members at a gym or fitness center. By leveraging the power of Angular for frontend development and Firebase for backend services, the app provides a seamless and efficient registration experience. ",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: gymapp,
    source_code_link: "https://gymregapp.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
