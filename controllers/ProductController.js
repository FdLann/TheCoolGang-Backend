// controllers/ProductController.js

import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveProduct = async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const file = req.files.file;
  const fileName = `${file.md5}${path.extname(file.name)}`;
  const filePath = path.resolve("./public/images", fileName);

  file.mv(filePath, async (err) => {
    if (err) return res.status(500).json({ message: err.message });

    try {
      const product = await Product.create({
        name: req.body.name,
        image: fileName,
        url: `/images/${fileName}`,
        harga: req.body.harga,
        category: req.body.category, // Menambahkan category ke data yang disimpan
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  let fileName = product.image;
  if (req.files && req.files.file) {
    const file = req.files.file;
    fileName = `${file.md5}${path.extname(file.name)}`;
    const filePath = path.resolve("public/images", fileName);
    fs.unlinkSync(path.resolve("public/images", product.image));

    file.mv(filePath, (err) => {
      if (err) return res.status(500).json({ message: err.message });
    });
  }

  try {
    await Product.update(req.params.id, {
      name: req.body.name,
      image: fileName,
      url: `/images/${fileName}`,
      harga: req.body.harga,
      category: req.body.category, // Menambahkan category ke data yang diperbarui
    });
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  try {
    fs.unlinkSync(path.resolve("public/images", product.image));
    await Product.destroy(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
