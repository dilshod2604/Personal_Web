import React, { useState } from "react";
import scss from "./ThemeSwitcher.module.scss";
import { motion } from "framer-motion";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
interface ThemeSwitcherType {
  changeTheme: () => void;
  theme: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherType> = (props) => {
  const { changeTheme, theme } = props;

  return (
    <div className={scss.Theme_switcher}>
      <motion.div
        className={scss.circle}
        initial={{ x: 0 }}
        animate={{
          x: theme === "light" ? 0 : 40,
          transition: { duration: 0.3 },
        }}
        onClick={changeTheme}
        style={{
          color: theme === "light" ? "orange" : "orange",
          background: theme === "light" ? "white" : "blue",
        }}
      >
        {theme === "light" ? <SunOutlined /> : <MoonOutlined />}
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
