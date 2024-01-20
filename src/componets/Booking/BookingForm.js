import React, { useState } from "react"

import "./BookingForm.css"

const BookingForm = ({ submitData, dispach, availableTime }) => {
  const [resDate, setResDate] = useState("")
  const [resTime, setResTime] = useState("00:00")
  const [resGusset, setResGusst] = useState("1")
  const [resOccation, setResOccation] = useState("birthday")
  const [isValid, setIsValid] = useState("")
  const validateForm = () => {
    // Date validation
    const selectedDate = new Date(resDate)
    const currentDate = new Date()
    const futureDate = new Date()
    futureDate.setMonth(currentDate.getMonth() + 1)

    if (resDate.trim() === "") {
      setIsValid((prev) => ({
        ...prev,
        dateError: "Please choose a date.",
      }))
    } else if (selectedDate < currentDate) {
      setIsValid((prev) => ({
        ...prev,
        dateError: "Selected date must be in the future.",
      }))
    } else if (selectedDate > futureDate) {
      setIsValid((prev) => ({
        ...prev,
        dateError: "Selected date must be within the next 1 month.",
      }))
    }

    // Guests validation
    if (resGusset < 1 || resGusset > 10) {
      setIsValid((prev) => ({
        ...prev,
        guestsError: "Number of guests must be between 1 and 10.",
      }))
    }

    // Occasion validation
    if (resOccation !== "Birthday" && resOccation !== "Anniversary") {
      setIsValid((prev) => ({
        ...prev,
        occasionError: "Please select a valid occasion.",
      }))
    }
  }
  const handleResDateChange = (e) => {
    setResDate(e)
    dispach(e)
  }

  const handleResTimeChange = (e) => {
    setResTime(e.target.value)
  }
  const handleResGusstChange = (e) => {
    setResGusst(e.target.value)
  }
  const handleResOccationChange = (e) => {
    setResOccation(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    validateForm()

    if (isValid) {
      submitData({ resDate, resTime, resGusset, resOccation })
    }
  }
  return (
    <form className="boooking_form" onSubmit={handleSubmit}>
      <fieldset>
        <h2>Book Now</h2>
        <div className="input_containers">
          <label htmlFor="res-date">Choose date:</label>
          <input
            type="date"
            id="res-date"
            required
            value={resDate}
            onChange={(e) => handleResDateChange(e.target.value)}
          />
          {isValid.dateError && <p className="errors">{isValid.dateError}</p>}
        </div>
        <div className="input_containers">
          <label htmlFor="res-time">Choose time:</label>
          <select id="res-time" value={resTime} onChange={handleResTimeChange}>
            {availableTime.availableTime.map((times) => {
              return <option key={times}>{times}</option>
            })}
          </select>
        </div>
        <div className="input_containers">
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="15"
            id="guests"
            value={resGusset}
            onChange={handleResGusstChange}
          />
          {isValid.guestsError && (
            <p className="errors">{isValid.guestsError}</p>
          )}
        </div>
        <div className="input_containers">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            value={resOccation}
            onChange={handleResOccationChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {isValid.occasionError && (
            <p className="errors">{isValid.occasionError}</p>
          )}
        </div>
        <div></div>
        <div className="input_containers">
          <button type="submit" className="btn_submit">
            Make Your reservation
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default BookingForm
