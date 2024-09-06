import {GET_MOVIE, GET_MOVIES, SEARCH_MOVIES} from "../types";

const initialState = {
  movies: [],
  page: 1,
  movie: {},
  searchedMovies: [],
  isOpenSearchList: false
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state, movies: action.payload.results
      }
    case SEARCH_MOVIES:
      return {
        ...state, searchedMovies: action.payload.results,
        isOpenSearchList: true
      }
      case 'CLOSE_LIST':
        return {
          ...state, isOpenSearchList: false
        }
    case GET_MOVIE:
      return {
        ...state, movie: action.payload
      }
    default:
      return state
  }
}