import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51N7sWtJdxWrc5Q3DGzPC9xuUeTzeFKVRuSCgsxFVr25Cl6tsJ4qkigM8kCgUYk6HjTJnkQCYLq9imZXv4Dv4Ihnn00MwS5746h"
);
function Stripe() {
  let paramID = useParams();
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm id_jeux={paramID.id} />
    </Elements>
  );
}
export default Stripe;
