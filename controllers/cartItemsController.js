// cartItemController.js
import CartItem from "../models/cart_item.js";
import Product from "../models/product.js";

export const addProductToCart = async (req, res) => {
  const productId = req.params.productId;
  const cartId = req.params.cartId;
  const quantity = req.body.quantity;

  // Check if the product exists
  const productExists = await Product.getProductById(productId);

  if (!productExists) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Add product to cart
  const id = await CartItem.addProductToCart(productId, cartId, quantity);
  res.status(201).json({ id });
};

export const getCartItems = async (req, res) => {
  const cartItems = await CartItem.getCartItemsByCartId(req.params.cartId);
  res.json(cartItems);
};

export const updateCartItem = async (req, res) => {
  const itemId = req.params.itemId;
  const quantity = req.body.quantity;

  // Check if the cart item exists
  const cartItemExists = await CartItem.getCartItemById(itemId);

  if (!cartItemExists) {
    return res.status(404).json({ message: "Cart item not found" });
  }

  // Update cart item quantity
  await CartItem.updateCartItemQuantity(itemId, quantity);
  res.json({ message: "Cart item updated successfully!" });
};

export const removeCartItem = async (req, res) => {
  const itemId = req.params.itemId;

  // Check if the cart item exists
  const cartItemExists = await CartItem.getCartItemById(itemId);

  if (!cartItemExists) {
    return res.status(404).json({ message: "Cart item not found" });
  }

  // Remove cart item
  await CartItem.removeCartItem(itemId);
  res.json({ message: "Cart item removed successfully!" });
};
