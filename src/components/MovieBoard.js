import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MoviePoster from "./MoviePoster";
import { useDispatch, useSelector } from "react-redux";
import { MovieAction } from "../redux/actions/MovieAction";
import ClipLoader from "react-spinners/ClipLoader";

const MovieBoard = () => {
  const dispatch = useDispatch();
  const {
    loading,
    searchResults,
    keyword,
    page,
    sortBy,
    filterByYear,
    filterByJenre,
  } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(
      MovieAction.getMoviesBySearch(
        keyword,
        sortBy,
        page,
        filterByYear,
        filterByJenre
      )
    );
  }, [keyword, sortBy, page, filterByYear, filterByJenre]);

  if (loading === true) {
    return (
      <div className="spinner">
        <ClipLoader color="#ff0000" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <Row>
      {searchResults.results &&
        searchResults.results.map((item) => (
          <Col xl={6} lg={12}>
            <MoviePoster movie={item}></MoviePoster>
          </Col>
        ))}
    </Row>
  );
};

export default MovieBoard;
