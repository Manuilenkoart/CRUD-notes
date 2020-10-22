const router = require("express").Router();

const {
  postProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
} = require("../../controllers/index");

router.get("/", getAllProduct);
router.delete("/", deleteProduct);
router.put("/", updateProduct);
router.post("/", postProduct);

module.exports = router;
