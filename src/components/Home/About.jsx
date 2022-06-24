import React from "react";
import "../../styling/about.css";

const About = () => {
  return (
    <div className="barswrapper">
      <div className="skills">
        <div className="skilldetails">
          <span>Graphics Designing</span>
          <span>90%</span>
        </div>
        <div className="bar">
          <div id="g-bar"></div>
        </div>
      </div>
      <div className="skills">
        <div className="skilldetails">
          <span>Video Animation</span>
          <span>75%</span>
        </div>
        <div className="bar">
          <div id="v-bar"></div>
        </div>
      </div>

      <div className="skills">
        <div className="skilldetails">
          <span>Ui/Ux</span>
          <span>68%</span>
        </div>
        <div className="bar">
          <div id="ui-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
