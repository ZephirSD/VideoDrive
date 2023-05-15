import React from "react";
import "./style/style.scss";
import HomePage from "./pages/HomePage";
import FicheProduit from "./pages/FicheProduit";
import PaymentPage from "./pages/PaymentPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    // <HomePage />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/ficheProduit" element={<FicheProduit />}></Route>
        <Route path="/paymentPage" element={<PaymentPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
