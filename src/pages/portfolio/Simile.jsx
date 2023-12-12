import React from "react";
import KeyProblems from "../../components/portfolio/KeyProblems";
import { simile } from "../../data/dataPorfolio.js";
import Contact from "../../components/about/Contact.jsx";
import { useNavigate } from "react-router-dom";

const Simile = () => {
  const navigate = useNavigate();

  const { info, keyProblems, aproach, design, results } = simile;

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

      <div className="row prestoAproachCont">
        <div className="col-12 col-lg-6">
          <div className="prestoAproachCont__text">
            <h2>{aproach.title}</h2>
            <p>{aproach.description}</p>
          </div>
        </div>
        <div className="col-sm-6 col-12  prestoAproachCont__imgs">
          {/* <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791196/tiliportoflio/presto/Project-Presto-4_ebjlmm.png"
            alt="imagenPresto2"
            className="aproachCont__imgs__img1"
          />
          <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791196/tiliportoflio/presto/Project-Presto-3_pp48ko.png"
            alt="imagenPresto3"
            className="aproachCont__imgs__img2"
          /> */}
        </div>
      </div>

      {/* <div className="contPrest1">
        <div className="contPrest1__img">
          <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791196/tiliportoflio/presto/Project-Presto-1_yfcd5v.png"
            alt="imagenPresto"
          />
        </div>
        <div className="contPrest1__text">
          <h4 className="">
            The mobile app brings to the user custom treatment for mental health
            issues and also helps professionals identify severe cases quickly
          </h4>
        </div>
      </div>

      <div>
        <h2 className="text-center">Key problems</h2>
        <KeyProblems keyProblems={keyProblems} />
      </div>
      <div className="row aproachCont">
        <div className="col-12 col-lg-6">
          <div className="aproachCont__text">
            <h2>{aproach.title}</h2>
            <ul>
              {aproach.list.map((item, index) => (
                <>
                  <li key={index}>{item}</li>
                </>
              ))}
            </ul>
            <p>{aproach.description}</p>
          </div>
        </div>
        <div className="col-sm-6 col-12  aproachCont__imgs">
          <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791196/tiliportoflio/presto/Project-Presto-4_ebjlmm.png"
            alt="imagenPresto2"
            className="aproachCont__imgs__img1"
          />
          <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791196/tiliportoflio/presto/Project-Presto-3_pp48ko.png"
            alt="imagenPresto3"
            className="aproachCont__imgs__img2"
          />
        </div>
      </div>
      <div className="text-center prestoTextCont" style={{ marginTop: "80px" }}>
        <h2>An onboarding that emulates the professional practice</h2>
        <p>
          In their daily lives, professionals begin gathering basic information
          from the patient by conducting two questionnaires called GAD-7 and
          PHQ-9. The app needed to replicate this process using the exact same
          scales that seek scientific results in order to get the most accurate
          diagnosis possible. We analyzed and understood each case scenario and
          provided user flows and wireframes for each.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-12">
          <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791196/tiliportoflio/presto/Project-Presto5_tz6eld.png"
            alt="imagenPresto4"
            className="imgPresto4"
          />
        </div>
        <div className="col-lg-6 col-12">
          <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791197/tiliportoflio/presto/Project-Presto-6_xuz2kq.png"
            alt="imagenPresto5"
            className="imgPresto5"
          />
        </div>
        <div className="col-12">
          <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791196/tiliportoflio/presto/Project-Presto-7_gfflud.png"
            alt="imagenPresto6"
            className="imgPresto6"
          />
        </div>
      </div>
      <div className="text-center prestoTextCont" style={{ marginTop: "80px" }}>
        <h2>Custom treatment plan</h2>
        <p>
          During the wireframing phase, we found that we would need the users to
          continuously answer more and more questions. So we came up with the
          idea of adding a graphical path for the user to discover the content.
          The user would navigate through the map in which each module has a
          title. If the user feels represented, they would unblock the module by
          answering questions related. Those answers would provide a custom
          treatment plan that the psychologist and psychiatrists could follow up
          on.
        </p>
      </div>
      <div className="d-flex flex-column">
        <img
          src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791197/tiliportoflio/presto/Project-Presto-8_pehfwr.png"
          alt="imagenPresto7"
          className="imgPresto7"
        />
        <img
          src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1701791197/tiliportoflio/presto/Project-Presto-9_u0ip62.png"
          alt="imagenPresto8"
          className="imgPresto7"
        />
      </div>
      <div className="moreAboutPresto">
        <p>
          Learn more about the project at{" "}
          <a href="https://www.prestoclinic.cat/" target="_blank">
            prestoclinic.cat
          </a>
        </p>
      </div>
      <div className="text-end">
        <div
          className="btn btn-primary"
          onClick={() => navigate("/porfolio/simile")}
        >
          Simile
        </div>
      </div>
      <Contact /> */}
    </div>
  );
};

export default Simile;
