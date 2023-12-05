import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavMobile from "./NavMobile";

const Navegation = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="d-none d-md-block">
        <div className="navBar">
          <div className="navBar__home">LDS</div>
          <div className="navBar__links">
            <a onClick={() => navigate("/")}>About</a>
            <a onClick={() => navigate("/portfolio")}>Portfolio</a>
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
