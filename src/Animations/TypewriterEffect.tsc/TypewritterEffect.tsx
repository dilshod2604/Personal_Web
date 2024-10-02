import React from "react";
import { motion } from "framer-motion";
type WordType = {
  words: {
    text: string;
  }[];
  className: string;
  delay?: number;
  focusStyle: string;
};

const TypewritterEffect: React.FC<WordType> = (props) => {
  const { words, className, delay, focusStyle } = props;
  const wordArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const textAnimation = {
    visible: {
      width: "fit-content",
      transition: {
        duration: 2,
        delay: delay,
        ease: "linear",
      },
    },
    hidden: {
      width: "0%",
    },
  };
  const renderWords = () => {
    return (
      <div>
        {wordArray.map((word, index) => (
          <div key={index} style={{ display: "flex" }}>
            {word.text.map((char, index) => (
              <motion.span className={className} key={index}>
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
    );
  };
  return (
    <motion.div style={{ display: "flex", alignItems: "center" }}>
      <motion.div
        style={{
          overflow: "hidden",
        }}
        initial={"hidden"}
        whileInView={"visible"}
        variants={textAnimation}
        viewport={{ amount: 0.2 }}
      >
        {renderWords()}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={focusStyle}
      ></motion.span>
    </motion.div>
  );
};

export default TypewritterEffect;
