import React from "react";

function Entry(props) {
  return (
    // <div className="col-lg-4 col-md-6">
    <div className="cardCover">
      <div className="card ">
        {props.icon}
        {props.category}
        {props.description}
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
  );
}

export default Entry;
