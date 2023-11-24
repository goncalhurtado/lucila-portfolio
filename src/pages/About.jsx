import React from "react";
import Services from "../components/about/Services";
import Profile from "../components/about/Profile";
import Contact from "../components/about/Contact";
import { WorkExperience } from "../components/about/WorkExperience";

const About = () => {
  return (
    <div className="container">
      <h1>
        Hi! I’m Lucila,
        <br /> Digital product designer
      </h1>
      <p>Based in Buenos Aires</p>
      <hr />
      <div>
        <Profile />
      </div>
      <div>
        <h1>
          Understanding the problem and crafting solutions that align with the
          needs of both <strong>users and businesses.</strong>
        </h1>
      </div>
      <div>
        <Services />
      </div>
      <div>
        <WorkExperience />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default About;
