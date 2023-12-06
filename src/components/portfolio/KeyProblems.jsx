import React from "react";

const KeyProblems = ({ keyProblems }) => {
  return (
    <>
      <div className="row">
        {keyProblems.map((data, index) => {
          return (
            <div
              className="col-12 col-4-sm text-center keyproblems"
              key={index}
            >
              <h1>{data.number}</h1>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default KeyProblems;
