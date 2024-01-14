import React from "react"
import "./Button.css"
const Button = ({ onClick, Lable }) => {
  return (
    <button className="btn" onClick={onClick}>
      {Lable}
    </button>
  )
}

export default Button
