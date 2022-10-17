const AudioProduct = require("../../models/Electronics/Audiomodels.js");

exports.createOneProduct = (req, res) => {
  AudioProduct.create(req.body)
    .then((audio) => {
      console.log({ audio });
      res.json({
        message: "Cheers!! You have successfully added audio",
        audio,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your audio cannot be added",
        error: err.message,
      });
    });
};
exports.listAllProduct = (req, res) => {
  AudioProduct.find()
    .then((audio) => {
      console.log({ audio });
      res.json(audio);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isn't any audio available", error: err.message });
    });
};

exports.updateOneProduct = (req, res) => {
 AudioProduct.findByIdAndUpdate(req.params.id, req.body)
    .then((audio) => {
      console.log({ audio });
      return res.json({
        message: "Cheers!! You have successfully updated audio",
        audio,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your audio cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteProduct = (req, res) => {
  AudioProduct.findByIdAndRemove(req.params.id, req.body)
    .then((audio) => {
      console.log({ audio });
      res.json({
        message: "Cheers!! You have successfully deleted your audio",
        audio,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your audio is not there",
        error: err.message,
      });
    });
};