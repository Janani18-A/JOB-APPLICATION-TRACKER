const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const authenticateToken = require('../middleware/auth'); // JWT middleware

// Add a new job
router.post('/add', authenticateToken, async (req, res) => {
  try {
    const { title, company, location, salary, eligibility, role, experience, description } = req.body;
    const job = new Job({
      title,
      company,
      location,
      salary,
      eligibility,
      role,
      experience,
      description,
      postedBy: req.user.id
    });
    await job.save();
    res.status(201).json({ message: 'Job added successfully', job });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().populate('postedBy', 'username email');
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
