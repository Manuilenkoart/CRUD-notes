const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const Schema = mongoose.Schema;
const ProductScheme = new Schema({
  name: String,
  price: Number,
  category: String,
  provider: String,
  shelfLife: Number,
  quantity: Number,
  text: String,
  countId: Number,
});
ProductScheme.plugin(autoIncrement.plugin, {
  model: "Product",
  field: "countId",
});

module.exports = mongoose.model("Product", ProductScheme);
