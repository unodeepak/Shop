const express = require("express");
const router = express.Router();
const itemController = require("../controllers/userController");

// Create a new item
router.post("/createUser", itemController.createUser);

module.exports = router;
