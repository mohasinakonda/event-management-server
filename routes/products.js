const {
  getProducts,
  productRegister,
  getProductsByCity,
} = require("../controllers/product");

const router = require("express").Router();

router.post("/", productRegister);
router.get("/", getProducts);
router.get("/:city", getProductsByCity);

module.exports = router;
