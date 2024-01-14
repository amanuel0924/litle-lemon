import React from "react"
import "./About.css"
import image1 from "../../assets/lemon dessert.jpg"
import image2 from "../../assets/lemon dessert.jpg"

const aboutData = {
  title: "Little Lemon",
  subTitle: "Chicago",
  description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia enim velit mollit. `,
}
const About = () => {
  return (
    <div className="app_about-section">
      <div className="app_about-description-box">
        <h1 className="app__about-title">{aboutData.title}</h1>
        <br />
        <h4 className="app__about-subtitle">{aboutData.subTitle}</h4>
        <br />
        <p className="app__about-description">
          {aboutData.description}
          <br />
          <br />
          {aboutData.description}
        </p>
      </div>

      {/* <div className="app__about-image-box-section"> */}
      <div className="app__about-image-holder">
        <div
          className="app__about-image-box img-box-1"
          style={{
            backgroundImage: `url(${image2})`,
          }}
        />
        <div
          className="app__about-image-box img-box-2"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        />
      </div>
      {/* </div> */}
    </div>
  )
}

export default About
