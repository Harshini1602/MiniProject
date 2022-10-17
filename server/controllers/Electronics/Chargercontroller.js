const ChargerProduct = require("../../models/Electronics/Chargermodels.js");

exports.createOneProduct = (req, res) => {
  ChargerProduct.create(req.body)
    .then((charger) => {
      console.log({ charger });
      res.json({
        message: "Cheers!! You have successfully added charger",
       charger,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your charger cannot be added",
        error: err.message,
      });
    });
};
exports.listAllProduct = (req, res) => {
  ChargerProduct.find()
    .then((charger) => {
      console.log({ charger });
      res.json(charger);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isn't any charger available", error: err.message });
    });
};

exports.updateOneProduct = (req, res) => {
 ChargerProduct.findByIdAndUpdate(req.params.id, req.body)
    .then((charger) => {
      console.log({ charger });
      return res.json({
        message: "Cheers!! You have successfully updated charger",
        charger,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your charger cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteProduct = (req, res) => {
  ChargerProduct.findByIdAndRemove(req.params.id, req.body)
    .then((charger) => {
      console.log({ charger });
      res.json({
        message: "Cheers!! You have successfully deleted your charger",
        charger,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your charger is not there",
        error: err.message,
      });
    });
};