const { createProduct } = require("../db/mongoActions");
const postProduct = async (req, res) => {
  createProduct(req.body).then((data) => {
    if (data) {
      res.status(201).json({
        status: "success",
      });
    } else {
      res.status(500).send("Server error");
    }
  });
};
module.exports = postProduct;
