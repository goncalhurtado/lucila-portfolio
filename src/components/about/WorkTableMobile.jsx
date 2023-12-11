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

const WorkTableMobile = () => {
  const columns = [
    {
      selector: (row) => (
        <>
          <h4 className="" style={{ fontSize: "18px" }}>
            {row.date}
          </h4>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "30px",
              wordWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            {row.company}
          </p>
        </>
      ),
      width: "160px",
    },
    {
      selector: (row) => (
        <p
          style={{
            fontSize: "19px",
            lineHeight: "30px",
            wordWrap: "break-word",
            whiteSpace: "normal",
          }}
        >
          {row.rol}
        </p>
      ),
      width: "210px",
    },
  ];

  return (
    <DataTable data={dataWork} columns={columns} customStyles={customStyles} />
  );
};

export default WorkTableMobile;
