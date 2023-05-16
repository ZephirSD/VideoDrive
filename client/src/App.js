import React, { useEffect, useState } from "react";
import "./style/style.scss";
import HomePage from "./pages/HomePage";
import ListeProduit from "./pages/ListeProduit";
import FicheProduit from "./pages/FicheProduit";
import PaymentPage from "./pages/PaymentPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
function App() {
  const [jeuxListe, setjeuxListe] = useState([]);
  const fetchJeux = () => {
    axios
      .get("http://127.0.0.1:4000/api/jeux")
      .then((response) => setjeuxListe(response.data));
  };
  useEffect(() => {
    fetchJeux();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage jeuxListe={jeuxListe} />}></Route>
        <Route
          path="/listeProduit"
          element={<ListeProduit jeuxListe={jeuxListe} />}
        ></Route>
        <Route path="/ficheProduit/:id" element={<FicheProduit />}></Route>
        <Route path="/paymentPage/:id" element={<PaymentPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
