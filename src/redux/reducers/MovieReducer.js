let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  movieDetail: {},
  reviews: {},
  recommendations: {},
  genreList: [],
  trailer: {},
  searchResults: {},
  keyword: "",
  page: 1,
  sortBy: "popularity.desc",
  filterByYear: { min: 1900, max: 2023 },
  fitlerByJenre: "",
  error: "",
};

function MovieReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList,
        loading: false,
      };

    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    case "GET_MOVIE_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_MOVIE_DETAIL_SUCCESS":
      return {
        ...state,
        movieDetail: payload.movieDetail,
        reviews: payload.reviews,
        recommendations: payload.recommendations,
        trailer: payload.trailer,
        genreList: payload.genreList,
        loading: false,
      };

    case "GET_MOVIE_DETAIL_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload.error
      };

    case "GET_MOVIES_BY_SEARCH_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_MOVIES_BY_SEARCH_SUCCESS":
      return {
        ...state,
        searchResults: payload.searchResults,
        keyword: payload.keyword,
        genreList: payload.genreList,
        sortBy: payload.sortBy,
        filterByYear: payload.filterByYear,
        filterByJenre: payload.filterByJenre,
        page: payload.page,
        loading: false,
      };

    case "GET_MOVIES_BY_SEARCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    case "MOVE_PAGE_SUCCESS":
      return {
        ...state,
        page: payload.page,
      };

    case "KEYWORD_SUCCESS":
      return {
        ...state,
        loading: state.keyword === payload.keyword ? false : true,
        keyword: payload.keyword,
        page: 1,
        error: state.keyword !== payload.keyword ? "" : state.error,
      };

    case "SET_SORT_BY_SUCCESS":
      return {
        ...state,
        sortBy: payload.sortBy,
      };

    case "SET_FILTER_BY_YEAR":
      return {
        ...state,
        filterByYear: payload.filterByYear,
      };

    case "SET_FILTER_BY_JENRE":
      return {
        ...state,
        filterByJenre: payload.filterByJenre,
      };

    default:
      return { ...state };
  }
}

export default MovieReducer;
