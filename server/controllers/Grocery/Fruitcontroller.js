const FruitProduct = require("../../models/Grocery/Fruitmodels.js");

exports.createOneProduct = (req, res) => {
  FruitProduct.create(req.body)
    .then((fruit) => {
      console.log({ fruit });
      res.json({
        message: "Cheers!! You have successfully added fruit",
        fruit,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your fruit cannot be added",
        error: err.message,
      });
    });
};
exports.listAllProduct = (req, res) => {
  FruitProduct.find()
    .then((fruit) => {
      console.log({ fruit });
      res.json(fruit);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isn't any fruit available", error: err.message });
    });
};

exports.updateOneProduct = (req, res) => {
  FruitProduct.findByIdAndUpdate(req.params.id, req.body)
    .then((fruit) => {
      console.log({ fruit });
      return res.json({
        message: "Cheers!! You have successfully updated fruit",
        fruit,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your fruit cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteProduct = (req, res) => {
  FruitProduct.findByIdAndRemove(req.params.id, req.body)
    .then((fruit) => {
      console.log({ fruit });
      res.json({
        message: "Cheers!! You have successfully deleted your fruit",
        fruit,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your fruit is not there",
        error: err.message,
      });
    });
};