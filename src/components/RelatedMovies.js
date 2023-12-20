import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RelatedMovies = () => {
  const navigate = useNavigate();
  const { recommendations, genreList } = useSelector((state) => state.movie);
  return (
    <div>
      <Container>
        <Row>
          {recommendations.results &&
            recommendations.results.map((i) => (
              <Col lg={4} xs={12}>
                <div
                  id={i.id}
                  onClick={(event) =>
                    navigate(`/movie/${event.currentTarget.id}`)
                  }
                  className="rec-card"
                  style={{
                    backgroundImage:
                      "url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" +
                      `${i.backdrop_path}` +
                      ")",
                  }}
                >
                  <div className="rec-overlay">
                    <h3 className="item-title">{i.title}</h3>
                    <div className="item-vote">
                      <div className="vote">
                        <FontAwesomeIcon icon={faStar} />
                        {Math.round(i.vote_average * 10) / 10}
                      </div>
                      <span
                        className={i.adult === true ? "adult-true" : "adult"}
                      >
                        {i.adult === true ? "청소년관람불가" : "Under 18"}
                      </span>
                    </div>
                    <div>
                      {i.genre_ids.map((id) => (
                        <Badge className="badge" bg="danger">
                          {genreList && genreList.find((g) => g.id === id).name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default RelatedMovies;
