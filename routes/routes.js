import express from "express";

import { authenticateToken } from "../authMiddleware.js";
import { register, login } from "../controllers/userController.js";
import {
  getProducts,
  createProduct,
} from "../controllers/productController.js";
import { getCart, createCart } from "../controllers/cartController.js";
import {
  addProductToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
} from "../controllers/cartItemsController.js";
import { createOrder, getOrders } from "../controllers/ordersController.js";

const router = express.Router();

// User Routes
router.post("/users/register", register);
router.post("/users/login", login);

// Product Routes
router.get("/products", getProducts);
router.post("/products", createProduct);

// cart routes

router.get("/cart/:userId", getCart);
router.post("/cart/:userId", createCart);

// Cart Item Routes
router.post("/cart-items/:cartId/products/:productId", addProductToCart);
router.get("/cart-items/:cartId", getCartItems);
router.put("/cart-items/:cartId/:itemId", updateCartItem);
router.delete("/cart-items/:cartId/:itemId", removeCartItem);

// Order Routes
router.post("/orders/:userId", createOrder);
router.get("/orders/:userId", getOrders);

export default router;
