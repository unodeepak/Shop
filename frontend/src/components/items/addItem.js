import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { FETCH_URL } from "../../fetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    enteredBy: "",
    dateEntered: new Date().toISOString().split("T")[0], // Default to today's date
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
      console.log("Data is: ", formData);
      await axios.post(`${FETCH_URL}/createItem`, formData);
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
            Add Item
          </Button>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </form>
  );
};

export default AddItem;
