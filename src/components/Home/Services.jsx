import React from "react";
import Entry from "./ServicesEntry";
import "../../styling/services.css";
// import { TbArrowForward } from "react-icons/tb";
const aboutme = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        fill="currentColor"
        class="bi bi-palette-fill"
        viewBox="0 0 16 16"
      >
        <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </svg>
    ),
    category: <h6 className="card-subcategories">Graphic Designing</h6>,
    subcategories: (
      <ul className="card-text">
        <li>Logo Design</li>
        <li>Fyer Design</li>
        <li>Ads Design</li>
        <li>Product Image Design</li>
        <li>Book Formatting</li>
      </ul>
    ),
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        fill="currentColor"
        class="bi bi-play-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
      </svg>
    ),
    category: <h6 className="card-subcategories">Video Animation</h6>,
    subcategories: (
      <ul className="card-text">
        <li>White Board Animation</li>
        <li>2D Animation</li>
      </ul>
    ),
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        fill="currentColor"
        class="bi bi-phone-flip"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0v2ZM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11c.099 0 .197 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169 0 .003 0 .065-.13.187-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883-.228-.223-.535-.411-.882-.571ZM7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
        />
      </svg>
    ),
    category: <h6 class="card-subcategories">Ui/Ux</h6>,
    subcategories: (
      <ul className="card-text">
        <li>Landing Page Design</li>
        <li>splash scree</li>
        <li>App icon design</li>
      </ul>
    ),
  },
];

// .......................Array end

function createEntry(workType) {
  return (
    <Entry
      key={workType.id}
      icon={workType.icon}
      category={workType.category}
      description={workType.subcategories}
    />
  );
}
const Services = () => {
  return (
    <div className="container-fluid aboutWrapper">
      <div className="serviceHeadings">
        <h6>services</h6>
        <h2>I am available for hiring</h2>
      </div>
      <div className="aboutSection">{aboutme.map(createEntry)}</div>;
    </div>
  );
};

export default Services;
