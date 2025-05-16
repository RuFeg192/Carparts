const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const product = await Product.create({ name, price, description });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
