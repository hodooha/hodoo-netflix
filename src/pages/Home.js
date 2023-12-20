import React, { useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { MovieAction } from "../redux/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import Container from "react-bootstrap/Container";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(MovieAction.getMovies());
  }, []);

  if (loading === true) {
    return (
      <div className="spinner">
        <ClipLoader color="#ff0000" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div>
      <Banner movie={popularMovies.results[0]}></Banner>
      <Container>
        <h1 className="title">Top Popular Movies</h1>
        <MovieSlide movies={popularMovies.results}></MovieSlide>
        <h1 className="title">Top Rated Movies</h1>
        <MovieSlide movies={topRatedMovies.results}></MovieSlide>
        <h1 className="title">Upcoming Movies</h1>
        <MovieSlide movies={upComingMovies.results}></MovieSlide>
      </Container>
    </div>
  );
};

export default Home;
