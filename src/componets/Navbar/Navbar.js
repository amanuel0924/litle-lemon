import React from "react"
import Logo from "./../../assets/Logo .svg"

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="litle_lemon_logo" />
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
    </nav>
  )
}

export default Navbar
