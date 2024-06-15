// controllers/ReviewController.js
import Review from "../models/ReviewModel.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createReview = async (req, res) => {
  try {
    const { star_rating, name, no_telepon, comments } = req.body;
    const newReview = await Review.create({
      star_rating,
      name,
      no_telepon,
      comments,
    });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    if (review) {
      await Review.destroy(id);
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
