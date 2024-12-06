import { StaticImageData } from "next/image";
import strong_pass1 from "../assets/projects/strong_pass/strong_pass1.png";
import d_shop from "../assets/projects/d-shop/d-shop.png";
import movie1 from "../assets/projects/movie_stream/movie-stream.png";
//technologiest
import typescript from "../assets/skills/typescript.svg";
import tailwid from "../assets/skills/pngwing.com.png";
import next from "../assets/skills/next-js.svg";
import reac_hook_formt from "../assets/skills/react-hook-form.svg";
import mui from "../assets/skills/icons8-material-ui.svg";
import pixso from "../assets/skills/pixso.png";
import prisma from "../assets/skills/icons8-prisma-orm.svg";
import supabase from "../assets/skills/icons8-supabase.svg";
import sass from "../assets/skills/icons8-sass-avatar.svg";
import antd from "../assets/skills/ant-design.svg";

interface Itechnologiest {
  name: string;
  icon: StaticImageData;
}

interface IProject {
  name: string;
  image1: StaticImageData;
  technologiest: Itechnologiest[];
  about_project: string;
  link: string;
  type: string;
}

export const projects: IProject[] = [
  {
    name: "Strong Pass",
    image1: strong_pass1,
    technologiest: [
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "Next.JS",
        icon: next,
      },
      {
        name: "TailwindCSS",
        icon: tailwid,
      },
      {
        name: "React-hook-form",
        icon: reac_hook_formt,
      },
      {
        name: "MaterialUI",
        icon: mui,
      },
      {
        name: "Pixso",
        icon: pixso,
      },
    ],
    about_project:
      "Strong Pass is a responsive and user-friendly web application where visitors can easily check the security of their passwords. It is developed with a high focus on usability and designed using modern technologies, achieving a 25% performance improvement. ",
    link: "https://strong-pass.vercel.app/",
    type: "MPA",
  },
  {
    name: "D-shop",
    image1: d_shop,
    technologiest: [
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "Next.JS",
        icon: next,
      },
      {
        name: "TailwindCSS",
        icon: tailwid,
      },
      {
        name: "React-hook-form",
        icon: reac_hook_formt,
      },
      {
        name: "MaterialUI",
        icon: mui,
      },
      {
        name: "Pixso",
        icon: pixso,
      },
      {
        name: "Prisma",
        icon: prisma,
      },
      {
        name: "Supabase",
        icon: supabase,
      },
    ],
    about_project:
      "D-Shop is a responsive and user-friendly project developed with modern technologies. It enhances user retention, improves performance, and reduces loading times by 15%.",
    link: "https://d-shop-kappa.vercel.app/",
    type: "MPA",
  },
  {
    name: "Movie-Stream",
    image1: movie1,
    technologiest: [
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "Next.JS",
        icon: next,
      },
      {
        name: "SASS",
        icon: sass,
      },
      {
        name: "React-hook-form",
        icon: reac_hook_formt,
      },
      {
        name: "Ant-Design",
        icon: antd,
      },
      {
        name: "Pixso",
        icon: pixso,
      },
      {
        name: "Prisma",
        icon: prisma,
      },
      {
        name: "Supabase",
        icon: supabase,
      },
    ],
    about_project:
      "Movie-stream is an intuitive and user-friendly movie platform where visitors can watch the latest movies in high quality and access detailed information about them. It is designed using modern technologies, increasing usability by 40%",
    link: "https://movie-stream-inky.vercel.app/",
    type: "MPA",
  },
];
