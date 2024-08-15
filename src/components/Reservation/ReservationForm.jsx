import React, { useState, useEffect } from "react";
import "./ReservationForm.css";
import DatePicker from "../../components/dataPicker/DatePicker ";

const ReservationForm = ({ onSubmit, reservation }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    checkInDate: null,
    checkOutDate: null,
    paymentMethod: "credit_card",
  });

  useEffect(() => {
    if (reservation) {
      setFormData(reservation);
    }
  }, [reservation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      roomType: "",
      checkInDate: null,
      checkOutDate: null,
      paymentMethod: "credit_card",
    });
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h2>فرم رزرو اتاق</h2>
      <div className="form-group">
        <label>نام:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>ایمیل:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>شماره تلفن:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>نوع اتاق:</label>
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
        >
          <option value="">انتخاب نوع اتاق</option>
          <option value="single">تک نفره</option>
          <option value="double">دو نفره</option>
          <option value="suite">سوییت</option>
        </select>
      </div>
      <div className="form-group">
        <label>تاریخ ورود:</label>
        <DatePicker
          value={formData.checkInDate}
          onChange={(value) => handleDateChange("checkInDate", value)}
        />
      </div>
      <div className="form-group">
        <label>تاریخ خروج:</label>
        <DatePicker
          value={formData.checkOutDate}
          onChange={(value) => handleDateChange("checkOutDate", value)}
        />
      </div>
      <div className="form-group">
        <label>نوع پرداخت:</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="credit_card">کارت اعتباری</option>
          <option value="paypal">پی‌پال</option>
          <option value="bank_transfer">انتقال بانکی</option>
        </select>
      </div>
      <button className="btn-reserv" type="submit">
        رزرو کردن
      </button>
    </form>
  );
};

export default ReservationForm;
