import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const Review = ({ singleReview }) => {
  const { name, img, ratting, comment } = singleReview;
  return (
    <div className="shadow-xl bg-white rounded-xl">
      <div className="flex justify-center">
        <img
          className="w-[200px] h-[200px] p-4 rounded-[100px]"
          src={img}
          alt=""
        />
      </div>
      <div className="m-5 font-serif">
        <h1 className="text-2xl text-blue-500 text-center font-bold">{name}</h1>
        <p className="text-xl my-3">{comment}</p>
        <div className="flex items-center justify-center">
          <h1 className="mb-2 mr-2">Ratting:</h1>
          <Rating
            readonly
            initialRating={ratting}
            emptySymbol={<AiOutlineStar color="orange" size={"20px"} />}
            fullSymbol={<AiFillStar color="orange" size={"20px"} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
