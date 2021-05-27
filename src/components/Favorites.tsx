import { Alert, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  getFavotiteMoviesSelector,
  getFavoritesLoadedSelector,
} from "../store/favorites/selector";
import MovieListComponent from "./MovieListComponent";
import { IMovieList } from "../store/movieList/types";
import { useEffect, useState } from "react";
import { loadFavoritesRequest } from "../store/favorites/actions";

const Favorites = () => {
  const FavoriteMovies = useSelector(getFavotiteMoviesSelector);
  const FavoriteMoviesLoaded = useSelector(getFavoritesLoadedSelector);
  const [favMovies, setFavMovies] = useState(FavoriteMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    setFavMovies(FavoriteMovies);
  }, [FavoriteMovies]);

  if (!FavoriteMoviesLoaded) {
    let tempFavoriteMovies = [];
    let tempStoredFavoriteMovies = localStorage.getItem("my-favotite-movies");
    if (tempStoredFavoriteMovies !== null)
      tempFavoriteMovies = JSON.parse(tempStoredFavoriteMovies);
    dispatch(
      loadFavoritesRequest({
        movieList: tempFavoriteMovies,
        loaded: true,
      })
    );
  }
  return (
    <Container className="p-0 flex-grow-1 overflow-hidden">
      <Container
        className="p-0 m-2 d-flex flex-row flex-wrap justify-content-center align-items-center"
        style={{
          overflowY: "auto",
          height: "calc(100% - 16px",
          width: "calc(100% - 16px",
        }}
      >
        {favMovies.length === 0 ? (
          <Alert variant="danger">No movies are set.</Alert>
        ) : (
          favMovies.map((movie: IMovieList, index: any) => {
            index++;
            return <MovieListComponent movie={movie} index={index} />;
          })
        )}
      </Container>
    </Container>
  );
};
export default Favorites;
