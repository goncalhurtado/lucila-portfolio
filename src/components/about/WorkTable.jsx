import React from "react";
import DataTable from "react-data-table-component";
import { dataWork } from "../../data/dataWork";

const customStyles = {
  headCells: {
    style: {
      borderTop: "none !important",
    },
  },
  cells: {
    style: {
      borderTop: "solid 1px #4565FF ",
      borderBottom: "solid 1px #4565FF",
      backgroundColor: "#4565FF",
      color: "#FFFFFF",
    },
  },
};

const WorkTable = () => {
  const columns = [
    {
      selector: (row) => (
        <h4 className="" style={{ fontSize: "18px" }}>
          {row.date}
        </h4>
      ),
      width: "180px",
      textAlign: "center",
    },
    {
      selector: (row) => <p style={{ fontSize: "19px" }}>{row.company}</p>,
      width: "250px",
    },
    {
      selector: (row) => <p style={{ fontSize: "19px" }}>{row.rol}</p>,
    },
  ];

  return (
    <DataTable data={dataWork} columns={columns} customStyles={customStyles} />
  );
};

export default WorkTable;
