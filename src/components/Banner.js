import React from "react";

const Banner = ({ movie }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`,
      }}
    >
      <div className="banner-info">
        <h1>{movie.title}</h1>
        <h6>{movie.overview}</h6>
      </div>
    </div>
  );
};

export default Banner;
