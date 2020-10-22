const { getAllProductsDb } = require("../db/mongoActions");
const getAllProduct = async (req, res) => {
  getAllProductsDb().then((data) => {
    if (data) {
      res.status(200).json({
        status: "success",
        data,
      });
    } else {
      res.status(500).send("Server error");
    }
  });
};

module.exports = getAllProduct;
