import { pool } from "../db.js";

class Product {
  static async getProducts() {
    const [rows] = await pool.execute(
      "SELECT id, name, price, image FROM products"
    );
    return rows;
  }

  static async createProduct(name, price, image, quantity) {
    const [result] = await pool.execute(
      "INSERT INTO products (name, price, image, quantity) VALUES (?, ?, ?,?)",
      [name, price, image, quantity]
    );

    // Fetch the newly created product
    const [newProduct] = await pool.execute(
      "SELECT * FROM products WHERE id = ?",
      [result.insertId]
    );

    return newProduct[0];
  }

  static async getProductById(productId) {
    const [rows] = await pool.execute("SELECT * FROM products WHERE id = ?", [
      productId,
    ]);
    return rows[0];
  }
}

export default Product;
