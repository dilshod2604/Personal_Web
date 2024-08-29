"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";

import Navigations from "@/components/Navigations/Navigations";
const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="Header">
      <div className="container">
        <div className="header_content">
          <div className="header_logo">
            <h1 className="header_logo_text">
              Dima <p>JS</p>
            </h1>
          </div>
          <nav className="header_nav">
            <Navigations active={active} />
          </nav>
          <div
            className="header_burger_menu"
            id={active ? "active" : ""}
            onClick={handleClick}
          >
            <motion.span
              className="burger_dots"
              initial={{ opacity: 1, y: 10 }}
              animate={{
                rotate: active ? 45 : 0,
                y: active ? 0 : 10,
                transition: { duration: 0.3 },
              }}
            ></motion.span>
            <motion.span
              className="burger_dots"
              initial={{ opacity: 1 }}
              animate={{ opacity: active ? 0 : 1 }}
            ></motion.span>
            <motion.span
              className="burger_dots"
              initial={{ opacity: 1, y: -10 }}
              animate={{
                rotate: active ? -45 : 0,
                y: active ? 0 : -10,
                transition: { duration: 0.3 },
              }}
            ></motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
