import React, { useState, useRef } from "react";
import ReservationForm from "./ReservationForm";
import ReservationList from "./ReservationList";
import "./ReservationPage.css";

const ReservationPage = () => {
  const [reservations, setReservations] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const formRef = useRef(null);

  const handleReservationSubmit = (reservation) => {
    if (editingIndex !== null) {
      // Update existing reservation
      const updatedReservations = reservations.map((res, index) =>
        index === editingIndex ? reservation : res
      );
      setReservations(updatedReservations);
      setEditingIndex(null);
    } else {
      // Add new reservation
      setReservations([...reservations, reservation]);
    }

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDelete = (index) => {
    const newReservations = reservations.filter((_, i) => i !== index);
    setReservations(newReservations);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="reservation-page">
      <ReservationForm
        ref={formRef}
        onSubmit={handleReservationSubmit}
        reservation={editingIndex !== null ? reservations[editingIndex] : null}
      />
      <ReservationList
        reservations={reservations}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ReservationPage;
