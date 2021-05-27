import { useSelector } from "react-redux";
import {
  getMovieDetailsDataSelector,
  getMovieDetailsPendingSelector,
  getMovieDetailsErrorSelector,
} from "../store/movieDetails/selectors";
import { Container, Card, Col, Row, Alert, Image } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovieDetailsRequest } from "../store/movieDetails/actions";
import { useParams } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";

const MovieDetails = () => {
  const movieDetailsPending = useSelector(getMovieDetailsPendingSelector);
  const movieDetailsData = useSelector(getMovieDetailsDataSelector);
  const movieDetailsError = useSelector(getMovieDetailsErrorSelector);
  const dispatch = useDispatch();
  const { imdbID } = useParams<{ imdbID: string }>();

  useEffect(() => {
    dispatch(fetchMovieDetailsRequest(imdbID));
  }, [dispatch, imdbID]);

  return (
    <Container fluid className="p-0 m-0 flex-grow-1 overflow-hidden">
      <Container
        fluid
        className="p-0 m-2 d-flex flex-row flex-wrap justify-content-center align-items-center"
        style={{
          overflowY: "auto",
          height: "calc(100% - 16px",
          width: "calc(100% - 16px",
        }}
      >
        {movieDetailsPending ? (
          <Image
            src="/images/loading.gif"
            roundedCircle
            style={{ width: "200px", height: "200px" }}
          />
        ) : movieDetailsError ? (
          <Alert variant="danger">Server error. Please try again later.</Alert>
        ) : JSON.stringify(movieDetailsData) !== "[]" ? (
          <Container className="p-0 d-flex flex-row flex-wrap">
            <Col className="p-0 d-flex align-items-center" md={6} sm={12}>
              <Container
                className="m-0 w-100 position-relative  pr-0 pl-0 "
                style={{
                  position: "relative",
                  paddingTop: "133%",
                }}
              >
                <Container
                  className="position-absolute p-0"
                  style={{ left: "0", right: "0", top: "0", bottom: "0" }}
                >
                  <Card.Img
                    variant="top"
                    src={
                      movieDetailsData.Poster === "N/A"
                        ? "/images/poster-holder.jpg"
                        : movieDetailsData.Poster
                    }
                    className="w-100 h-100 "
                    style={{ objectFit: "cover" }}
                  />
                </Container>
              </Container>
            </Col>
            <Col className="p-0 d-flex align-items-center" md={6} sm={12}>
              <Container
                className="m-0 w-100 position-relative  pr-0 pl-0 "
                style={{
                  position: "relative",
                  paddingTop: "133%",
                }}
              >
                <Container
                  className="position-absolute p-0 bg-primary text-white overflow-auto"
                  style={{ left: "0", right: "0", top: "0", bottom: "0" }}
                >
                  <FavoriteIcon movieDetails={movieDetailsData} />
                  <Row className="m-0">
                    <Row className="mx-5 mt-5 w-100 d-flex justify-content-center align-items-center">
                      <Row className="m-0 w-100 d-flex justify-content-center align-items-center">
                        <h3 className="text-center w-100">
                          {movieDetailsData.Title} ({movieDetailsData.Year})
                        </h3>
                        <h5>
                          {movieDetailsData.Genre} . {movieDetailsData.Runtime}
                        </h5>
                      </Row>
                    </Row>
                  </Row>
                  <Row className="m-0">
                    <Row className="mx-5 my-1 w-100 d-flex justify-content-center align-items-center">
                      <Row className="m-0 w-100 d-flex justify-content-start align-items-center">
                        <p className="w-100 text-center">
                          <strong>imdbRating :</strong>{" "}
                          {movieDetailsData.imdbRating}{" "}
                          <strong>imdbVotes :</strong>{" "}
                          {movieDetailsData.imdbVotes}
                        </p>
                        <p className="w-100">
                          <strong>Language :</strong>{" "}
                          {movieDetailsData.Language}
                        </p>
                        <p>
                          <strong>Country :</strong> {movieDetailsData.Country}
                        </p>
                      </Row>
                    </Row>
                  </Row>
                  <Row className="m-0">
                    <Row className="mx-5 my-1 w-100 d-flex justify-content-center align-items-center">
                      <Row className="m-0 w-100 d-flex justify-content-start align-items-center">
                        <p>
                          <strong>Overview :</strong> {movieDetailsData.Plot}
                        </p>
                      </Row>
                    </Row>
                  </Row>
                  <Row className="m-0">
                    <Row className="mx-5 mt-1 mb-5w-100 d-flex justify-content-center align-items-center">
                      <Row className="m-0 w-100 d-flex justify-content-start align-items-center">
                        <p>
                          <strong>Writer :</strong> {movieDetailsData.Writer}
                        </p>
                        <p>
                          <strong>Actors :</strong> {movieDetailsData.Actors}
                        </p>
                      </Row>
                    </Row>
                  </Row>
                </Container>
              </Container>
            </Col>
          </Container>
        ) : (
          <Alert variant="danger">{movieDetailsError}</Alert>
        )}
      </Container>
    </Container>
  );
};

export default MovieDetails;
