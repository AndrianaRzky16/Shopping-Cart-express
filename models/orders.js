import { pool } from "../db.js";

class Order {
  static async createOrder(totalPrice, userId) {
    const [result] = await pool.execute(
      "INSERT INTO orders (total_price, user_id) VALUES (?, ?)",
      [totalPrice, userId]
    );
    return result.insertId;
  }

  static async getOrdersByUserId(userId) {
    const [rows] = await pool.execute(
      "SELECT * FROM orders WHERE user_id = ?",
      [userId]
    );
    return rows;
  }
}

export default Order;
