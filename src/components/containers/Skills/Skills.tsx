import React from "react";
import scss from "./Skills.module.scss";
import { motion } from "framer-motion";
import SkillsList from "@/components/Skills/SkillsList";

const Skills: React.FC = () => {
  const dividerAnimations = {
    visible: {
      opacity: 1,
      width: 300,
      transition: {
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      width: 0,
    },
  };
  return (
    <section id="skills" className={scss.Skills}>
      <div className="container">
        <div className={scss.skils_content}>
          <div className={scss.skills_title}>
            <motion.span
              className={scss.skills_title_divider}
              variants={dividerAnimations}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ amount: 0.2 }}
            ></motion.span>
            <h1 className={scss.skills_title_text}>My Skills</h1>
            <motion.span
              className={scss.skills_title_divider}
              variants={dividerAnimations}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ amount: 0.2 }}
            ></motion.span>
          </div>
          <p className={scss.skills_text}>
            My skills in Java-Script frameworks and libraries.I have extensive
            experience with Java-script frameworks and libraries such kind of :
          </p>
          <div className={scss.skills_box}>
            <SkillsList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
