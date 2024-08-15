import React from "react";
import Categories from "../menu/Categories";
import Menu from "../menu/Menu";
import "./MenuPage.css";

const MenuPage = () => {
  return (
    <section className="menu section">
      <div className="title">
        <h2>منوی ما</h2>
        <div className="underline"></div>
      </div>
      <Menu />
      <Categories />
    </section>
  );
};

export default MenuPage;
