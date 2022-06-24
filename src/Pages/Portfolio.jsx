import React, { useState } from "react";
import Graphic from "../images/pta4.png";
import Projects from "../components/Portfolio/Filter";
import Categories from "../components/Portfolio/Categories";
import items from "../components/Portfolio/Data";
import "../styling/Portfolio.css";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function PortfolioShow() {
  const [PortfolioItems, setPortfolioItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setPortfolioItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setPortfolioItems(newItems);
  };

  return (
    <main>
      <div className="portfolioHeader">
        <div className="container-fluid row">
          <div className="Headerleft col-lg-6 text-center headerImg">
            <img src={Graphic} alt="graphic designer" />
          </div>
          <div className="HeaderRight col-lg-5 text-center">
            <h1>Awesome Work Performed</h1>
          </div>
        </div>
      </div>

      <section className="projects section">
        <h6>portfolio</h6>
        <h2>my awesome work</h2>
        <Categories categories={categories} filterItems={filterItems} />
        <Projects items={PortfolioItems} />
      </section>
    </main>
  );
}

export default PortfolioShow;
