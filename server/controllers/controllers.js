const AppProduct = require("../models/models.js");

exports.createOneProduct = (req, res) => {
  AppProduct.create(req.body)
    .then((product) => {
      console.log({ product });
      res.json({
        message: "Cheers!! You have successfully added product",
        product,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your product cannot be added",
        error: err.message,
      });
    });
};
exports.listAllProduct = (req, res) => {
  AppProduct.find()
    .then((product) => {
      console.log({ product });
      res.json(product);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isnt any product available", error: err.message });
    });
};

exports.updateOneProduct = (req, res) => {
  AppProduct.findByIdAndUpdate(req.params.id, req.body)
    .then((product) => {
      console.log({ product });
      return res.json({
        message: "Cheers!! You have successfully updated Product",
        product,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your product cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteProduct = (req, res) => {
  AppProduct.findByIdAndRemove(req.params.id, req.body)
    .then((product) => {
      console.log({ product });
      res.json({
        message: "Cheers!! You have successfully deleted your product",
        product,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your product is not there",
        error: err.message,
      });
    });
};