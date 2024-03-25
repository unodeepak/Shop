const ItemModel = require("../models/itemModel");

// Create a new item
exports.createItem = async (req, res) => {
  try {
    console.log(req.body);
    await ItemModel.create(req.body);

    return res.status(200).json({ msg: "Data Created", success: true });
  } catch (error) {
    // console.log("Error is ", error);
    return res.status(400).json({ msg: error.message, success: false });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { category, dateEntered, enteredBy, name, quantity, id } = req.body;
    await ItemModel.findByIdAndUpdate(id, {
      $set: {
        category,
        dateEntered,
        enteredBy,
        name,
        quantity,
      },
    });

    return res.status(201).json({ msg: "Data updated", success: true });
  } catch (error) {
    // console.log("Error is ", error);
    return res.status(400).json({ msg: error.message, success: false });
  }
};

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await ItemModel.find({});
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ msg: error.message, success: false });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    await ItemModel.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ msg: "Item deleted successfully", success: true });
  } catch (error) {
    return res.status(500).json({ msg: error.message, success: false });
  }
};
