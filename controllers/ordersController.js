import Order from "../models/orders.js";

export const createOrder = async (req, res) => {
  if (req.body.totalPrice === undefined || req.params.userId === undefined) {
    return res.status(400).json({ message: "Missing required parameters." });
  }
  const id = await Order.createOrder(req.body.totalPrice, req.params.userId);
  res.status(201).json({ id });
};

export const getOrders = async (req, res) => {
  const orders = await Order.getOrdersByUserId(req.params.userId);
  res.json(orders);
};
