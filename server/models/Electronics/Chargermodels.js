const mongoose = require("mongoose");

const ChargerSchema = new mongoose.Schema({
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

const ChargerProduct = mongoose.model("charger", ChargerSchema);

module.exports = ChargerProduct;