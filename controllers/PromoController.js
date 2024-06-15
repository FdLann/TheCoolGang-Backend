// controllers/PromoController.js
import Promo from "../models/PromoModel.js";
import path from "path";
import fs from "fs";

export const getPromos = async (req, res) => {
  try {
    const promos = await Promo.findAll();
    res.status(200).json(promos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPromoById = async (req, res) => {
  try {
    const promo = await Promo.findByPk(req.params.id);
    if (!promo) {
      return res.status(404).json({ message: "Promo not found" });
    }
    res.status(200).json(promo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPromo = async (req, res) => {
  if (!req.files || !req.files.image) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const file = req.files.image;
  const fileName = `${file.md5}${path.extname(file.name)}`;
  const filePath = path.resolve("public/images", fileName);

  file.mv(filePath, async (err) => {
    if (err) return res.status(500).json({ message: err.message });

    try {
      const promo = await Promo.create({
        title: req.body.title,
        description: req.body.description,
        imageUrl: `/images/${fileName}`,
      });
      res.status(201).json(promo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};

export const deletePromo = async (req, res) => {
  try {
    const promo = await Promo.findByPk(req.params.id);
    if (!promo) return res.status(404).json({ message: "Promo not found" });

    const filePath = path.resolve(`public${promo.imageUrl}`);
    fs.unlink(filePath, async (err) => {
      if (err) return res.status(500).json({ message: err.message });

      await Promo.destroy(req.params.id);
      res.status(200).json({ message: "Promo deleted successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
