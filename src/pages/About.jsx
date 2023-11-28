import React from "react";
import Services from "../components/about/Services";
import Profile from "../components/about/Profile";
import Contact from "../components/about/Contact";
import { WorkExperience } from "../components/about/WorkExperience";

const About = () => {
  return (
    <div className="containerBase">
      <h1>
        Hi! I’m Lucila,
        <br /> Digital product designer
      </h1>
      <p className="basedAbout">Based in Buenos Aires</p>
      <h1 className="m-0 hr">—</h1>
      <div>
        <Profile />
      </div>
      <div className="contenWraper">
        <h1 className="textAbout ">
          Understanding the problem and crafting solutions that align with the
          needs of both <strong>users and businesses.</strong>
        </h1>
      </div>
      <div
        style={{
          paddingTop: "80px",
        }}
      >
        <Services />
      </div>
      <div className="contenWraper">
        <WorkExperience />
      </div>
      <div
        // className="contenWraper"
        style={{
          paddingTop: "40px",
          paddingBottom: "80px",
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default About;
