// models/UserModel.js
import db from "../config/Database.js";

const User = {
  async findOne(email) {
    try {
      const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
      return rows[0];
    } catch (error) {
      throw new Error(`Error while fetching user with email ${email}: ${error.message}`);
    }
  },
  async create(data) {
    const { email, password } = data;
    try {
      const [result] = await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password]);
      return { id: result.insertId, ...data };
    } catch (error) {
      throw new Error(`Error while creating user: ${error.message}`);
    }
  },
};

export default User;
