import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as StarRegular } from "@fortawesome/free-regular-svg-icons";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  getFavotiteMoviesSelector,
  getFavoritesLoadedSelector,
} from "../store/favorites/selector";
import { useSelector, useDispatch } from "react-redux";
import {
  loadFavoritesRequest,
  addToFavoritesRequest,
  removeFromFavorites,
} from "../store/favorites/actions";

const FavoriteIcon = (props: any) => {
  const [inFavorites, setInFavorites] = useState(true);
  const FavoriteMovies = useSelector(getFavotiteMoviesSelector);
  const FavoriteMoviesLoaded = useSelector(getFavoritesLoadedSelector);
  const dispatch = useDispatch();

  const checkInFavorites = () => {
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
    let isInFavorites =
      FavoriteMovies.filter((x) => x.imdbID === props.movieDetails.imdbID)
        .length !== 0;

    if (inFavorites !== isInFavorites) setInFavorites(isInFavorites);
  };

  useEffect(() => {
    if (FavoriteMovies.length !== 0)
      localStorage.setItem(
        "my-favotite-movies",
        JSON.stringify(FavoriteMovies)
      );
  }, [FavoriteMovies]);

  checkInFavorites();

  const handleClick = () => {
    if (inFavorites) {
      dispatch(removeFromFavorites(props.movieDetails.imdbID));
    } else {
      dispatch(
        addToFavoritesRequest({
          Title: props.movieDetails.Title,
          Year: props.movieDetails.Year,
          imdbID: props.movieDetails.imdbID,
          Type: props.movieDetails.Type,
          Poster: props.movieDetails.Poster,
        })
      );
    }
  };

  return (
    <Container
      className="p-0 m-0"
      style={{
        position: "absolute",
        right: "10px",
        top: "10px",
        width: "24px",
        cursor: "pointer",
      }}
    >
      <FontAwesomeIcon
        icon={inFavorites ? StarSolid : StarRegular}
        size="lg"
        color="yellow"
        onClick={() => handleClick()}
      />
    </Container>
  );
};
export default FavoriteIcon;
