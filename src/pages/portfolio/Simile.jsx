import React from "react";
import { useNavigate } from "react-router-dom";
import KeyProblems from "../../components/portfolio/KeyProblems";
import { simile } from "../../data/dataPorfolio.js";

const Simile = () => {
  const navigate = useNavigate();

  const { info, about, keyProblems, aproach, design, results } = simile;

  return (
    <div
      className="containerBase"
      style={{
        marginTop: "118px",
      }}
    >
      <div className="text-center prestoTextCont">
        <h2>{info.objetive}</h2>
        <p>{info.description}</p>
      </div>

      <div
        className="row"
        style={{
          marginTop: "80px",
        }}
      >
        <div className="col-sm-12 col-md-6">
          <div className="aboutSimileText">
            <h2>{about.title}</h2>
            <p>{about.description}</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 imgSimile">
          <img
            src={about.img1}
            alt="imagenSimile2"
            className="imgSimile__lead"
          />
          <img
            src={about.img2}
            alt="imagenSimile3"
            className="imgSimile__background"
          />{" "}
        </div>
      </div>
      <div
        style={{
          marginTop: "80px",
        }}
      >
        <h2 className="text-center">Key problems</h2>
        <KeyProblems keyProblems={keyProblems} />
      </div>

      <div
        className="row"
        style={{
          marginTop: "80px",
        }}
      >
        <div className="col-sm-12 col-md-6">
          <div className="prestoAproachCont__text">
            <h2>{aproach.title}</h2>
            <p>{aproach.description}</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 imgAproach">
          <img
            src={aproach.img1}
            alt="imagenPresto2"
            className="imgAproach__mvp"
          />
          <img
            src={aproach.img2}
            alt="imagenPresto3"
            className="imgAproach__background"
          />{" "}
        </div>
      </div>

      <div
        className="text-center prestoTextCont"
        style={{
          marginTop: "80px",
        }}
      >
        <h2>{design.title}</h2>
        <p>{design.description}</p>
      </div>

      <div
        className="d-flex flex-column"
        style={{
          marginTop: "80px",
        }}
      >
        <img
          src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1702425748/tiliportoflio/simile/simile_wireframes_nmkipe.png"
          alt="imagenPresto7"
          className="imgSimile4"
        />
        <img
          src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1702425748/tiliportoflio/simile/simile_-_project_detail_avawhp.png"
          alt="imagenPresto8"
          className="imgSimile4"
        />
        <img
          src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1702425748/tiliportoflio/simile/Simile_-_response_detail_zxmk1m.png"
          alt="imagenPresto8"
          className="imgSimile4"
        />
      </div>
      <div style={{ marginTop: "80px" }}>
        <h2 className="text-center">Results</h2>
        <div className="row">
          {results.map((data, index) => {
            return (
              <div
                className="col-12 col-4-sm text-center keyproblems"
                key={index}
              >
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Simile;
