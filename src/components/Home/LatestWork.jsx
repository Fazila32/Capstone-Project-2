import React, { useState } from "react";
import "../../styling/LatestWork.css";
import Work1 from "../../images/book formatting (2).png";
import Work2 from "../../images/book formatting (1).png";
import Work3 from "../../images/book formatting (3).png";
import Work4 from "../../images/app design (2).png";
import Work5 from "../../images/ads (2).png";
import Work6 from "../../images/ads (3).png";
import Work7 from "../../images/app icon (1).png";
import Work8 from "../../images/ads (4).png";
import Work9 from "../../images/app icon (2).png";
import Work10 from "../../images/app icon (4).png";
import Work11 from "../../images/app design (1).png";

function LatestWork() {
  const imgs = [
    { id: 0, value: Work1 },
    { id: 1, value: Work2 },
    { id: 2, value: Work4 },
    { id: 3, value: Work3 },
    { id: 4, value: Work5 },
    { id: 5, value: Work6 },
    { id: 6, value: Work7 },
    { id: 7, value: Work8 },
    { id: 8, value: Work9 },
    { id: 9, value: Work10 },
    { id: 10, value: Work11 },
    //
  ];
  const [WorkData, setWorkData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);
    const wordSlider = imgs[index];
    setWorkData(wordSlider);
  };
  return (
    <div className="main">
      <h6>Recent Projects</h6>
      <h2>I love what i do</h2>
      <div className="bigImg">
        <img className="bigImg" src={WorkData.value} alt="Larger VErsion" />
      </div>
      <div className="flex_row">
        {imgs.map((data, i) => (
          <div className="thumbnail" key={i}>
            <img
              className={WorkData.id === i ? "clicked" : ""}
              src={data.value}
              onClick={() => handleClick(i)}
              height="100"
              width="120"
              alt="work samples"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestWork;
