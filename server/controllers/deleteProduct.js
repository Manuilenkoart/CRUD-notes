const { deleteProd } = require("../db/mongoActions");

const deleteProduct = async (req, res) => {
  try {
    await deleteProd(req.body).then((data) => {
      if (!data) {
        return res.status(404).json({ err: "Product not found" });
      }
      res.send(`Product "${data}" was deleted`);
    });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server error");
  }
};

module.exports = deleteProduct;
