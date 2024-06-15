// models/ReviewModel.js
import db from "../config/Database.js";

const Review = {
  async findAll() {
    const [rows] = await db.query("SELECT * FROM reviews");
    return rows;
  },
  async findByPk(id) {
    const [rows] = await db.query("SELECT * FROM reviews WHERE id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { star_rating, name, no_telepon, comments } = data;
    const [result] = await db.query("INSERT INTO reviews (star_rating, name, no_telepon, comments) VALUES (?, ?, ?, ?)", [star_rating, name, no_telepon, comments]);
    return { id: result.insertId, ...data };
  },
  async destroy(id) {
    await db.query("DELETE FROM reviews WHERE id = ?", [id]);
  },
};

export default Review;
