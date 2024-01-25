import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  const products = await Product.getProducts();
  res.json(products);
};

export const createProduct = async (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.image || !req.body.quantity) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const product = await Product.createProduct(
    req.body.name,
    req.body.price,
    req.body.image,
    req.body.quantity
  );
  res.status(201).json(product);
};
