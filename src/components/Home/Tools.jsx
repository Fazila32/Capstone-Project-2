import React from "react";
import "../../styling/tools.css";
import Ai from "../../images/illus.png";
import Ps from "../../images/ps.png";
import Ind from "../../images/indesign.png";
import Xd from "../../images/xd.png";
import Vn from "../../images/vyound.png";
import Vs from "../../images/videoscribe.png";
import Cm from "../../images/camtesia.png";
import Fm from "../../images/filmora1.png";

function Tools() {
  return (
    <div className="bg">
      <h2 className="heading">tools</h2>
      <div className="gallery">
        <div id="carousel">
          <figure>
            <img src={Ai} alt="" />
          </figure>
          <figure>
            <img src={Ps} alt="" />
          </figure>
          <figure>
            <img src={Ind} alt="" />
          </figure>
          <figure>
            <img src={Xd} alt="" />
          </figure>
          <figure>
            <img src={Vn} alt="" />
          </figure>
          <figure>
            <img src={Vs} alt="" />
          </figure>
          <figure>
            <img src={Cm} alt="" />
          </figure>
          <figure>
            <img src={Fm} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Tools;
