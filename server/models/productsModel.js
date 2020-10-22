const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductScheme = new Schema(
  {
    name: String,
    price: String,
    category: String,
    provider: String,
    shelfLife: String,
    quantity: String,
    text: String,
  },
  { versionKey: true }
);
module.exports = mongoose.model("Product", ProductScheme);
