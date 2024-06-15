// models/ProductModel.js
import db from "../config/Database.js";

const Product = {
  async findAll() {
    const [rows] = await db.query("SELECT * FROM products");
    return rows;
  },
  async findByPk(id) {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { name, image, url, harga, category } = data;
    const [result] = await db.query("INSERT INTO products (name, image, url, harga, category) VALUES (?, ?, ?, ?, ?)", [name, image, url, harga, category]);
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { name, image, url, harga, category } = data;
    await db.query("UPDATE products SET name = ?, image = ?, url = ?, harga = ?, category = ? WHERE id = ?", [name, image, url, harga, category, id]);
  },
  async destroy(id) {
    await db.query("DELETE FROM products WHERE id = ?", [id]);
  },
};

export default Product;
