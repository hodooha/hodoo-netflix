import React from "react";
import { useSelector } from "react-redux";

const Review = () => {
  const { reviews } = useSelector((state) => state.movie);
  return (
    <div className="review-area">
      {reviews.results && reviews.results.length === 0
        ? "리뷰가 없습니다."
        : reviews.results &&
          reviews.results.map((i) => (
            <div className="review">
              <div>
                <h4>{i.author}</h4>
              </div>
              <div>{i.content}</div>
            </div>
          ))}
    </div>
  );
};

export default Review;
