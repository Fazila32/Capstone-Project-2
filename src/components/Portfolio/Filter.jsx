import React from "react";

const Projects = ({ items }) => {
  return (
    <div className="portFolio">
      <div className="section-center">
        {items.map((projectsItem) => {
          const { id, img } = projectsItem;
          return (
            <article key={id}>
              <img src={img} alt="Image Missing" className="photo" />
              {/* <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">₹{Math.floor(price) * 10}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div> */}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
