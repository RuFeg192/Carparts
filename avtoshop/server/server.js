const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3001;  

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

sequelize.authenticate()
  .then(() => console.log('Connection to the database successful!'))
  .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync({ force: false })
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Error syncing database:', err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});