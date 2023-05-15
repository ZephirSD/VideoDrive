// const mongoose = require('mongoose');
const express = require('express');
const dbConfig = require('./config/db.config');
const router = require('./routes/jeuxRoutes');
const app = express();
const port = 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require('./routes/jeuxRoutes')(app);

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
