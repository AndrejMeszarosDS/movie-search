import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchMovieListFailure, fetchMovieListSuccess } from "./actions";
import { FETCH_MOVIE_LIST_REQUEST } from "./actionTypes";
import { IMovieList } from "./types";

const getMovieList = (searchText: string, pageActual: number) =>
  axios.get<IMovieList>(
    "http://www.omdbapi.com/?apikey=" +
      process.env.REACT_APP_OMDB_API_KEY +
      "&s=" +
      searchText +
      "&page=" +
      pageActual +
      "&type=movie"
  );
function* fetchMovieListSaga(action: any): any {
  try {
    const response = yield call(
      getMovieList,
      action.searchText,
      action.pageActual
    );
    yield put(
      fetchMovieListSuccess({
        movieList: response.data.Search,
        totalResults: response.data.totalResults,
        Response: response.data.Response,
        Error: response.data.Error,
        searchText: action.searchText,
        pageActual: action.pageActual,
      })
    );
  } catch (e) {
    yield put(
      fetchMovieListFailure({
        error: e.message,
      })
    );
  }
}

function* movieListSaga() {
  yield all([takeLatest(FETCH_MOVIE_LIST_REQUEST, fetchMovieListSaga)]);
}

export default movieListSaga;
