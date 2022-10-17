const mongoose = require("mongoose");

const FruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const FruitProduct = mongoose.model("fruit", FruitSchema);

module.exports = FruitProduct;