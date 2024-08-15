import React, { useState } from "react";
import FoodCard from "./FoodCard";

const FoodSearch = ({ foods }) => {
  const [query, setQuery] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);

  const handleSearch = () => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <div className="food-search">
      <input
        type="text"
        placeholder="نام غذا را وارد کنید"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>جستجو</button>
      <div className="search-results">
        {filteredFoods.map((food) => (
          <FoodCard data={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default FoodSearch;
