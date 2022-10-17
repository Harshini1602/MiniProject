const express = require("express");

const router = express.Router();

const {
  listAllProduct,
  createOneProduct,
  updateOneProduct,
  deleteProduct,
} = require("../controllers/controllers.js");

router.get("/", listAllProduct);

router.post("/", createOneProduct);

router.put("/:id", updateOneProduct);

router.delete("/:id", deleteProduct);

module.exports = router;