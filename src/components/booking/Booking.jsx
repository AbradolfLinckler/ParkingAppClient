import "./booking.css";
import React from 'react'

export default function BookingPopup() {
  const space=JSON.parse(localStorage.getItem("space"));
  const id=space.id;
  // localStorage.removeItem("space");
  console.log(space);
  return (
    <div>
      
    </div>
  )
}
