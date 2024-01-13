import React from "react"
import RestorantPic from "./../../assets/restaurant.jpg"

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={RestorantPic} alt="Footer_pic" />
      </div>
      <div>
        <h3>Dormat Navigation</h3>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Reservation</a>
          </li>
          <li>
            <a>Oeder Online</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <a>Addres</a>
          </li>
          <li>
            <a>phone number</a>
          </li>
          <li>
            <a>email</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li>
            <a>facebbok</a>
          </li>
          <li>
            <a>twitter</a>
          </li>
          <li>
            <a>youtube</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
