import React from "react";
import { useNavigate } from "react-router-dom";
import "./detCard.css";
import BtnAddToList from "../shared/BtnAddToList";
import Buttons from "../shared/Buttons";

const DetailsCard = ({ details }) => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate(`/reservation/${details.id}`);
  };

  return (
    <div className="detailCard">
      <div className="section">
        <div className="descCard">
          <p className="ttlCard">
            name: <span>{details.name}</span>
          </p>
          <p className="ttlCard">
            description: <span>{details.description}</span>
          </p>
          <p className="ttlCard">
            capacity: <span>{details.capacity}</span>
          </p>
          <p className="ttlCard">
            price: <span>{details.price}$</span>
          </p>
          <div>
            <Buttons room={details} />
            <BtnAddToList data={details} />
            <button
              className="reservationButton"
              onClick={handleReservationClick}
            >
              رزرو
            </button>
          </div>
        </div>
        <div className="detailImg">
          {details.images &&
            details.images.map((image, index) => (
              <img src={image} alt="" className="imgCard" key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
