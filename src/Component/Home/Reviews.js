import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
const [reviews, setReviews] = useState([]);
useEffect(() => {
  fetch(
    "https://raw.githubusercontent.com/saddamhosan/reviews.json/main/Reviews.json"
  )
    .then((res) => res.json())
    .then((data) => setReviews(data));
}, []);

  return (
    <div className="py-10">
      <h1 className="text-center text-3xl text-blue-600 font-bold">
        Tourist Reviews
      </h1>
      <div className="mt-20 grid md:grid-cols-3 gap-10 m-10">
        {reviews.map((review) => (
          <Review key={review.id} singleReview={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
