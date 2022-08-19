import React, { useState, useEffect } from "react";
import "../Styles/Datagrid.css";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const columns = [
  { field: "_id", headerName: "Serial number", width: 250 },
  {
    field: "username",
    headerName: "User Name",
    width: 180,
    editable: true,
  },
  {
    field: "firstname",
    headerName: "First Name",
    width: 200,
    editable: true,
  },
  {
    field: "lastname",
    headerName: "Last Name",
    width: 180,
    editable: true,
  },
  {
    field: "number",
    headerName: "Contact num.",
    width: 180,
    editable: true,
  },
  {
    field: "adharnum",
    headerName: "Adhar Num.",
    width: 180,
    editable: true,
  },
  {
    field: "address",
    headerName: "Address",
    width: 180,
    editable: true,
  },
  {
    field: "Sallaryaspect",
    headerName: "Aspected Sallary",
    width: 180,
    editable: true,
  },
  {
    field: "employment",
    headerName: "Employment",
    width: 180,
    editable: true,
  },
  {
    field: "proffession",
    headerName: "Proffession",
    width: 180,
    editable: true,
  },
  {
    field: "role",
    headerName: "Role",
    width: 180,
    editable: true,
  },
  {
    field: "Edit",
    headerName: "Edit",
    sortable: false,
    width: 20,
    renderCell: () => (
      <Link to="/admin-userEdits" style={{ color: "white" }}>
        <EditIcon />
      </Link>
    ),
  },
];

const AllUsers = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Datares = await axios.get("/user");
        setTableData(Datares.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ height: "90vh", width: "100%", padding: "22px 96px" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={tableData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
      />
    </Box>
  );
};

export default AllUsers;
