import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe(
  "pk_test_51N7sWtJdxWrc5Q3DGzPC9xuUeTzeFKVRuSCgsxFVr25Cl6tsJ4qkigM8kCgUYk6HjTJnkQCYLq9imZXv4Dv4Ihnn00MwS5746h"
);
function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
export default Stripe;
