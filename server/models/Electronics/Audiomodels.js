const mongoose = require("mongoose");

const AudioSchema = new mongoose.Schema({
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

const AudioProduct = mongoose.model("audio", AudioSchema);

module.exports = AudioProduct;