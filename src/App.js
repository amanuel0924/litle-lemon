import "./App.css"
import Footer from "./componets/Footer/Footer"
import Navbar from "./componets/Navbar1/Navbar"
import { BrowserRouter } from "react-router-dom"
import Main from "./componets/Main/Main"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route path="/header" element={<Header />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/specials" element={<Specials />}></Route>
        <Route path="/testmonials" element={<Testimonials />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer /> */}
    </BrowserRouter>
  )
}

export default App
