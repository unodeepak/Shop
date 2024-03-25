const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    dateEntered: { type: Date, default: Date.now },
    enteredBy: { type: String, required: true },
  },
  { timestamps: true }
);

const ItemModel = mongoose.model("Items", itemSchema);
module.exports = ItemModel;
