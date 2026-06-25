import express, { Express } from 'express';
import mongoose from 'mongoose';

const app: Express = express();
const PORT = 8000;
const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker Backend is running' });
});

// MongoDB connection
mongoose.connect(MONGODB_URI, {})
  .then(() => {
    console.log('✓ MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('✗ MongoDB connection failed:', error.message);
  });

// Start server
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
