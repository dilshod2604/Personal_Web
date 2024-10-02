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
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const words1 = [{ text: "Front-end" }];
const words2 = [{ text: "Developer" }];

const Home: React.FC = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#hero-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: { amount: 0.5 } }
    );
  }, []);

  return (
    <section id="home" className={scss.Home}>
      <div className="container">
        <div className={scss.home_content}>
          <div className={scss.home_info}>
            <p id="hero-text" className={scss.home_info_top_text}>
              Hi, I am
            </p>
            <motion.p
              className={scss.home_info_name}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              viewport={{ amount: 0.2 }}
            >
              Dilshod Adilbekov
            </motion.p>
            <p id="hero-text" className={scss.home_info_speciality}>
              <TypewritterEffect
                delay={1}
                words={words1}
                className={scss.home_info_speciality_text}
                focusStyle={scss.home_info_text_focus}
              />
            </p>
            <p id="hero-text" className={scss.home_info_speciality2}>
              <TypewritterEffect
                delay={3}
                words={words2}
                className={scss.home_info_speciality_text}
                focusStyle={scss.home_info_text_focus}
              />
            </p>
            <p id="hero-text" className={scss.home_information}>
              I&apos;m a JavaScript developer and a student at the
              <LinkPreview
                url="https://motion.kg/kg"
                className={scss.home_information_text_inner_link}
              >
                MOTION WEB IT ACADEMY
              </LinkPreview>
              . Currently, I&apos;m focused on improving my skills in this
              sphere and creating interactive websites and web applications.
            </p>
            <div id="hero-text" className={scss.home_btn}>
              <Button
                href="#contacts"
                onClick={() => console.log("clicked")}
                className={scss.button}
                icon={<MdOutlineEmail />}
              >
                Hire Me
              </Button>
              <Button
                href="https://github.com/yourusername" // Update this with your GitHub profile link
                target="_blank"
                rel="noopener noreferrer"
                className={scss.github}
                icon={<FaGithub />}
              >
                GitHub
                <GoLinkExternal />
              </Button>
            </div>
          </div>
          <motion.div
            className={scss.home_image}
            initial={{ y: 50 }}
            animate={{ y: 0, transition: { duration: 1 } }}
          >
            <CardContainer className={scss.image_container}>
              <CardBody className={scss.image_body}>
                <CardItem translateZ="100" className={scss.home_image_wrapper}>
                  <Image src={MyImage} className={scss.myImg} alt="my photo" />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
