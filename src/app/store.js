import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "../features/getAllRooms/getAllRoomsSlice";
import foodsReducer from "../features/getAllFoods/getAllFoodsSlice";
import detailsReducer from "../features/getDetails/getDetailsSlice";
import cartReducer from "../features/cart/cartSlice";
import reservationReducer from "../features/reservation/reservationSlice";
import adminReducer from "../features/admin/adminSlice";
import listReducer from "../features/list/ListSlice";
import menuReducer from "../features/menu/menuSlice";
import sliderReducer from "../features/slider/sliderSlice";
const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    foods: foodsReducer,
    details: detailsReducer,
    cart: cartReducer,
    reservations: reservationReducer,
    admin: adminReducer,
    list: listReducer,
    menu: menuReducer,
    slider: sliderReducer,
  },
});
export default store;
