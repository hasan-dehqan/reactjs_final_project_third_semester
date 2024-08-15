import React from "react";
import "./ReservationList.css";

const ReservationList = ({ reservations, onDelete, onEdit }) => {
  return (
    <div className="reservation-list">
      <h2>لیست رزروها و سفارشات کاربر</h2>
      <table>
        <thead>
          <tr>
            <th>نام</th>
            <th>ایمیل</th>
            <th>شماره تلفن</th>
            <th>نوع اتاق</th>
            <th>تاریخ ورود</th>
            <th>تاریخ خروج</th>
            <th>نوع پرداخت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.name}</td>
              <td>{reservation.email}</td>
              <td>{reservation.phone}</td>
              <td>{reservation.roomType}</td>
              <td>
                {reservation.checkInDate
                  ? `${reservation.checkInDate.day}/${reservation.checkInDate.month}/${reservation.checkInDate.year}`
                  : ""}
              </td>
              <td>
                {reservation.checkOutDate
                  ? `${reservation.checkOutDate.day}/${reservation.checkOutDate.month}/${reservation.checkOutDate.year}`
                  : ""}
              </td>
              <td>{reservation.paymentMethod}</td>
              <td>
                <button onClick={() => onEdit(index)}>ویرایش</button>
                <button onClick={() => onDelete(index)}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
