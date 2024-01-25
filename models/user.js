import { pool } from "../db.js";
import bcrypt from "bcrypt";
import "dotenv/config";

class UserModel {
  static async getUserById(id) {
    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  }

  static async createUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );
    return result.insertId;
  }

  static async getUserByEmail(email) {
    const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0]; // Make sure the 'password' property is included in the result
  }

  static async checkPassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}

export default UserModel;
