import React from "react";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const GoToMovieDetail = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      id={item.id}
      onClick={(event) => GoToMovieDetail(event.currentTarget.id)}
      className="card"
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" +
          `${item.backdrop_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h3 className="item-title">{item.title}</h3>
        <div className="item-vote">
          <div className="vote"><FontAwesomeIcon icon={faStar} />{Math.round(item.vote_average*10)/10}</div>
          <span className={item.adult === true ? "adult-true" : "adult"}>{item.adult === true ? "청소년관람불가" : "Under 18"}</span>
        </div>
        <div>
          {item.genre_ids.map((id) => (
            <Badge className="badge" bg="danger">
              {genreList.find((i) => i.id === id).name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
