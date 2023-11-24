import React from "react";

const KeyProblems = ({ keyProblems }) => {
  console.log(keyProblems);
  return (
    <>
      <div className="row">
        {keyProblems.map((data, index) => {
          return (
            <div className="col text-center" key={index}>
              <h1>{data.number}</h1>
              <h5>{data.title}</h5>
              <p>{data.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default KeyProblems;
