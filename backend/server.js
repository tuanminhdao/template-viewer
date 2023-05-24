const express = require('express');
const app = express();
const path = require('path');
const templates = require('./templates.json');

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint to retrieve templates
app.get('/api/templates', (req, res) => {
  res.json(templates);
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
