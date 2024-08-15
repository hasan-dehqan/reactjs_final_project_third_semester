import React, { useState, useRef } from "react";
import "./Reservation.css";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    paymentMethod: "credit_card",
  });

  const formRef = useRef(null);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservations([...reservations, formData]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      paymentMethod: "credit_card",
    });
  };

  const handleDelete = (index) => {
    setReservations(reservations.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const reservation = reservations[index];
    setFormData(reservation);
    setReservations(reservations.filter((_, i) => i !== index));

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <h1>رزرو اتاق</h1>

      <h2>لیست رزروها</h2>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            {reservation.name} - {reservation.date} -{" "}
            {reservation.paymentMethod}
            <button onClick={() => handleEdit(index)}>ویرایش</button>
            <button onClick={() => handleDelete(index)}>حذف</button>
          </li>
        ))}
      </ul>

      <h2>فرم رزرواسیون</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label>نام: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>
        <div>
          <label>ایمیل: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </div>
        <div>
          <label>شماره تلفن: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
            required
          />
        </div>
        <div>
          <label>تاریخ: </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleFormChange}
            required
          />
        </div>
        <div>
          <label>نوع پرداخت: </label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleFormChange}
            required
          >
            <option value="credit_card">کارت اعتباری</option>
            <option value="paypal">پی‌پال</option>
            <option value="bank_transfer">انتقال بانکی</option>
          </select>
        </div>
        <button type="submit" className="btnReserve">
          رزرو
        </button>
      </form>
    </div>
  );
};

export default Reservation;
