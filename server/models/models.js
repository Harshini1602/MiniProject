const mongoose = require("mongoose");

const ProductListSchema = new mongoose.Schema({
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

const AppProduct = mongoose.model("product", ProductListSchema);

module.exports = AppProduct;