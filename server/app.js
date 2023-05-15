const express = require('express');
const dbConfig = require('./config/db.config');
const router = require('./routes/jeuxRoutes');
const app = express();
const port = 4000;
const cors = require("cors");

app.use(express.json());

// ------------ Stripe -------------

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Paiment",
      payment_method: id,
      confirm: true,
    });

    console.log("Paiment", payment);
    res.json({
      message: "Paiment effectué avec succès",
      success: true,
    });
  } catch (error) {
    console.log("Erreur", error);
    res.json({
      message: "Echec de paiement",
      success: false,
    });
  }
});
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Application connecté" });
});

require('./routes/jeuxRoutes')(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
