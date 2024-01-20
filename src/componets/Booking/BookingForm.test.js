import { render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm"

const availableTimeSlots = ["17:00", "17:30"]

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTime={{ availableTime: availableTimeSlots }} />)
  const headingElement = screen.getByText("Book Now")
  expect(headingElement).toBeInTheDocument()
})
