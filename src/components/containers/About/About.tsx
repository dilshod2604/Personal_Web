import React from "react";
import scss from "./About.module.scss";
import { CardBody, CardContainer, CardItem } from "../../ui/components/3d-card";
import myImage from "../../../assets/myimage02.png";
import { motion } from "framer-motion";
import ProgressOfSkills from "@/components/Progress/Progress";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/components/link-preview";
import {useGSAP} from "@gsap/react";
import  {gsap} from "gsap"

const About: React.FC = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#text",
      {
        opacity: 0,
        y: 10,
      },
      {
    
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: {
          amount: 1.5,
        },
      }
    );
  }, []);
  
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
    <section id="about" className={scss.About}>
      <div className="container">
        <div className={scss.about_content}>
          <div className={scss.about_image}>
            <CardContainer className="inter-var">
              <CardBody className={scss.image_body}>
                <CardItem translateZ="100" className={scss.about_image_wrapper}>
                  <div className={scss.cover1}>
                    <Image
                      src={myImage}
                      className={scss.myImg}
                      alt="my photo"
                    />
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <div className={scss.about_info}>
            <div className={scss.about_info_title}>
              <motion.span
                className={scss.about_title_divider}
                variants={dividerAnimations}
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ amount: 0.2 }}
              ></motion.span>
              <p className={scss.about_title_text}>About Me</p>
              <motion.span
                className={scss.about_title_divider}
                variants={dividerAnimations}
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ amount: 0.2 }}
              ></motion.span>
            </div>
            <div className={scss.about_informtion_box}>
              <p id="text" className={scss.about_info_text}>
                Hallo! My name is Dilshod and I am a Front-end Developer.
                I&apos;m keen on creating websites and web applications.
                Currently, I live among the code and also on the internet,
                spending my time creating. I started to be interested in the IT
                sphere in 2023.
              </p>
              <p id="text" className={scss.about_info_text}>
                I finished my studies at the{" "}
                <LinkPreview url="https://motion.kg/kg">
                  MOTION WEB IT ACADEMY
                </LinkPreview>
                in 2025. Currently, I&apos;m focused on improving my skills in
                this sphere. One of my main goals is to create interactive
                websites and applications.
              </p>
              <p id="text" className={scss.about_info_text}>
                My expertise lies in JavaScript frameworks and libraries. I have
                extensive experience with JavaScript frameworks and libraries
                such as:
              </p>
            </div>
            <div className={scss.abount_info_skills}>
              <ProgressOfSkills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
