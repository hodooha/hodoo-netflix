import React from "react";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MoviePoster = ({ movie }) => {
  const navigate = useNavigate();
  let date = new Date(movie.release_date);
  const { genreList } = useSelector((state) => state.movie);

  return (
    <div
      onClick={(event) => navigate(`/movie/${event.currentTarget.id}`)}
      className="poster"
      id={movie.id}
    >
      <img
        className="poster-back-img"
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
      ></img>
      <div className="poster-head">
        <img
          className="poster-sm-img"
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
        ></img>
        <h4>{movie.title}</h4>
        <h6>{date.getFullYear()}</h6>
      </div>
      <div className="poster-badge-area">
        {movie.genre_ids.map((id) => (
          <Badge bg="danger">
            {genreList.find((genre) => genre.id === id).name}
          </Badge>
        ))}
      </div>
      <div className="poster-overview">
        <p>{movie.overview.substring(0, 100)}...</p>
      </div>
      <div className="poster-info">
        <div className="vote">
          <FontAwesomeIcon icon={faStar} />
          {Math.round(movie.vote_average*10)/10}
        </div>
        <div className="popularity">
          <FontAwesomeIcon icon={faPeopleGroup} />
          {movie.popularity}
        </div>
        <div className={movie.adult === true ? "adult-true" : "adult"}>
          {movie.adult === true ? "청소년관람불가" : "Under 18"}
        </div>
      </div>
    </div>
  );
};

export default MoviePoster;
