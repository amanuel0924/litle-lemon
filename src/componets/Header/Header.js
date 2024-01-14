import React from "react"
import Button from "../Button/Button"
import Hederimg from "./../../assets/restauranfood.jpg"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="text_container">
          <h1 className="title">Litele Lemon</h1>
          <div>
            <h2>Chicago</h2>
            <p>
              With Semantic HTML we were introduced to elements that tell
              developers and browsers exactly what it does and what content
              should go in it
            </p>
          </div>
          <Button Lable="Reserve Table" />
        </div>
        <div className="img_container">
          <img className="heder_img" src={Hederimg} alt="Hederimage" />
        </div>
      </div>
    </header>
  )
}

export default Header
