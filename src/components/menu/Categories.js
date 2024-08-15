import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMenus } from "../../features/menu/menuSlice";

const Categories = () => {
  const categories = useSelector((state) => state.menu.categories);
  const [mainCategory, setMainCategory] = useState("all");
  const dispatch = useDispatch();

  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          className={
            category === mainCategory ? "filter-btn highlight" : "filter-btn"
          }
          onClick={() => {
            setMainCategory(category);
            dispatch(filterMenus(category));
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
