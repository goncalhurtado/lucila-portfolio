import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { Slant as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";

const NavMobile = ({ navigate }) => {
  const [showMenu, setshowMenu] = useState(false);
  const location = useLocation();
  return (
    <>
      <div className="navMobile row ">
        <div
          className="navMobile__menu col-4"
          onClick={() => setshowMenu(!showMenu)}
        >
          <Hamburger toggled={showMenu} />
        </div>
        <div className="navMobile__home col-4" onClick={() => navigate("/")}>
          LDS
        </div>
      </div>

      <div className={showMenu ? "modal" : "modal d-none"}>
        <div className="modal__links">
          <a
            className={location.pathname === "/" ? "modal__links__active" : ""}
            onClick={() => {
              navigate("/"), setshowMenu(!showMenu);
            }}
          >
            About
          </a>
          <a
            className={
              location.pathname === "/portfolio" ||
              location.pathname === "/portfolio/presto" ||
              location.pathname == "/portfolio/simile"
                ? "modal__links__active"
                : ""
            }
            onClick={() => {
              navigate("/portfolio"), setshowMenu(!showMenu);
            }}
          >
            Portfolio
          </a>
          <div>
            <FaLinkedinIn className="linkedinMobile" size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
