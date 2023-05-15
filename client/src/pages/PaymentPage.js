import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stripe from "../components/Stripe";

function PaymentPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <Stripe />
      <Footer />
    </>
  );
}

export default PaymentPage;
