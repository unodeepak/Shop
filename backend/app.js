require("dotenv").config();

const itemRoutes = require("./routes/itemRoutes");
const userRoutes = require("./routes/userRoutes");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

/* Start the code for routes */
app.use("/api", itemRoutes);
app.use("/api/user", userRoutes);

const connectDB = () => {
  app.listen(port, () => {
    mongoose.connect("mongodb://localhost:27017/inventory", {});
    console.log(`App the running at port:${port}`);
  });
};

connectDB();
