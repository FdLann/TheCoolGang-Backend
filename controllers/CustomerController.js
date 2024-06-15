import Customer from "../models/CustomerModel.js"; // Ensure correct import path
import path from "path";
import fs from "fs";

export const getCustomer = async (req, res) => {
  try {
    const reviews = await Customer.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createCustomer = async (req, res) => {
  try {
    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file = req.files.image;
    const fileName = `${file.md5}${path.extname(file.name)}`;
    const filePath = path.resolve("public/images", fileName);

    file.mv(filePath, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error uploading image" });
      }

      try {
        const review = await Customer.create({
          imageUrl: `/images/${fileName}`,
          description: req.body.description,
        });
        res.status(201).json(review);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating review" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const review = await Customer.findByPk(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    const filePath = path.resolve(`public${review.imageUrl}`);
    fs.unlink(filePath, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error deleting image" });
      }

      await review.destroy();
      res.status(200).json({ message: "Review deleted successfully" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
