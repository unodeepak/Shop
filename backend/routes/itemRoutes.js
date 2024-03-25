const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// Create a new item
router.post("/createItem", itemController.createItem);

// Update a item
router.put("/updateItem", itemController.updateItem);

// Get all items
router.get("/getAllItems", itemController.getAllItems);

// Delete an item
router.delete("/deleteItem/:id", itemController.deleteItem);

module.exports = router;
