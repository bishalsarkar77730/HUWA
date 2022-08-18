import React, { useState, useEffect } from "react";
import "../Styles/Datagrid.css";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "_id", headerName: "Serial number", width: 250 },
  {
    field: "companyname",
    headerName: "Company name",
    width: 220,
    editable: true,
  },
  {
    field: "companyaddress",
    headerName: "Company Address",
    width: 220,
    editable: true,
  },
  {
    field: "permonthSallary",
    headerName: "Sallary / month",
    width: 150,
    editable: true,
  },
  {
    field: "startingDate",
    headerName: "Starting Date",
    width: 150,
    editable: true,
  },
  {
    field: "endingDate",
    headerName: "Ending Date",
    width: 160,
    editable: true,
  },
];

const AllCompanies = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Datares = await axios.get("/company");
        setTableData(Datares.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Box sx={{ height: "73.8vh", width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={tableData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default AllCompanies;
