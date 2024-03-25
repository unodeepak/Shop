import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  TableRow,
  TableContainer,
  TableBody,
  TableHead,
  Paper,
  Grid,
  IconButton,
  styled,
  // Table,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TableCell,
} from "@mui/material";
import moment from "moment";
import { Delete, Edit } from "@mui/icons-material";
import { tableCellClasses } from "@mui/material/TableCell";
import axios from "axios";
import UpdateItem from "./updateItem";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ShowItem = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const getData = async () => {
    try {
      const data = await axios.get("http://localhost:5001/api/getAllItems");
      setData(data.data);
    } catch (err) {
      console.log("Error is ", err);
    }
  };

  const onDelete = async (id) => {
    try {
      console.log("yes delete : ", id);
      setIsOpen(false);
      await axios.delete(`http://localhost:5001/api/deleteItem/${id}`);
      await getData();
    } catch (err) {
      console.log("Error is ", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container display="flex" justifyContent="center">
      <Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Category</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="center">Enter By</StyledTableCell>
                <StyledTableCell align="center">Time</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow
                  key={row?._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell align="center">{row?.name}</StyledTableCell>

                  <StyledTableCell align="center">
                    {row?.category}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {row?.quantity}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {row?.enteredBy}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {moment(row?.dateEntered).format("DD-MM-YYYY")}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <IconButton
                      onClick={() =>
                        navigate(`/updateItem`, {
                          state: row,
                        })
                      }
                      color="success"
                    >
                      <Edit />
                    </IconButton>

                    <IconButton
                      color="error"
                      onClick={() => {
                        setDeleteId(row?._id);
                        setIsOpen(true);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Dialog open={isOpen}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsOpen(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={() => onDelete(deleteId)} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ShowItem;
