const toggleMenu = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', () => {
menu.classList.toggle('active');
});

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

router.post('/register', (req, res) => {
  // Extract form data from request object
  const { username, email, password } = req.body;

  // Validate form data
  // ...

  // Save form data to database using Mongoose
  const newUser = new User({ username, email, password });
  newUser.save()
    .then(() => {
      res.send('Registration successful!');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal server error');
    });
});

module.exports = router;
