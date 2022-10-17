const express = require("express");

const router = express.Router();

const {
  listAllProduct,
  createOneProduct,
  updateOneProduct,
  deleteProduct,
} = require("../../controllers/Grocery/Vegetablecontroller");

router.get("/", listAllProduct);

router.post("/", createOneProduct);

router.put("/:id", updateOneProduct);

router.delete("/:id", deleteProduct);

module.exports = router;