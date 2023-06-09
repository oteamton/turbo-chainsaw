const express = require('express');
const app = express();

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
