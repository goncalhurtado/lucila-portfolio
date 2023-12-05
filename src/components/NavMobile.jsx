import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const NavMobile = ({ navigate }) => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <>
      <div className="navMobile row ">
        <div
          className="navMobile__menu col-4"
          onClick={() => setshowMenu(!showMenu)}
        >
          {showMenu ? "X" : "=="}
        </div>
        <div className="navMobile__home col-4" onClick={() => navigate("/")}>
          LDS
        </div>
      </div>

      <div className={showMenu ? "modal" : "modal d-none"}>
        <div className="modal__links">
          <a
            onClick={() => {
              navigate("/"), setshowMenu(!showMenu);
            }}
          >
            About
          </a>
          <a
            onClick={() => {
              navigate("/portfolio"), setshowMenu(!showMenu);
            }}
          >
            Portfolio
          </a>
          <a>
            <FaLinkedinIn className="linkedinMobile" size={30} />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
