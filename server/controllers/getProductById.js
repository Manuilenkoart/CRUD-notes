const { getProductByIdDB } = require("../db/mongoActions");

const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    await getProductByIdDB(productId).then((data) => {
      if (data) {
        res.status(200).json({
          status: "success",
          data,
        });
      } else {
        res.status(500).send("Server error");
      }
    });
  } catch (err) {
    console.error(err.message);

    // check if error was caused by wrong ID
    if (err.kind == "ObjectId") {
      return res.status(404).json({ err: "Product not found" });
    }

    res.status(500).send("Server error");
  }
};
module.exports = getProductById;
