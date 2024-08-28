import React from "react";
import scss from "./Footer.module.scss";
import gitHub from "../../../assets/github-square.svg";
import linkedIn from "../../../assets/linked-in.svg";
import Image from "next/image";
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
              <a href="#" className={scss.icons}>
                <Image src={linkedIn} alt="linkedIn" />
              </a>
              <a href="#" className={scss.icons}>
                <Image src={gitHub} alt="gitHub" />
              </a>
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
