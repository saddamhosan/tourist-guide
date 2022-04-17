import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const Review = ({ review }) => {
  const { name, img, ratting, comment } = review;
  return (
    <div className="shadow-xl">
      <div>
        <img
          className="h-[375px] w-full p-4 rounded-[200px]"
          src={img}
          alt=""
        />
      </div>
      <div className="m-5">
        <h1 className="text-2xl text-center font-bold">{name}</h1>
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
