import mobile from "@/public/assets/mobile.png";
import backend from "@/public/assets/backend.png";
import creator from "@/public/assets/creator.png";
import web from "@/public/assets/web.png";

import typescript from "@/public/assets/tech/typescript.png";
import redux from "@/public/assets/tech/redux.png";
import tailwind from "@/public/assets/tech/tailwind.png";
import nodejs from "@/public/assets/tech/nodejs.png";
import mongodb from "@/public/assets/tech/mongodb.png";
import docker from "@/public/assets/tech/docker.png";
import flutter from "@/public/assets/tech/flutter.png";
import phaserjs from "@/public/assets/tech/phaserjs.png";
import zustand from "@/public/assets/tech/zustand.png";
import mern from "@/public/assets/tech/mern.png";
import figma from "@/public/assets/tech/figma.png";
import reactjs from "@/public/assets/tech/reactjs.png";
import threejs from "@/public/assets/tech/threejs.svg";

import ostories from "@/public/assets/company/ostories-logo.png";

import croton from "@/public/assets/croton.png";
import metaverse_threeJS from "@/public/assets/metaverse_threeJS.png";
import store_4g from "@/public/assets/store-4g.png";
import promptopia from "@/public/assets/promptopia.png";
import globalFairy from "@/public/assets/globalFairy.png";

import yahya from "@/public/assets/yahya.png";

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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Solution Provider",
    icon: creator,
  },
];

const technologies = [
  {
    name: "MERN",
    icon: mern,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "phaserjs",
    icon: phaserjs,
  },
];

const experiences = [
  {
    title: "Full Stack MERN Developer",
    company_name: "Ostories",
    icon: ostories,
    iconBg: "#383E56",
    date: "March 2024 - July 2021",
    points: [
      "Developing and maintaining web applications using React.js, Node.js and other related technologies.",
      "Design renovation.",
      "Optimize previously build services to ensure better performance.",
      "Build and implement newly requested services.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Debug others code and find solutions for existing problems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Try out my work! And Leave your testimonial on this wall of fame!",
    name: "Yahya Nashar",
    designation: "Full Stack Developer",
    company: "Yahya's Innovative Solutions",
    image: yahya,
  },
];

const projects = [
  {
    name: "Croton",
    description:
      "A Healthy Body Sustains A Healthy Mind, is the idea behind 'Croton'. A web app that combines 3d visuals with hand gestures recognitions and many more technologies to deliver the best experience a user can have. This project demonstrates how I managed to combine react-three-fiber, phaserJS and mediaPipe implementation from google, to build games controlled by gestures, fitness app with multiple exercises that you can choose from, a book library where you can read or download books, calorie tracker and bmi calculator and many more!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "media-pipe",
        color: "pink-text-gradient",
      },
      {
        name: "Phaser.js",
        color: "orange-text-gradient",
      },
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
    ],
    image: croton,
    video: "/assets/video/croton_teaser_low.mp4",
    source_code_link_front_end:
      "https://github.com/YahyaNashar22/Croton---Client",
    source_code_link_back_end: "https://github.com/YahyaNashar22/Croton-Server",
    live_link: "https://croton-client.vercel.app/",
  },
  {
    name: "Metaverse ThreeJS",
    description:
      "This is a metaverse prototype still under heavy development. It utilizes the power of Typescript with NextJS alongside ThreeJS, Blender, Mixamo to build a 3d world with character movements and animations.",
    tags: [
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
      {
        name: "Mixamo",
        color: "orange-text-gradient",
      },
    ],
    image: metaverse_threeJS,
    video: "/assets/video/metaverse-threeJS.mp4",
    source_code_link_front_end:
      "https://github.com/YahyaNashar22/metaverse-threejs.git",
    live_link: "https://metaverse-threejs.vercel.app/",
  },
  {
    name: "4G Store",
    description:
      "A small e-commerce website for a mobile store. By the help of NextJS and Tailwind for the front-end, and Mongoose and expressJS on the backend,  the website was built with a dashboard to manage the stock and with features like order on Whatsapp and many more!",
    tags: [
      {
        name: "NextJS",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "Mongoose",
        color: "blue-text-gradient",
      },
    ],
    image: store_4g,
    video: "/assets/video/store-4g.mp4",
    source_code_link_front_end:
      "https://github.com/YahyaNashar22/store-4g-client",
    source_code_link_back_end:
      "https://github.com/YahyaNashar22/store-4g-server",
    live_link: "https://store-4g-client.vercel.app/",
  },
  {
    name: "Promptopia",
    description:
      "A small blog like website with feed functionality and so on. The website is a demo, meant for training and sharpening my skills with NextJS and typescript, using NextAuth, and building a full stack application with only NextJS for the front end and the back end.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "NextAuth",
        color: "green-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link_front_end: "https://promptopia-eight-blush.vercel.app/",
    source_code_link_back_end: "https://promptopia-eight-blush.vercel.app/",
    live_link: "https://promptopia-eight-blush.vercel.app/",
  },
  {
    name: "Global Fairy",
    description:
      "One of the most interesting e-commerce websites I've worked on, 'Global Fairy' is a web app that I worked on mid-way during my learning journey. The website is a team effort with my previous colleagues, and it offers lots of features, such as socket.io implementation for real time chatting, stock management and a dashboard that lets you almost customize everything. a shopping cart and checkout functionality and many more!",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "orange-text-gradient",
      },
      {
        name: "e-commerce",
        color: "green-text-gradient",
      },
      {
        name: "chat_app",
        color: "pink-text-gradient",
      },
    ],
    image: globalFairy,
    video: "/assets/video/globalFairy.mp4",
    source_code_link_front_end:
      "https://github.com/YahyaNashar22/Global-Fairy-front-end",
    source_code_link_back_end:
      "https://github.com/YahyaNashar22/Global-Fairy-back-end",
  },
];

export { services, technologies, experiences, testimonials, projects };
