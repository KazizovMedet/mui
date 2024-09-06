import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import {userReducer} from "./reducers/userReducer";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import {movieReducer} from "./reducers/movieReducer";

export const store = createStore(
  combineReducers({
    user: userReducer,
    movies: movieReducer
  }),
  composeWithDevToolsDevelopmentOnly(
    applyMiddleware(thunk),
  )
)
