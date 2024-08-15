import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";
import Card from "../card/Card";

const AdminPanel = () => {
  const [rooms, setRooms] = useState([]);
  const [foods, setFoods] = useState([]);
  const [newRoom, setNewRoom] = useState({
    name: "",
    description: "",
    capacity: "",
    price: "",
  });
  const [newFood, setNewFood] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
  });

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:3001/rooms");
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error.message);
      }
    };

    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:3001/foods");
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching foods:", error.message);
      }
    };

    fetchRooms();
    fetchFoods();
  }, []);

  const handleDeleteRoom = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/rooms/${id}`);
      setRooms(rooms.filter((room) => room.id !== id));
    } catch (error) {
      console.error("Error deleting room:", error.message);
    }
  };

  const handleDeleteFood = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/foods/${id}`);
      setFoods(foods.filter((food) => food.id !== id));
    } catch (error) {
      console.error("Error deleting food:", error.message);
    }
  };

  const handleAddRoom = async () => {
    try {
      const response = await axios.post("http://localhost:3001/rooms", newRoom);
      setRooms([...rooms, response.data]);
      setNewRoom({ name: "", description: "", capacity: "", price: "" });
    } catch (error) {
      console.error("Error adding room:", error.message);
    }
  };

  const handleAddFood = async () => {
    try {
      const response = await axios.post("http://localhost:3001/foods", newFood);
      setFoods([...foods, response.data]);
      setNewFood({ name: "", description: "", type: "", price: "" });
    } catch (error) {
      console.error("Error adding food:", error.message);
    }
  };

  return (
    <div>
      <Card />
      <div className="admin">
        <h2 className="title">مدیریت</h2>
        <div className="section">
          <h3 className="title">اتاق‌ها</h3>
          <ul className="list">
            {rooms.map((room) => (
              <li className="item" key={room.id}>
                <div>
                  <h4>{room.name}</h4>
                  <p>{room.description}</p>
                  <p>ظرفیت: {room.capacity}</p>
                  <p>قیمت: {room.price}</p>
                </div>
                <button
                  className="button"
                  onClick={() => handleDeleteRoom(room.id)}
                >
                  حذف
                </button>
              </li>
            ))}
          </ul>
          <div>
            <h3>اضافه کردن اتاق جدید</h3>
            <form className="form">
              <input
                className="input"
                type="text"
                placeholder="نام اتاق"
                value={newRoom.name}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, name: e.target.value })
                }
              />
              <input
                className="input"
                type="text"
                placeholder="توضیحات"
                value={newRoom.description}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, description: e.target.value })
                }
              />
              <input
                className="input"
                type="text"
                placeholder="ظرفیت"
                value={newRoom.capacity}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, capacity: e.target.value })
                }
              />
              <input
                className="input"
                type="text"
                placeholder="قیمت"
                value={newRoom.price}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, price: e.target.value })
                }
              />
              <button className="button" type="button" onClick={handleAddRoom}>
                اضافه کردن اتاق
              </button>
            </form>
          </div>
        </div>
        <div>
          <h3 className="title">غذاها</h3>
          <ul className="list">
            {foods.map((food) => (
              <li className="item" key={food.id}>
                <div>
                  <h4>{food.name}</h4>
                  <p>{food.description}</p>
                  <p>نوع: {food.type}</p>
                  <p>قیمت: {food.price}</p>
                </div>
                <button
                  className="button"
                  onClick={() => handleDeleteFood(food.id)}
                >
                  حذف
                </button>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="h3Title">اضافه کردن غذای جدید</h3>
            <form className="form">
              <input
                className="input"
                type="text"
                placeholder="نام غذا"
                value={newFood.name}
                onChange={(e) =>
                  setNewFood({ ...newFood, name: e.target.value })
                }
              />
              <input
                className="input"
                type="text"
                placeholder="توضیحات"
                value={newFood.description}
                onChange={(e) =>
                  setNewFood({ ...newFood, description: e.target.value })
                }
              />
              <input
                className="input"
                type="text"
                placeholder="نوع"
                value={newFood.type}
                onChange={(e) =>
                  setNewFood({ ...newFood, type: e.target.value })
                }
              />
              <input
                className="input"
                type="text"
                placeholder="قیمت"
                value={newFood.price}
                onChange={(e) =>
                  setNewFood({ ...newFood, price: e.target.value })
                }
              />
              <button className="button" type="button" onClick={handleAddFood}>
                اضافه کردن غذا
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
