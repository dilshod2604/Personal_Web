"use client"
import React, { useContext, useState } from "react";
import "./Navigation.css";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "../../providers/ThemeProvider";
import ThemeSwitcher from "../../Animations/ThemeSwitcher/ThemeSwitcher";
import { GoLinkExternal } from "react-icons/go";

import { Button } from "antd";
const nav = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Contacts",
    link: "contacts",
  },
];
type NavigateType = {
  active: boolean;
};

const Navigations: React.FC<NavigateType> = (props) => {
  const { active } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number): void => {
    setActiveIndex(index);
  };
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("SomeComponent must be used within a ThemeProvider");
  }
  const { theme, setTheme } = context;

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <AnimatePresence>
      <motion.div
        className="navigations"
        initial={{ height: "0" }}
        animate={{ height: active ? "auto" : "0" }}
        exit={{ height: 0 }}
      >
        {nav.map((item, index) => (
          <Link
            key={index}
            className="nav_links"
            activeClass="active"
            to={item.link}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            isDynamic={true}
            onClick={() => handleClick(index)}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            {item.name}
          </Link>
        ))}
        <ThemeSwitcher changeTheme={changeTheme} theme={theme} />
        <div className="header_button">
          <Button
            className="button"
            icon={<GoLinkExternal />}
            iconPosition="end"
          >
            Resume
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navigations;
