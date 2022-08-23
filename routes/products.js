const { getProducts, productRegister } = require("../controllers/product");

const router = require("express").Router();

router.post("/", productRegister);
router.get("/", getProducts);
module.exports = router;
