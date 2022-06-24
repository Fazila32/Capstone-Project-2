import React from "react";
import "../../styling/basics.css";
import "../../styling/HeroSection.css";
import Bg from "../../images/shinybg.jpg";
import Ppt from "../../images/pp.jpeg";
import Photo from "../../images/photo.jpeg";
import Web from "../../images/web.jpeg";
import Rast from "../../images/rast.jpeg";
import Resume from "./cv.pdf";

function HeroSection() {
  return (
    <div className="hero">
      <div className="mask">
        <div class="wrapper">
          <img className="bgImg" src={Bg} alt="" />
        </div>
      </div>
      <button onclick="topFunction()" id="myBtn" title="Go to top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-arrow-90deg-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
          />
        </svg>
      </button>
      <div class="headerContent">
        <div className="Left">
          <h5>Hello This is Me!</h5>
          <h1>anila adnan</h1>
          <h3>expert in graphic design, UI/UX design & video animation.</h3>
          <div className="ButtonsSet">
            <a
              class="button button_still"
              href={Resume}
              download
              title="Ani Graphics"
            >
              Download Resume
            </a>
            <a
              class="button button_slide"
              href="https://www.fiverr.com/anilaadnan"
              target="blank"
              title="Ani Graphics"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="Right">
          <div className="SlideContainer">
            <div className="slider">
              <img src={Ppt} alt="" />
              <img src={Photo} alt="" />
              <img src={Web} alt="" />
              <img src={Rast} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default HeroSection;
