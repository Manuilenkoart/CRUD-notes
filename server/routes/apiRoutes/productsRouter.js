const router = require("express").Router();

const {
  postProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
} = require("../../controllers/index");

router.get("/:id", getProductById);

router.get("/", getAllProduct);

router.delete("/", deleteProduct);
router.put("/", updateProduct);
router.post("/", postProduct);

module.exports = router;
