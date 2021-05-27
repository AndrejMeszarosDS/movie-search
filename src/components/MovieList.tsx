import { useSelector, useDispatch } from "react-redux";
import {
  getMovieListDataSelector,
  getMovieListPendingSelector,
  getMovieListErrorSelector,
  getMovieListApiErrorSelector,
} from "../store/movieList/selectors";
import { useEffect } from "react";
import { Container, Image, Alert } from "react-bootstrap";
import { IMovieList } from "../store/movieList/types";
import { useParams } from "react-router-dom";
import { fetchMovieListRequest } from "../store/movieList/actions";
import MyPagination from "./Pagination";
import MovieListComponent from "./MovieListComponent";

const MovieList = () => {
  const movieListPending = useSelector(getMovieListPendingSelector);
  const movieListData = useSelector(getMovieListDataSelector);
  const movieListError = useSelector(getMovieListErrorSelector);
  const movieListApiError = useSelector(getMovieListApiErrorSelector);
  const dispatch = useDispatch();
  const { title } = useParams<{ title: string }>();
  const { page } = useParams<{ page: string }>();

  useEffect(() => {
    dispatch(fetchMovieListRequest(title, parseInt(page)));
  }, [dispatch, title, page]);

  return (
    <Container fluid className="p-0 m-0 flex-grow-1 overflow-hidden">
      <Container
        className="p-0 m-2 d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto"
        style={{
          overflowY: "auto",
          height: "calc(100% - 16px",
          width: "calc(100% - 16px",
        }}
      >
        {movieListPending ? (
          <Image
            src="/images/loading.gif"
            roundedCircle
            style={{ width: "200px", height: "200px" }}
          />
        ) : movieListError ? (
          <Alert variant="danger">Server error. Please try again later.</Alert>
        ) : movieListData ? (
          movieListData.map((movie: IMovieList, index: any) => {
            index++;
            return <MovieListComponent movie={movie} key={index} />;
          })
        ) : (
          <Alert variant="danger">{movieListApiError}</Alert>
        )}
        <MyPagination />
      </Container>
    </Container>
  );
};

export default MovieList;
