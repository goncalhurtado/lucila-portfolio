import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import NavMobile from "./NavMobile";

const Navegation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="d-none d-md-block">
        <div className="navBar">
          <div className="navBar__home">LDS</div>
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
                location.pathname === "/portfolio"
                  ? "navBar__links__active"
                  : ""
              }
              onClick={() => navigate("/portfolio")}
            >
              Portfolio
            </a>
            <a>
              <FaLinkedinIn className="mb-1" size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="d-sm-block d-md-none">
        <NavMobile navigate={navigate} />
      </div>
    </div>
  );
};

export default Navegation;
