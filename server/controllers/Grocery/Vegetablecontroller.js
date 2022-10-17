const VegetableProduct = require("../../models/Grocery/Vegetablemodels");

exports.createOneProduct = (req, res) => {
  VegetableProduct.create(req.body)
    .then((Vegetable) => {
      console.log({ Vegetable });
      res.json({
        message: "Cheers!! You have successfully added Vegetable",
        Vegetable,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your Vegetable cannot be added",
        error: err.message,
      });
    });
};
exports.listAllProduct = (req, res) => {
  VegetableProduct.find()
    .then((Vegetable) => {
      console.log({ Vegetable });
      res.json(Vegetable);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isn't any Vegetable available", error: err.message });
    });
};

exports.updateOneProduct = (req, res) => {
  VegetableProduct.findByIdAndUpdate(req.params.id, req.body)
    .then((Vegetable) => {
      console.log({ Vegetable });
      return res.json({
        message: "Cheers!! You have successfully updated Vegetable",
        Vegetable,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your Vegetable cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteProduct = (req, res) => {
  VegetableProduct.findByIdAndRemove(req.params.id, req.body)
    .then((Vegetable) => {
      console.log({ Vegetable });
      res.json({
        message: "Cheers!! You have successfully deleted your Vegetable",
        Vegetable,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your Vegetable is not there",
        error: err.message,
      });
    });
};