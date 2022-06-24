import React from "react";
import "../styling/resume.css";
import ResumeLeft from "../components/Resume/ResumeLeft";
import Skills from "../images/ee.png";
import ResumeRight from "../components/Resume/ResumeRight";

function Resume() {
  return (
    <div className="resumeMain">
      <div className="resumeHeader">
        <div className="container-fluid row">
          <div className="Headerleft col-lg-6 text-center">
            <img src={Skills} alt="graphic designer" />
          </div>
          <div className="HeaderRight col-lg-5 text-center">
            <h1>My skills and history</h1>
          </div>
        </div>
      </div>
      <h6>resume</h6>
      <h2>Ani's concise introduction</h2>
      <div className="resumeWrapper">
        <div className="resume row">
          <div className="col-lg-4 col-md-4 col-sm-9">
            <ResumeLeft />
          </div>
          <div className="col-lg-7 col-md-7 col-sm-9">
            <ResumeRight />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
