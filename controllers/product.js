// const Product = require("../models/Product");

const Product = require("../models/Product");

// create a product
const productRegister = async (req, res, next) => {
  const ProductRegister = new Product(req.body);
  try {
    const saveProduct = await ProductRegister.save();
    res.status(200).json(saveProduct);
  } catch (err) {
    next(err);
  }
};

// get products
const getProducts = async (req, res, next) => {
  try {
    const product = await Product.find();
    res.status(200).send(product);
  } catch (err) {
    next(err);
  }
};
const getProductsByCity = async (req, res, next) => {
  try {
    const product = await Product.find({
      location: req.params.city,
    });
    res.status(200).send(product);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  productRegister,
  getProducts,
  getProductsByCity,
};
