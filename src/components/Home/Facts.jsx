import React from "react";
import "../../styling/facts.css";
import CountUp from "react-countup";

const Facts = () => {
  return (
    <div className="container-fluid facts">
      <div className="container ">
        <h2 style={{ color: "white" }}>Some Cool Facts about me!</h2>
        <ul className="numbersList">
          <div className="row">
            <li className="col-md-3 col-sm-4 col-xs-6">
              <h4> Years of Experience</h4>
              <CountUp end={4} />+
            </li>
            <li className="col-md-2 col-sm-4 col-xs-6">
              <h4> Projects</h4>
              <CountUp end={400} />
            </li>
            <li className="col-md-2 col-sm-4 col-xs-6">
              <h4> Hours of Work</h4>
              <CountUp end={600} />
            </li>
            <li className="col-md-2 col-sm-4 col-xs-6">
              <h4> App design</h4>
              <CountUp end={80} />
            </li>
            <li className="col-md-2 col-sm-4 col-xs-6">
              <h4> Happy Clients </h4>
              <span id="number6" className="count6">
                100
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Facts;
