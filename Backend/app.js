const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db');
const authRoutes = require('./routes/auth');
const authRoutes2 = require('./routes/transactions');

const app = express();

// Connect to MongoDB
db();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/', authRoutes2);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
