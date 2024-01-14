import React from "react"
import image from "./../assets/restaurant.jpg"
import "./Home.css"

const HomePage = () => {
  const imageStyle = {
    width: "40%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
  }

  return (
    <div className="home-page">
      <div className="image-container">
        <img src={image} alt="Homepage_Image" style={imageStyle} />
      </div>
      <div className="content">
        <h1>Welcome to our website!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          justo vitae vestibulum vestibulum.
        </p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  )
}

export default HomePage
