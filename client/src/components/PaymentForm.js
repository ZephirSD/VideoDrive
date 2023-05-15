import React, { useEffect, useState } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import cvc from "../assets/images/paiement/cvc.PNG";
import visa from "../assets/images/paiement/visa.PNG";

export default function PaymentForm({ id_jeux }) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardCvcElement,
        CardExpiryElement,
        CardNumberElement
      ),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 10000,
          id,
        });

        if (response.data.success) {
          console.log("Successful Payment");
          setSuccess(true);
          await axios.post("http://127.0.0.1:4000/api/paiement", {
            compte: id,
            id_jeux: id_jeux
          })
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "black",
        fontWeight: 100,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",

        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "black" },
        "::placeholder": { color: "black" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "black",
      },
    },
  };

  const [jeuxIdListe, setjeuxIdListe] = useState([]);
  const fetchJeuxId = async () => {
    await axios
      .get(`http://127.0.0.1:4000/api/jeux/${id_jeux}`)
      .then((response) => setjeuxIdListe(response.data));
  };
  useEffect(() => {
    fetchJeuxId();
  }, []);

  let quantite = 1;
  return (
    <>
      <div className="content-app-pay">
        <div className="recap-content">
          <h2>Récapitulatif</h2>
          <div>
            <div className="recap-content-article">
              <span>{`${quantite}`} article</span>
              <span className="total-price-pay">{`${jeuxIdListe.prix_neuf} €`}</span>
            </div>
            <div>Livraison gratuite</div>
          </div>

          <div className="recap-content-total">
            <span>Total</span>
            <span className="total-price-pay">{`${
              jeuxIdListe.prix_neuf * quantite
            } €`}</span>
          </div>
        </div>
        <div className="pay-content">
          <h2>Paiement</h2>
          {!success ? (
            <form onSubmit={handleSubmit}>
              <h3>Carte bancaire</h3>
              <fieldset className="FormGroup">
                <div className="FormRow">
                  <CardNumberElement options={CARD_OPTIONS} />
                  <img src={visa} alt="" />
                </div>
              </fieldset>
              <div className="date-cvc-form">
                <fieldset className="FormGroup">
                  <div className="FormRow">
                    <CardExpiryElement options={CARD_OPTIONS} />
                  </div>
                </fieldset>
                <fieldset className="FormGroup">
                  <div className="FormRow">
                    <CardCvcElement options={CARD_OPTIONS} />
                    <img src={cvc} alt="" className="logo-cvc" />
                  </div>
                </fieldset>
              </div>

              <div>
                <button className="pay-button">Payer </button>
              </div>
            </form>
          ) : (
            <div className="payment-success">
              <h2>Paiement réussi</h2>
              <h4 className="Thank-you">Merci pour votre confiance</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
