const { updateProductDb } = require("../db/mongoActions");

const updateProduct = async (req, res) => {
  await updateProductDb(req.body).then((data) => {
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

module.exports = updateProduct;
