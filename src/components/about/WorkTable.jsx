import React from "react";
import DataTable from "react-data-table-component";
import { dataWork } from "../../data/dataWork";

const WorkTable = () => {
  const columns = [
    {
      name: "",
      selector: (row) => row.date,
    },
    {
      name: "",
      selector: (row) => row.company,
    },
    {
      name: "",
      selector: (row) => row.rol,
    },
  ];

  return <DataTable data={dataWork} columns={columns} />;
};

export default WorkTable;
