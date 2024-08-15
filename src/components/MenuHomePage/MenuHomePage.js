import React, { useEffect } from "react";
import "./MenuHomePage.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenus } from "../../features/menu/menuSlice";
import Loading from "../loading/Loading";
import MenuItem from "./MenuHomePage";
import BannerHeader from "../shared/header/BannerHeader";

const MenuPage = () => {
  const { loading, menus, error } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  return (
    <div>
      <BannerHeader />
      <div className="menuPage">
        <h1 className="menuPage-title">منوی غذا</h1>
        {loading ? <Loading /> : null}
        {error ? <h2 className="error-message">{error}</h2> : null}
        <div className="menu-items">
          {menus.length ? (
            menus.map((menu) => <MenuItem data={menu} key={menu.id} />)
          ) : (
            <p>آیتم های منو موجود نیست</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
