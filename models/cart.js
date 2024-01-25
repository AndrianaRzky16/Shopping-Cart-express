import { pool } from "../db.js";
import User from "./user.js";

class Cart {
  static async getCartByUserId(userId) {
    const [rows] = await pool.execute("SELECT * FROM carts WHERE user_id = ?", [
      userId,
    ]);
    return rows[0];
  }

  static async createCart(userId) {
    const [result] = await pool.execute(
      "INSERT INTO carts (user_id) VALUES (?)",
      [userId]
    );
    return result.insertId;
  }
}

export default Cart;
