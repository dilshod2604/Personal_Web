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

const TypewritterEffect: React.FC<WordType> = ({ words, className, delay = 0, focusStyle }) => {
  const wordArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

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

  const renderWords = () => (
    <div>
      {wordArray.map((word, wordIndex) => (
        <div key={wordIndex} style={{ display: "flex" }}>
          {word.text.map((char, charIndex) => (
            <motion.span className={className} key={charIndex}>
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <motion.div style={{ display: "flex", alignItems: "center" }}>
      <motion.div
        style={{ overflow: "hidden" }}
        initial="hidden"
        whileInView="visible"
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
      >
        |
      </motion.span>
    </motion.div>
  );
};

export default TypewritterEffect;
