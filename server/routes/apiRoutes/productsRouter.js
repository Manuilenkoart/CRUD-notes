const router = require("express").Router();

const {
  postProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../../controllers/index");

router.get("/", getProduct);
router.delete("/", deleteProduct);
router.put("/", updateProduct);
router.post("/", postProduct);

module.exports = router;
