const express = require('express');
const app = express();
// const sequelize = require('./sequelize');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors')
const helmet = require('helmet');
const xss = require ('xss-clean');
const rateLimiter = require ('express-rate-limit');
const { sequelize } = require('./models');  // Adjust the path to your models directory

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
const searchRoutes = require ('./routes/search.routes');


app.use(helmet());

app.use(xss());
app.use(rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}))
app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from this origin
}));


// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('Database & tables created!');
//   })
//   .catch(err => {
//     console.error('Unable to create tables, shutting down...', err);
//     process.exit(1);
//   });
  
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
app.use('/api/search', searchRoutes);

// Start the server

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); // Synchronize models with the database
  })
  .then(() => {
    console.log('Models synchronized...');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });
module.exports = app;
