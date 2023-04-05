const express = require('express');
const User = require('./user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = new User({ username, password, email });
    await user.save();
    res.status(201).json({ message: 'User created successfully.' });
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error.' });
    }
    });
    
    module.exports = router;
