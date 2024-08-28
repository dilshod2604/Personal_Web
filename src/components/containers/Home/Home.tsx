import React from "react";
import scss from "./Home.module.scss";
import { motion } from "framer-motion";
import MyImage from "../../../assets/myimage01.png";
import { MdOutlineEmail } from "react-icons/md";

import { Button } from "antd";
import TypewritterEffect from "@/Animations/TypewriterEffect.tsc/TypewritterEffect";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/components/3d-card";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/components/link-preview";
const words1 = [
  {
    text: "Front-end",
  },
];
const words2 = [
  {
    text: "Developer",
  },
];
const Home: React.FC = () => {
  return (
    <section id="home" className={scss.Home}>
      <div className="container">
        <div className={scss.home_content}>
          <div className={scss.home_info}>
            <p className={scss.home_info_top_text}>Hi,I am</p>
            <motion.p
              className={scss.home_info_name}
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              viewport={{ amount: 0.2 }}
            >
              Dilshod Adilbekov
            </motion.p>
            <p className={scss.home_info_speciality}>
              <TypewritterEffect
                delay={1}
                words={words1}
                className={scss.home_info_speciality_text}
                focusStyle={scss.home_info_text_focus}
              />
            </p>
            <p className={scss.home_info_speciality2}>
              <TypewritterEffect
                delay={3}
                words={words2}
                className={scss.home_info_speciality_text}
                focusStyle={scss.home_info_text_focus}
              />
            </p>
            <p className={scss.home_information}>
              I'm a Java-Script developer and I'm a student at the
              <LinkPreview
                url=" https://motion.kg/kg"
                className={scss.home_information_text_inner_link}
              >
                MOTION WEB IT ACADEMY
              </LinkPreview>
              Currently,I am focus on improving my skills in this sphere and
              create interactive Web-sites and Web-applications.
            </p>
            <div className={scss.home_btn}>
              <Button
                href="#contacts"
                onClick={() => console.log("clicked")}
                className={scss.button}
                icon={<MdOutlineEmail />}
                iconPosition="end"
              >
                Hire Me
              </Button>
            </div>
          </div>
          <div className={scss.home_image}>
            <CardContainer className={scss.image_container}>
              <CardBody className={scss.image_body}>
                <CardItem translateZ="100" className={scss.home_image_wrapper}>
                  <Image src={MyImage} className={scss.myImg} alt="my photo" />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
