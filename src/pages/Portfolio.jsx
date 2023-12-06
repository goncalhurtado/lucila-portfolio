import React from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../components/about/Contact";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div
      className="containerBase"
      style={{
        marginTop: "50px",
      }}
    >
      <div className="portfolio">
        <div
          className="portfolio__project"
          onClick={() => navigate("/portfolio/presto")}
        >
          <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791196/tiliportoflio/Project-Presto_ycwjeu.png"
            alt="presto"
          />
          <div className="portfolio__project__span">
            <h2>Presto</h2>
          </div>
        </div>
        <div
          className="portfolio__project"
          onClick={() => navigate("/portfolio/simile")}
        >
          <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791197/tiliportoflio/Project-Simile_ppulya.png"
            alt="simile"
          />
          <div className="portfolio__project__span">
            <h2>Simile</h2>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Portfolio;
