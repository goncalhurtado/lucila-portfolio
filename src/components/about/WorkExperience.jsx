import React from "react";
import WorkTable from "./WorkTable";

export const WorkExperience = () => {
  return (
    <div>
      <h2>
        Work <br />
        experience
      </h2>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
          <WorkTable />
        </div>
      </div>
    </div>
  );
};
