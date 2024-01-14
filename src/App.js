import "./App.css"
import Footer from "./componets/Footer/Footer"
import Specials from "./componets/Main/Specials"
import Testimonials from "./componets/Main/Taistmonial"
import About from "./componets/Main/About"
import Navbar from "./componets/Navbar1/Navbar"
import HomePage from "./componets/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./componets/Main/Main"
import Header from "./componets/Header/Header"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
         <Route path="/" element={<Main />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/specials" element={<Specials />}></Route>
        <Route path="/testmonials" element={<Testimonials />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/booking" element={<BookingPage />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
