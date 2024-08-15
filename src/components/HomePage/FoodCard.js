import Loading from "../loading/Loading";
import Buttons from "../shared/Buttons";
import "./FoodCart.css";
import BtnAddToList from "../shared/BtnAddToList";

const FoodCard = ({ data }) => {
  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const { name, description, price, images } = data;

  return (
    <div className="food-card">
      <img className="imgCard" src={images[0]} alt={name} />

      <div>
        <h3 className="textCard">{name}</h3>
        <p className="textCard">{description}</p>
        <p className="textCard">قیمت: {price} تومان</p>
        <BtnAddToList data={data} />
      </div>
      <Buttons food={data} />
    </div>
  );
};

export default FoodCard;
