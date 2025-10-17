require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
const jobRoutes = require('./routes/jobRoutes');
app.use('/api/jobs', jobRoutes);


// Test route
app.get('/', (req, res) => {
  res.send('Job Tracker Backend is running');
});



const authenticateToken = require('./middleware/auth');

app.get('/api/dashboard', authenticateToken, (req, res) => {
  res.json({ message: `Hello ${req.user.email}, welcome to your dashboard` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

