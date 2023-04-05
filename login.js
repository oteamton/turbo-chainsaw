const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the pub directory
app.use(express.static(path.join(__dirname, 'pub')));

// Route for serving the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pub', 'login.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
