// models/CustomerReview.js
import db from "../config/Database.js";

const CustomerReview = {
  async findAll() {
    try {
      const [rows] = await db.query("SELECT * FROM customer_reviews");
      return rows;
    } catch (error) {
      throw new Error(`Error while fetching customer reviews: ${error.message}`);
    }
  },

  async findByPk(id) {
    try {
      const [rows] = await db.query("SELECT * FROM customer_reviews WHERE id = ?", [id]);
      return rows[0];
    } catch (error) {
      throw new Error(`Error while fetching customer review with ID ${id}: ${error.message}`);
    }
  },

  async create(data) {
    const { imageUrl, description } = data;
    try {
      const [result] = await db.query("INSERT INTO customer_reviews (imageUrl, description) VALUES (?, ?)", [imageUrl, description]);
      return { id: result.insertId, imageUrl, description };
    } catch (error) {
      throw new Error(`Error while creating customer review: ${error.message}`);
    }
  },

  async destroy(id) {
    try {
      await db.query("DELETE FROM customer_reviews WHERE id = ?", [id]);
    } catch (error) {
      throw new Error(`Error while deleting customer review with ID ${id}: ${error.message}`);
    }
  },
};

export default CustomerReview;
