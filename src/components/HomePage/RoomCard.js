import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import "./RoomCard.css";
import BtnAddToList from "../shared/BtnAddToList";

const RoomCard = ({ data }) => {
  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  const { id, name, description, price, images } = data;
  return (
    <div className="cardInfo">
      <img className="imgCard" src={images[0]} alt={name} />
      <div className="discCard">
        <h3 className="textCard">{name}</h3>
        <p className="textCard">{description}</p>
        <p className="textCard">قیمت: {price} تومان</p>
        <BtnAddToList data={data} />
      </div>
      <div>
        <Link to={`/rooms/${id}`} className="link">
          جزپیات اتاق
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
//
