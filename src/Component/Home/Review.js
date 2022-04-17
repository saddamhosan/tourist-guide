import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const Review = ({ singleReview }) => {
  const { name, img, ratting, comment } = singleReview;
  return (
    <div className="shadow-xl">
      <div className="flex justify-center">
        <img
          className="w-[100px] h-[100px] p-4 rounded-[200px]"
          src={img}
          alt=""
        />
      </div>
      <div className="m-5 font-serif">
        <h1 className="text-2xl text-blue-500 text-center font-bold">{name}</h1>
        <p className="text-xl my-3">{comment}</p>
        <div>
          <Rating
            readonly
            initialRating={ratting}
            emptySymbol={<AiOutlineStar color="orange" size={"30px"} />}
            fullSymbol={<AiFillStar color="orange" size={"30px"} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
