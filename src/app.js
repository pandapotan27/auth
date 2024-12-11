const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware untuk menangani JSON
app.use(bodyParser.json());

// Import Routes
const authRoutes = require('./routes/authRoutes');

// API Routes
app.use('/api/auth', authRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Port untuk server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});