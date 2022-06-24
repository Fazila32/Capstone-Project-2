import React from "react";
import "../styling/footer.css";

import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container f-icons">
        <a href="https://bit.ly/3twNNHE" target="blank">
          <FaWhatsappSquare size={50} style={{ color: "#c7ecee" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/ani-graphics-343190210"
          target="blank"
        >
          <FaLinkedin size={50} style={{ color: "#c7ecee" }} target="blank" />
        </a>
        <a href="https://www.facebook.com/AnilaDesigner786/" target="blank">
          <FaFacebookSquare size={50} style={{ color: "#c7ecee" }} />
        </a>

        <a href="https://www.fiverr.com/anilaadnan/" target="blank">
          <SiFiverr size={50} style={{ color: "#c7ecee" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
