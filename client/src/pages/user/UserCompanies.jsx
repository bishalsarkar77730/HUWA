import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Datagrid.css";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

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
  {
    field: "Edit",
    headerName: "Edit",
    sortable: false,
    width: 20,
    renderCell: () => (
      <Link to="/Edit-company" style={{ color: "white" }}>
        <EditIcon />
      </Link>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    sortable: false,
    width: 70,
    renderCell: () => (
      <Link to="/delete-company" style={{ color: "red" }}>
        <DeleteIcon />
      </Link>
    ),
  },
];

const UserCompanies = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Datares = await axios.get("/company/user/Companys");
        setTableData(Datares.data);
      } catch (error) {
        alert(error.response.data.message);
        navigate("/signin");
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

export default UserCompanies;
