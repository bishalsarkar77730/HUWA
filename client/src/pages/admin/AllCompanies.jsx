import React, { useState, useEffect } from "react";
import "../Styles/Datagrid.css";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Datares = await axios.get("/company");
        setTableData(Datares.data);
      } catch (error) {
        alert("Your are not an Admin please login as Admin and Try again");
        navigate("/");
      }
    };
    fetchData();
  }, [navigate]);
  return (
    <Box sx={{ height: "90vh", width: "100%", padding: "22px 96px" }}>
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
