const express = require('express');
const app = express();
const sequelize = require('./sequelize');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors')
const helmet = require('helmet');
const xss = require ('xss-clean');
const rateLimiter = require ('express-rate-limit');

require('dotenv').config({ path: './backend/.env' });

 // Use this after the variable declaration
// Create Express app
const port = process.env.PORT || 3001;

// Define routes
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/order.routes');
const categoryRoutes = require('./routes/category.routes');
const cartRoutes = require('./routes/cart.routes');
const authRoutes = require('./routes/auth.routes');


app.use(helmet());
app.use(cors());
app.use(xss());
app.use(rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}))



app.use(errorHandler.errorHandler);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from ecommerce application back-end!');
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
