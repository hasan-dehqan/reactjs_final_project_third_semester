import React, { useState } from "react";
import RoomCard from "./RoomCard";

const RoomSearch = ({ rooms }) => {
  const [date, setDate] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);

  const handleSearch = () => {
    const filtered = rooms.filter((room) =>
      room.availability.some(
        (avail) => avail.date === date && avail.isAvailable
      )
    );
    setFilteredRooms(filtered);
  };

  return (
    <div className="room-search">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSearch}>جستجو</button>
      <div className="search-results">
        {filteredRooms.map((room) => (
          <RoomCard data={room} key={room.id} />
        ))}
      </div>
    </div>
  );
};

export default RoomSearch;
