import React from "react"

import "./Home.css"
import Header from "./Header/Header"
import Testimonials from "./Main/Taistmonial"
import Specials from "./Main/Specials"
import About from "./Main/About"

const HomePage = () => {
  return (
    <>
      <Header />
      <Specials />
      <Testimonials />
      <About />
    </>
  )
}

export default HomePage
