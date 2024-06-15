// models/PromoModel.js
import db from "../config/Database.js";

const Promo = {
  async findAll() {
    const [rows] = await db.query("SELECT * FROM promos");
    return rows;
  },
  async findByPk(id) {
    const [rows] = await db.query("SELECT * FROM promos WHERE id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { title, description, imageUrl } = data;
    const [result] = await db.query("INSERT INTO promos (title, description, imageUrl) VALUES (?, ?, ?)", [title, description, imageUrl]);
    return { id: result.insertId, ...data };
  },
  async destroy(id) {
    await db.query("DELETE FROM promos WHERE id = ?", [id]);
  },
};

export default Promo;
