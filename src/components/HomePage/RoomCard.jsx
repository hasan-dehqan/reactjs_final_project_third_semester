import React from "react";
import "./RoomCard.css";
import { Link } from "react-router-dom";
import Buttons from "../shared/Buttons";
import Loading from "../loading/Loading";
import BtnAddToList from "../shared/BtnAddToList";

const RoomCard = ({ data }) => {
  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const { id, name, description, price, capacity, images } = data;

  return (
    <div className="cardInfo">
      <img className="imgCard" src={images[0]} alt={name} />
      <div className="discCard">
        <p className="textCard">
          <span className="spanCard">{description}</span>
        </p>
        <p className="textCard">
          <span className="spanCard">{name}</span>
        </p>
        <p className="textCard">
          <span className="spanCard">
            قیمت:&nbsp;&nbsp;&nbsp;تومان&nbsp;{price}
          </span>
        </p>
        <p className="textCard">
          <span className="spanCard">
            ظرفیت:&nbsp;&nbsp;&nbsp;{capacity}&nbsp;نفر
          </span>
        </p>
      </div>
      <div>
        <Link to={`/rooms/${id}`} className="link">
          جزئیات اتاق برای رزرو
        </Link>
        <Buttons room={data} />
        <BtnAddToList data={data} />
      </div>
    </div>
  );
};

export default RoomCard;
