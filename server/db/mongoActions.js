const ProductModel = require("../models/productsModel");

const getAllProductsDb = async () => {
  try {
    const allProducts = await ProductModel.find()
      .limit(20)
      .sort({ countId: -1 });
    return allProducts;
  } catch (err) {
    console.error(err.message);
  }
};
const createProduct = async (productIncome) => {
  const product = new ProductModel(productIncome);

  try {
    const savedProduct = await product.save();
    return savedProduct;
  } catch (err) {
    console.error(err.message);
  }
};

const deleteProd = async (productId) => {
  try {
    const product = await ProductModel.findOne(productId);
    await product.deleteOne();
    return product.name;
  } catch (err) {
    console.error(err.message);
  }
};
module.exports = { getAllProductsDb, createProduct, deleteProd };
