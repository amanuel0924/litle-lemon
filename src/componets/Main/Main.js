import React, { useReducer } from "react"

import BookingPage from "../Booking/BookingPage"
import { useNavigate, Route, Routes } from "react-router-dom"
import ConfirmBooking from "../Booking/confirmBooking"

import HomePage from "./../Home"

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31
  const a = 185852
  let s = seed % m

  return () => (s = (s * a) % m) / m
}
const Main = () => {
  const navigate = useNavigate()
  const submitAPI = (formData) => {
    return true
  }
  const fetchAPI = (date) => {
    let result = []
    let random = seededRandom(date.getDate())

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) result.push(i + ":00")
      if (random() < 0.5) result.push(i + ":30")
    }

    return result
  }

  const initializeTimes = () => {
    return {
      availableTime: fetchAPI(new Date()),
    }
  }
  const updateTimes = (state, date) => {
    return {
      availableTime: fetchAPI(new Date()),
    }
  }
  const [state, dispach] = useReducer(updateTimes, [], initializeTimes)
  const submitData = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed")
    }
  }
  return (
    <main>
      {/* <BookingPage
        availableTime={state}
        dispach={dispach}
        submitData={submitData}
      /> */}

      <Routes>
        {/* <Route path="/" element={<Main />}></Route> */}
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTime={state}
              dispach={dispach}
              submitData={submitData}
            />
          }
        ></Route>
        <Route path="/confirmed" element={<ConfirmBooking />}></Route>
      </Routes>
    </main>
  )
}

export default Main
