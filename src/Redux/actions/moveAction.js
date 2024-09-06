import axios from "axios";
import {handleGenerateApi, handleSearchApi} from "../../lib/services";
import {GET_MOVIE, GET_MOVIES, SEARCH_MOVIES} from "../types";

export const getMovies = () => {
  return dispatch => {
    axios(handleGenerateApi('movie/popular'))
      .then(({data}) => dispatch({type: GET_MOVIES, payload: data}))
  }
}

export const getMovie = (id) => {
  return dispatch => {
    axios(handleGenerateApi(`movie/${id}`))
      .then(({data}) => dispatch({type: GET_MOVIE, payload: data}))
  }
}

export const searchMovies = (search) => {
  return dispatch => {
    axios(handleSearchApi('search/movie', search))
      .then(({data}) => dispatch({type: SEARCH_MOVIES, payload: data}))
  }
}