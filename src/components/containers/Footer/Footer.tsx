import React from "react";
import scss from "./Footer.module.scss";
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className={scss.Footer}>
        <div className="container">
          <div className={scss.footer_content}>
            <div className={scss.footer_builder}>
              <p className={scss.footer_center_text}>
                Built with <p className={scss.center_text_inner}>♡ by DimaJS</p>
              </p>
            </div>
            <div className={scss.footer_icons}>
              <Link href="https://github.com/dilshod2604" className={scss.icons}>
                <FaGithub size={30} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dima-frontdev/"
                className={scss.icons}
              >
                <BsLinkedin size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.Footer_bottom}>
        <div className="container">
          <div className={scss.footer_bottom_content}>
            <div className={scss.footer_text}>
              <p> Copyright © 2024-{currentYear}. All rights are reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
