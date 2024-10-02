import React from "react";
import scss from "./Projects.module.scss";
import { motion } from "framer-motion";
const Projects: React.FC = () => {
  const titleAnimations = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
      style: {
        fontSize: "70px",
      },
    },
    hidden: {
      y: 100,
    },
  };
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
    <section id="projects" className={scss.Projects}>
      <div className="container">
        <div className={scss.projects_content}>
          <div className={scss.projects_title}>
            <motion.span
              className={scss.projects_title_divider}
              variants={dividerAnimations}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ amount: 0.2 }}
            ></motion.span>
            <p className={scss.projects_title_text}>My Projects</p>
            <motion.span
              className={scss.projects_title_divider}
              variants={dividerAnimations}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ amount: 0.2 }}
            ></motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
