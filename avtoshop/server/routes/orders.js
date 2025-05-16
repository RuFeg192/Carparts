const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product');
const router = express.Router();


router.post('/', async (req, res) => {
  const { userId, products } = req.body;  
  try {
    const order = await Order.create({ userId, totalAmount: 0 });

    
    const productsInOrder = await Product.findAll({
      where: { id: products }
    });

    await order.setProducts(productsInOrder);

    
    const totalAmount = productsInOrder.reduce((sum, product) => sum + product.price, 0);
    order.totalAmount = totalAmount;
    await order.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;