import Cart from "../models/cart.js";

export const getCart = async (req, res) => {
  const cart = await Cart.getCartByUserId(req.params.userId);
  res.json(cart);
};

export const createCart = async (req, res) => {
  const id = await Cart.createCart(req.params.userId);
  res.status(201).json({ id });
};
