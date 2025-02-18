const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... database query to fetch user data using userId ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correct handling of missing user
  }
  res.json(userData); // Missing error handling for database query errors
});