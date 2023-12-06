import React from "react";
import KeyProblems from "../../components/portfolio/KeyProblems";
import { presto } from "../../data/dataPorfolio.js";
import Contact from "../../components/about/Contact.jsx";
import { useNavigate } from "react-router-dom";

const Presto = () => {
  const navigate = useNavigate();

  const { title, objetive, description, keyProblems } = presto;

  return (
    <div
      className="containerBase"
      style={{
        marginTop: "118px",
      }}
    >
      <div className="text-center prestoTextCont">
        <h4>{title}</h4>
        <h2>{objetive}</h2>
        <p>{description}</p>
      </div>

      <div className="contPrest1">
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
      <div className="row">
        <div className="col">
          <div className="text-center">
            <h2>Approach</h2>
            <p>
              After a deep review and understanding of all the problems,
              opportunities, users, and competition, we defined with the Presto
              team the list of main functionalities for the patients.
            </p>
          </div>
        </div>
        <div className="col">
          <img src="" alt="imagenPresto2" />
        </div>
      </div>
      <div className="text-center">
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
        <div className="col-6">
          <img src="" alt="imagenPresto3" />
        </div>
        <div className="col-6">
          <img src="" alt="imagenPresto4" />
        </div>
        <div className="col-12">
          <img src="" alt="imagenPresto5" />
        </div>
      </div>
      <div className="text-center">
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
        <img src="" alt="imagenPresto6" />
        <img src="" alt="imagenPresto7" />
      </div>
      <div className="text-end">
        <div
          className="btn btn-primary"
          onClick={() => navigate("/porfolio/simile")}
        >
          Simile
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Presto;
