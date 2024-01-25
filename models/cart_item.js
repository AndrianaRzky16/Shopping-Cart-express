import { pool } from "../db.js";

class CartItem {
  static async addProductToCart(productId, cartId, quantity) {
    // Check if the product exists
    const [productRows] = await pool.execute(
      "SELECT * FROM products WHERE id = ?",
      [productId]
    );

    if (productRows.length === 0) {
      throw new Error("Product does not exist");
    }

    const [result] = await pool.execute(
      "INSERT INTO cart_items (product_id, cart_id, quantity) VALUES (?, ?, ?)",
      [productId, cartId, quantity]
    );

    return result.insertId;
  }

  static async getCartItemsByCartId(cartId) {
    const [rows] = await pool.execute(
      "SELECT * FROM cart_items WHERE cart_id = ?",
      [cartId]
    );
    return rows;
  }

  static async updateCartItemQuantity(id, quantity) {
    await pool.execute("UPDATE cart_items SET quantity = ? WHERE id = ?", [
      quantity,
      id,
    ]);
  }

  static async removeCartItem(id) {
    await pool.execute("DELETE FROM cart_items WHERE id = ?", [id]);
  }

  static async getCartItemById(itemId) {
    const [rows] = await pool.execute("SELECT * FROM cart_items WHERE id = ?", [
      itemId,
    ]);
    return rows[0];
  }
}

export default CartItem;
