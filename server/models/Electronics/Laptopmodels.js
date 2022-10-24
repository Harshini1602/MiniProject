const mongoose = require("mongoose");

const LaptopSchema = new mongoose.Schema({
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

const LaptopProduct = mongoose.model("laptop", LaptopSchema);

module.exports = LaptopProduct;