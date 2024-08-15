import React, { useEffect } from "react";
import "./homePage.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchRooms } from "../../features/getAllRooms/getAllRoomsSlice";
import { fetchFoods } from "../../features/getAllFoods/getAllFoodsSlice";
import Loading from "../loading/Loading";
import RoomCard from "./RoomCard";
import FoodCard from "./FoodCard";
import BannerHeader from "../shared/header/BannerHeader";
import Loadmore from "../../components/loadmore/Loadmore";
import Slider from "../../components/slider/Slider";
import MailList from "../../components/mailList/MailList";

const HomePage = () => {
  const dispatch = useDispatch();

  const roomsState = useSelector(
    (state) => state.rooms || { loading: false, rooms: [], error: "" }
  );
  const foodsState = useSelector(
    (state) => state.foods || { loading: false, foods: [], error: "" }
  );

  const { loading: roomsLoading, rooms, error: roomsError } = roomsState;
  const { loading: foodsLoading, foods, error: foodsError } = foodsState;

  useEffect(() => {
    dispatch(fetchRooms());
    dispatch(fetchFoods());
  }, [dispatch]);

  return (
    <div>
      <BannerHeader />
      <Loadmore />
      <div className="homePage">
        <h1 className="homePage-title"> مجموعه اقامتی رستوران هتل آریا </h1>

        {roomsLoading || foodsLoading ? (
          <Loading />
        ) : (
          <>
            {roomsError && <h2>{roomsError}</h2>}
            {foodsError && <h2>{foodsError}</h2>}

            <div className="contact">
              {rooms && rooms.length > 0 ? (
                rooms.map((room) => <RoomCard data={room} key={room.id} />)
              ) : (
                <p>اتاقی وجود ندارد  </p>
              )}
            </div>

            <div className="contact">
              {foods && foods.length > 0 ? (
                foods.map((food) => <FoodCard data={food} key={food.id} />)
              ) : (
                <p>غذایی وجود ندارد  </p>
              )}
            </div>
          </>
        )}
      </div>
      <Slider />
      <MailList />
    </div>
  );
};

export default HomePage;
