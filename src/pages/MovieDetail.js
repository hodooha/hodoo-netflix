import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieAction } from "../redux/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Review from "../components/Review";
import RelatedMovies from "../components/RelatedMovies";
import ClipLoader from "react-spinners/ClipLoader";
import Trailer from "../components/Trailer";

const MovieDetail = () => {
  const [selectedBtn, setSelectedBtn] = useState("REVIEWS");

  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const { movieDetail, loading, reviews, recommendations } = useSelector(
    (state) => state.movie
  );
  const bottomBtn = [
    { key: reviews, value: "REVIEWS" },
    { key: recommendations, value: "RELATED MOVIES" },
  ];

  useEffect(() => {
    dispatch(MovieAction.getMovieDetail(id));
  }, [id]);

  if (loading === true) {
    return (
      <div className="spinner">
        <ClipLoader color="#ff0000" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div>
      <Container>
        <Row className="detail">
          <Col xl={6} lg={4}>
            <img
              className="detail-img"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieDetail.poster_path}`}
            ></img>
          </Col>
          <Col xl={6} lg={8}>
            <div className="detail-main">
              <div className="badges">
                {movieDetail.genres &&
                  movieDetail.genres.map((i) => (
                    <Badge className="detail-genres-badge" bg="danger">
                      {i.name}
                    </Badge>
                  ))}
              </div>
              <div className="detail-info">
                <h1 className="detail-title">{movieDetail.title}</h1>
                <h3>{movieDetail.tagline}</h3>

                <div className="detail-first">
                  <div className="detail-vote">
                    <FontAwesomeIcon icon={faStar} />
                    {Math.round(movieDetail.vote_average * 10) / 10}
                  </div>
                  <div className="detail-popularity">
                    <FontAwesomeIcon icon={faPeopleGroup} />
                    {movieDetail.popularity}
                  </div>
                  <div
                    className={
                      movieDetail.adult === true ? "adult-true" : "adult"
                    }
                  >
                    {movieDetail.adult === true ? "청소년관람불가" : "Under 18"}
                  </div>
                </div>

                <div className="detail-overview">{movieDetail.overview}</div>

                <ul className="detail-second">
                  <li>
                    <span>Budget</span>${movieDetail.budget}
                  </li>
                  <li>
                    <span>Revenue</span>${movieDetail.revenue}
                  </li>
                  <li>
                    <span>Release Day</span>
                    {movieDetail.release_date}
                  </li>
                  <li>
                    <span>Time</span>
                    {movieDetail.runtime}
                  </li>
                </ul>
                <Trailer></Trailer>
              </div>
            </div>
          </Col>
        </Row>
        <div className="detail-bottom">
          <Row>
            {bottomBtn.map((i) => (
              <Col>
                <button
                  className={selectedBtn === i.value ? "bottom-btn btn-active" : "bottom-btn"}
                  value={i.value}
                  onClick={(event) => setSelectedBtn(event.target.value)}
                >
                  {i.value} ({`${i.key.results && i.key.results.length}`})
                </button>
              </Col>
            ))}
          </Row>
        </div>
        <Row>
          <div>
            {selectedBtn === "REVIEWS" ? (
              <Review></Review>
            ) : (
              <RelatedMovies></RelatedMovies>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
