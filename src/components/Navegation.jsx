import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import NavMobile from "./NavMobile";

const Navegation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/luciladiazspolita/", "_blank");
  };

  return (
    <div className="navegationDisabled">
      <div className="d-none d-md-block">
        <div className="navBar">
          <div
            className="navBar__home"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            LDS
          </div>
          <div className="navBar__links">
            <a
              className={
                location.pathname === "/" ? "navBar__links__active" : ""
              }
              onClick={() => navigate("/")}
            >
              About
            </a>
            <a
              className={
                location.pathname === "/portfolio" ||
                location.pathname === "/portfolio/presto" ||
                location.pathname == "/portfolio/simile"
                  ? "navBar__links__active"
                  : ""
              }
              onClick={() => navigate("/portfolio")}
            >
              Portfolio
            </a>
            <a onClick={() => handleLinkedin()}>
              <FaLinkedinIn className="mb-1" size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="navegationDisabledMobile">
        <NavMobile navigate={navigate} />
      </div>
    </div>
  );
};

export default Navegation;
