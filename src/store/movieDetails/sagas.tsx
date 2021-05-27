import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchMovieDetailsFailure, fetchMovieDetailsSuccess } from "./actions";
import { FETCH_MOVIE_DETAILS_REQUEST } from "./actionTypes";
import { IMovieDetail } from "./types";

const getMovieDetails = (searchID: string) =>
  axios.get<IMovieDetail[]>(
    "http://www.omdbapi.com/?apikey=" +
      netlify process.env.REACT_APP_OMDB_API_KEY +
      "&i=" +
      searchID
  );

function* fetchMovieDetailsSaga(action: any): any {
  try {
    const response = yield call(getMovieDetails, action.searchID);
    yield put(
      fetchMovieDetailsSuccess({
        movieDetails: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchMovieDetailsFailure({
        error: e.message,
      })
    );
  }
}

function* movieDetailsSaga() {
  yield all([takeLatest(FETCH_MOVIE_DETAILS_REQUEST, fetchMovieDetailsSaga)]);
}

export default movieDetailsSaga;
