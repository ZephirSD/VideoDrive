const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

// ------------ Stripe -------------

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

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

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running");
});
// -----------------------------------
