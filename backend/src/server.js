const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/database');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Set static folder
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Route files
const auth = require('./routes/auth');
const news = require('./routes/news');
const gallery = require('./routes/gallery');

// Mount routers
app.use('/api/auth', auth);
app.use('/api/news', news);
app.use('/api/gallery', gallery);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});