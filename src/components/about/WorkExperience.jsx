import React from "react";
import WorkTable from "./WorkTable";
import WorkTableMobile from "./WorkTableMobile";

export const WorkExperience = () => {
  return (
    <div>
      <h2>
        Work <br />
        experience
      </h2>
      <div className="row">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-8">
          <div className="d-none d-sm-block">
            <WorkTable />
          </div>
          <div className="d-block d-sm-none">
            <WorkTableMobile />
          </div>
        </div>
      </div>
    </div>
  );
};
