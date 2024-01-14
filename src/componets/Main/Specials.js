import React from "react"
import Button from "../Button/Button"
import "./Special.css"
import img1 from "./../../assets/greek salad.jpg"

const Specials = () => {
  return (
    <section className="specials_section">
      <div className="special_container">
        <div className="special_heading">
          <h1 className="special_title">Specials</h1>
          <Button Lable={"Online Menu"} />
        </div>

        <div className="card_wraper">
          <div className="special_card_container">
            <img className="card_img" alt="cardimag" src={img1} />
            <div className="card_detail">
              <div className="card_title_container">
                <h4>Greek Salad</h4>
                <span>$66.78</span>
              </div>
              <p className="card_discription">
                The href attribute is required for an anchor to be keyboard
                accessible. Provide a valid, navigable address as the href
                value. If you cannot provide an href, but still need
              </p>
              <h4 className="order">Order a delivery</h4>
            </div>
          </div>
          <div className="special_card_container">
            <img className="card_img" alt="cardimag" src={img1} />
            <div className="card_detail">
              <div className="card_title_container">
                <h4>Greek Salad</h4>
                <span>$66.78</span>
              </div>
              <p className="card_discription">
                The href attribute is required for an anchor to be keyboard
                accessible. Provide a valid, navigable address as the href
                value. If you cannot provide an href, but still need
              </p>
              <h4 className="order">Order a delivery</h4>
            </div>
          </div>
          <div className="special_card_container">
            <img className="card_img" alt="cardimag" src={img1} />
            <div className="card_detail">
              <div className="card_title_container">
                <h4>Greek Salad</h4>
                <span>$66.78</span>
              </div>
              <p className="card_discription">
                The href attribute is required for an anchor to be keyboard
                accessible. Provide a valid, navigable address as the href
                value. If you cannot provide an href, but still need
              </p>
              <h4 className="order">Order a delivery</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specials
