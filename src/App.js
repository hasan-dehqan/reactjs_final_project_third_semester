import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMenus } from "./features/menu/menuSlice";
import Header from "./components/shared/header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import MenuPage from "./components/menu/MenuPage";
import MenuHomePage from "./components/MenuHomePage/MenuHomePage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import ReservationPage from "./components/Reservation/ReservationPage";
import AdminPanel from "./components/Admin/AdminPanel";
import CartPage from "./components/CartPage/CartPage";
import Footer from "./components/shared/footer/Footer.js";
import { Toaster } from "react-hot-toast";
import List from "./components/List.jsx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  return (
    <div className="App">
      {isOpen ? <List /> : null}
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/rooms/:id" element={<DetailsPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/foods/:id" element={<MenuHomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
