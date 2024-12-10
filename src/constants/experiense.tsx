import { StaticImageData } from "next/image";
import emoji from "../assets/skills/emoji.svg";

//experiense
interface IBulletPoints {
  text: string;
}
export interface IExperience {
  company: string;
  image: StaticImageData;
  speciality: string;
  date: string;
  buletPoints: IBulletPoints[];
  link: string;
}

export const experienses: IExperience[] = [
  {
    company: "I Ant Studio",
    image: emoji,
    speciality: "Frontend Developer",

    date: "11.2024 - 11.2024",
    buletPoints: [
      {
        text: "Developed the 'StrongPassword' Project – A tool designed to help visitors check the security of their passwords.",
      },
      {
        text: "Developed the 'StrongPassword' Project – A tool designed to help visitors check the security of their passwords.",
      },
      {
        text: " Optimized usability, reducing password security check time by 40%.",
      },
    ],

    link: "https://strong-pass.vercel.app/",
  },
  {
    company: "Motion Web It Academy",
    image: emoji,
    speciality: "Frontend Developer",

    date: "10.2024 - 11.2024",
    buletPoints: [
      {
        text: "Participated in the development of “MovieStream,” a movie platform that enhances user engagement by 25%.",
      },
      {
        text: "Improved performance, reducing loading times by 15% .",
      },
      {
        text: " Optimized usability, and increasing user retention by 20%",
      },
    ],

    link: "https://movie-stream-inky.vercel.app/",
  },
  {
    company: "Motion Web It Academy",
    image: emoji,
    speciality: "Frontend Developer",

    date: "09.2024 - 10.2024",
    buletPoints: [
      {
        text: "Developed a responsive and user-friendly project, 'D-Tech,' enhancing UI usability by 50%.",
      },
      {
        text: "Increased performance, reducing loading times by 20%.",
      },
      {
        text: "Implemented scalable features that boosted user activity by 40%.",
      },
    ],

    link: "https://d-shop-kappa.vercel.app/",
  },
];

///

export const certificates = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
];
