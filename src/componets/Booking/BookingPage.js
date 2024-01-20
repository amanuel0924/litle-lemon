import React from "react"
import BookingForm from "./BookingForm"
import "./BookingPage.css"

const BookingPage = ({ availableTime, dispach, submitData }) => {
  return (
    <section className="booking_container">
      <BookingForm
        availableTime={availableTime}
        dispach={dispach}
        submitData={submitData}
      />
    </section>
  )
}

export default BookingPage
