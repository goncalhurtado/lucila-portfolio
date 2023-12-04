import React from "react";
import { strategy, design } from "../../data/dataServices";

const Services = () => {
  return (
    <>
      <div className="row servicesCont">
        <div className="col-12 col-md-4">
          <h2>Services</h2>
        </div>
        <div className="col-12 col-md-4">
          <h4 style={{ marginBottom: "36px" }}>{strategy.title}</h4>
          {strategy.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
        <div className="col-12 col-md-4">
          <h4 style={{ marginBottom: "36px" }}>{design.title}</h4>
          {design.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
