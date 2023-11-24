import React from "react";
import { strategy, design } from "../../data/dataServices";

const Services = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Services</h2>
        </div>
        <div className="col">
          <h5>{strategy.title}</h5>
          {strategy.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
        <div className="col">
          <h5>{design.title}</h5>
          {design.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
