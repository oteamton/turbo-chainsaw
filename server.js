const express = require('express');
const app = express();

// Serve static files from the public folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require('mongoose');
const uri = "mongodb+srv://admintvn:1234@cluster0.yewki0w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to database');
});

const User = require('./models/user');

app.post('/register', async (req, res) => {
  const { name, email, password, birthday, work } = req.body;

  try {
    const user = new User({ name, email, password, birthday, work });
    await user.save();
    res.send('User registered successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
