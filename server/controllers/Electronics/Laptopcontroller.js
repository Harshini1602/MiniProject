const LaptopProduct = require("../../models/Electronics/Laptopmodels.js");

exports.createOneProduct = (req, res) => {
  LaptopProduct.create(req.body)
    .then((laptop) => {
      console.log({ laptop });
      res.json({
        message: "Cheers!! You have successfully added laptop",
       laptop,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your laptop cannot be added",
        error: err.message,
      });
    });
};
exports.listAllProduct = (req, res) => {
  LaptopProduct.find()
    .then((laptop) => {
      console.log({ laptop });
      res.json(laptop);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isn't any laptop available", error: err.message });
    });
};

exports.updateOneProduct = (req, res) => {
 LaptopProduct.findByIdAndUpdate(req.params.id, req.body)
    .then((laptop) => {
      console.log({ laptop });
      return res.json({
        message: "Cheers!! You have successfully updated laptop",
        laptop,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your laptop cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteProduct = (req, res) => {
  LaptopProduct.findByIdAndRemove(req.params.id, req.body)
    .then((laptop) => {
      console.log({ laptop });
      res.json({
        message: "Cheers!! You have successfully deleted your laptop",
        laptop,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your laptop is not there",
        error: err.message,
      });
    });
};