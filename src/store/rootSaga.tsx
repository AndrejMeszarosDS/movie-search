import { all, fork } from "redux-saga/effects";

import movieListSaga from "./movieList/sagas";
import movieDetailsSaga from "./movieDetails/sagas";

export function* rootSaga() {
  yield all([fork(movieListSaga)]);
  yield all([fork(movieDetailsSaga)]);
}
