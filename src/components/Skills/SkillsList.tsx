import React from "react";
import scss from "./SkillsList.module.scss";
import react from "../../assets/react-1.svg";
import vite from "../../assets/vitejs.svg";
import js from "../../assets/logo-javascript.svg";
import ts from "../../assets/typescript.svg";
import antd from "../../assets/ant-design.svg";
import framer from "../../assets/framer.svg";
import router from "../../assets/react-router.svg";
import redux from "../../assets/redux.svg";
import sass from "../../assets/file-type-sass.svg";
import bootstrap from "../../assets/bootstrap-5-1.svg";
import nextjs from "../../assets/next-js.svg";
import { motion } from "framer-motion";
import Image from "next/image";
const skills = [
  {
    name: "React",
    image: react,
  },
  {
    name: "Next.JS",
    image: nextjs,
  },
  {
    name: "Vite",
    image: vite,
  },
  {
    name: "Java-Script",
    image: js,
  },
  {
    name: "Type-Script",
    image: ts,
  },
  {
    name: "Antd",
    image: antd,
  },
  {
    name: "Framer-motion",
    image: framer,
  },
  {
    name: "React-router",
    image: router,
  },
  {
    name: "Redux",
    image: redux,
  },
  {
    name: "Sass",
    image: sass,
  },
  {
    name: "Bootstrap",
    image: bootstrap,
  },
];

const SkillsList: React.FC = () => {
  const skillsVariants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 1,
      },
    }),
    hidden: {
      opacity: 0,
      x: 100,
    },
  };
  return (
    <div className={scss.skills_box}>
      <div className={scss.skills_box_title}>
        <h2 className={scss.skills_box_title_text}>Front-End</h2>
        <span className={scss.skills_box_divider}></span>
      </div>
      <div className={scss.list_of_skills}>
        {skills.map((el, index) => (
          <motion.div
            key={index}
            className={scss.skills_img}
            variants={skillsVariants}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.2 }}
            custom={index}
          >
            <Image src={el.image} alt={el.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
