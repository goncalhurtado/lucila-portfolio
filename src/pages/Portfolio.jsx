import React from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../components/about/Contact";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="containerBase">
      <div
        className="btn btn-primary"
        onClick={() => navigate("/portfolio/presto")}
      >
        Presto
      </div>
      <div
        className="btn btn-primary"
        onClick={() => navigate("/portfolio/simile")}
      >
        Simile
      </div>
      <Contact />
    </div>
  );
};

export default Portfolio;
