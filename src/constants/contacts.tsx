import { StaticImageData } from "next/image";
import telegram from "../assets/contacts/icons8-telegram.svg";
import email from "../assets/contacts/icons8-gmail.svg";
import linkedin from "../assets/contacts/icons8-linkedin.svg";
import facebook from "../assets/contacts/icons8-facebook.svg";
import intsagram from "../assets/contacts/instagram.svg";

interface IContacts {
  name: string;
  icon: StaticImageData;
  link: string;
}
export const contact: IContacts[] = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/dima-frontdev/",
  },
  {
    name: "Instagram",
    icon: intsagram,
    link: "https://www.instagram.com/dilshod_2604/",
  },
  {
    name: "Facebook",
    icon: facebook,
    link: "#",
  },
  {
    name: "Telegram",
    icon: telegram,
    link: "https://t.me/dilshod_2604",
  },
  {
    name: "dima.dev26@gmail.com",
    icon: email,
    link: "dima.dev26@gmail.com",
  },
];
