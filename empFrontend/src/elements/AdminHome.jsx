import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { Link } from "react-router-dom";
import Addemp from "./Addemp";
import NavbarAdm from "./NavbarAdm";
import axiosInstance from "./axiosinterceptor";

const AdminHome = () => {
  var [update, setUpdate] = useState(false);
  var [singleValue, setSingleValue] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("mern-deploy-api-silk.vercel.app/emp/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function removeBlog(id) {
    axiosInstance
      .delete("mern-deploy-api-silk.vercel.app/emp/remove/" + id)
      .then((res) => {
        alert(res.data);
        window.location.reload(false);
      });
  }

  const updateBlog = (val) => {
    console.log("update clicked", val);
    setUpdate(true);
    setSingleValue(val);
  };

  let finalJSX = (
    <div style={{ margin: "7%", textAlign: "right" }}>
      <Button
        variant="outlined"
        style={{
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to={"/empform"}
          style={{ textDecoration: "none", color: "green" }}
        >
          Add New Employee
        </Link>
      </Button>
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ backgroundColor: "black" }}>
              <TableRow>
                <TableCell style={{ color: "white" }}>Employee Name</TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Email
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                Designation
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Location
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Delete
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Update
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((val, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {val.name}
                  </TableCell>
                  <TableCell align="right">{val.email}</TableCell>
                  <TableCell align="right">{val.position}</TableCell>
                  <TableCell align="right">{val.location}</TableCell>
                  <TableCell align="right">
                    <DeleteIcon 
                      style={{ cursor: "pointer" } }
                      onClick={() => {
                        removeBlog(val._id);
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <SyncAltIcon color="success" 
                      style={{ cursor: "pointer" }}
                      onClick={() => updateBlog(val)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
  if (update) finalJSX = <Addemp method="put" data={singleValue} />;
  return finalJSX;
};

export default AdminHome;
