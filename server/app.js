const express = require('express');
const dbConfig = require('./config/db.config');
const router = require('./routes/jeuxRoutes');
const app = express();
const port = 5000;
const cors = require("cors");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "Application connecté" });
});

require('./routes/jeuxRoutes')(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
