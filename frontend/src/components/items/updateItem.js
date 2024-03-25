import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { FETCH_URL } from "../../fetch";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";

const UpdateItem = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location?.state;
  const [formData, setFormData] = useState({
    name: data?.name,
    category: data?.category,
    quantity: data?.quantity,
    enteredBy: data?.enteredBy,
    dateEntered: moment(data?.dateEntered).format("YYYY-MM-DD"),
    id: data?._id
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createItem = async (e) => {
    e.preventDefault();
    try {
      let data = await axios.put(`${FETCH_URL}/updateItem`, formData);
      console.log(data, formData);
      navigate("/");
    } catch (err) {
      console.log("Error is ", err);
    }
  };

  return (
    <form onSubmit={createItem} sx={{ width: "100%" }}>
      <Grid container spacing={2} p={2}>
        {/* <Grid item xs={12} sm={6}> */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            name="category"
            label="Category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            type="number"
            name="quantity"
            label="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            name="enteredBy"
            label="Entered By"
            value={formData.enteredBy}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="dateEntered"
            label="Date Entered"
            type="date"
            value={formData.dateEntered}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </form>
  );
};

export default UpdateItem;
