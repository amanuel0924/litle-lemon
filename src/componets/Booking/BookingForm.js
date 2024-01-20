import React, { useState } from "react"

import "./BookingForm.css"

const BookingForm = ({ submitData, dispach, availableTime }) => {
  const [resDate, setResDate] = useState("")
  const [resTime, setResTime] = useState("00:00")
  const [resGusset, setResGusst] = useState("1")
  const [resOccation, setResOccation] = useState("birthday")

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
    submitData({ resDate, resTime, resGusset, resOccation })
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
            max="10"
            id="guests"
            value={resGusset}
            onChange={handleResGusstChange}
          />
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
        </div>
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
