import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });

      const popularMoviesApi = api.get(
        `/movie/popular?language=en-US&api_key=${API_KEY}`
      );

      const topRatedMoviesApi = api.get(
        `/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
      );

      const upComingMoviesApi = api.get(
        `/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`
      );

      const genreApi = api.get(
        `/genre/movie/list?language=en-US&page=1&api_key=${API_KEY}`
      );

      let [popularMovies, topRatedMovies, upComingMovies, genreList] =
        await Promise.all([
          popularMoviesApi,
          topRatedMoviesApi,
          upComingMoviesApi,
          genreApi,
        ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAILURE",
        payload: { error: error.message },
      });
    }
  };
}

function getMovieDetail(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE_DETAIL_REQUEST" });
      const selectedMovieApi = api.get(
        `/movie/${id}?language=en-US&api_key=${API_KEY}`
      );
      const reviewsApi = api.get(
        `/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`
      );

      const recommendationsApi = api.get(
        `/movie/${id}/similar?language=en-US&api_key=${API_KEY}`
      );

      const trailerApi = api.get(
        `/movie/${id}/videos?language=en-US&api_key=${API_KEY}`
      );

      const genreApi = api.get(
        `/genre/movie/list?language=en-US&page=1&api_key=${API_KEY}`
      );

      let [selectedMovieDetail, reviews, recommendations, trailer, genreList] =
        await Promise.all([
          selectedMovieApi,
          reviewsApi,
          recommendationsApi,
          trailerApi,
          genreApi,
        ]);

      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          movieDetail: selectedMovieDetail.data,
          reviews: reviews.data,
          recommendations: recommendations.data,
          trailer: trailer.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIE_DETAIL_FAILURE",
        payload: { error: error.message },
      });
    }
  };
}

function getMoviesBySearch(keyword, sortBy, page, filterByYear, filterByJenre) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_BY_SEARCH_REQUEST" });

      const searchApi =
        keyword !== "" && keyword !== null
          ? api.get(
              `/search/movie?query=${keyword}&page=${page}&api_key=${API_KEY}`
            )
          : api.get(
              `/discover/movie?sort_by=${sortBy}&with_genres=${filterByJenre}&primary_release_date.gte=${filterByYear.min}-01-01&primary_release_date.lte=${filterByYear.max}-12-31&page=${page}&api_key=${API_KEY}`
            );

      const genreApi = api.get(
        `/genre/movie/list?language=en-US&page=1&api_key=${API_KEY}`
      );

      let [searchResults, genreList] = await Promise.all([searchApi, genreApi]);

      if (searchResults.data.results.length === 0) {
        throw new Error(`'${keyword}'에 대한 검색 결과가 없습니다.`);
      } else {
        dispatch({
          type: "GET_MOVIES_BY_SEARCH_SUCCESS",
          payload: {
            searchResults: searchResults.data,
            genreList: genreList.data.genres,
            keyword: keyword,
            sortBy: sortBy,
            filterByYear: filterByYear,
            filterByJenre: filterByJenre,
            page: page,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_BY_SEARCH_FAILURE",
        payload: { error: error.message },
      });
    }
  };
}

export const MovieAction = { getMovies, getMovieDetail, getMoviesBySearch };
