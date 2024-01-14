import "./Taistmonial.css"
import { AiFillStar } from "react-icons/ai"
import images from "./../../assets/lemon dessert.jpg"

const reviews = [
  {
    image: images,
    name: "IQSF",
    reviewText: "Review rext rext lorem ipsudolar",
  },
  {
    image: images,
    name: "Sajal",
    reviewText: "Review rext rext lorem ipsudolar",
  },
  {
    image: images,
    name: "Ramsha",
    reviewText: "Review rext rext lorem ipsudolar",
  },
  {
    image: images,
    name: "Mawra",
    reviewText: "Review rext rext lorem ipsudolar",
  },
]

const ReviewCard = ({ props }) => {
  return (
    <div className="app__testimonials-review">
      <div className="app__testimonials-stars">
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
      </div>
      <div className="app__testimonials-name-image">
        <img
          className="app__testimonial-review-image"
          src={props.image}
          alt={props.name}
        />
        <h6 className="app__testimonials-review-name">{props.name}</h6>
      </div>
      <p className="app__testimonials-review-text">{props.reviewText}</p>
    </div>
  )
}
const Testimonials = () => {
  return (
    <div className="app__testimonials-content">
      <h1 className="app__testimonals-title">Testimonials</h1>
      {/* <ReviewCard /> */}
      <div className="app__testimonial-review-card">
        {reviews.map((review) => {
          return <ReviewCard props={review} />
        })}
      </div>
    </div>
  )
}

export default Testimonials
