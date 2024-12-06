import React from "react";
import scss from "./Progress.module.scss";
import { Progress } from "antd";
import react from "../../assets/react-1.svg";
import typescript from "../../assets/typescript.svg";
import vite from "../../assets/vitejs.svg";
import js from "../../assets/logo-javascript.svg";
import next from "../../assets/next-js.svg"
import { motion } from "framer-motion";
import Image from "next/image";
const skills = [
  {
    name: "React",
    percent: 80,
    image: react,
  },
  {
    name: "Java-Script",
    percent: 80,
    image: js,
  },
  {
    name: "Type-Script",
    percent: 70,
    image: typescript,
  },
  {
    name: "Vite",
    percent: 80,
    image: vite,
  },
  {
    name: "Next.Js",
    percent: 70,
    image: next,
  },
];

const progressVariants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 1,
    },
  }),
  hidden: {
    y: 100,
    opacity: 0,
  },
};

const ProgressOfSkills: React.FC = () => {
  return (
    <motion.div className={scss.progress_of_skills}>
      {skills.map((el, i) => (
        <motion.div
          key={i}
          className={scss.list_of_progress}
          initial={"hidden"}
          whileInView={"visible"}
          variants={progressVariants}
          custom={i}
          viewport={{ amount: 1 }}
        >
          <div className={scss.skills_box}>
            <div className={scss.skills_img}>
              <Image src={el.image} alt={el.name} />
            </div>
            <p className={scss.skills_name}>{el.name}</p>
          </div>
          <Progress
            percent={el.percent}
            showInfo={false}
            percentPosition={{ align: "center", type: "inner" }}
            size={["100%", 20]}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProgressOfSkills;
