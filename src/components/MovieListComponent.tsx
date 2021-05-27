import { Button, Container, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const MovieListComponent = (props: any) => {
  const history = useHistory();

  let movie = props.movie;
  let index = props.index;

  return (
    <Col xl={3} lg={4} md={6} className="p-4" key={index}>
      <Card key={index} className="shadow">
        <Container
          className="m-0 w-100 position-relative  pr-0 pl-0 "
          style={{
            position: "relative",
            paddingTop: "113%",
          }}
        >
          <Container
            className="position-absolute p-0"
            style={{ left: "0", right: "0", top: "0", bottom: "0" }}
          >
            <Card.Img
              variant="top"
              src={
                movie.Poster === "N/A"
                  ? "/images/poster-holder.jpg"
                  : movie.Poster
              }
              className="w-100 h-100 "
              style={{ objectFit: "cover" }}
            />
          </Container>
        </Container>
        <Container
          className="m-0 w-100 position-relative  pr-0 pl-0 "
          style={{
            position: "relative",
            paddingTop: "60%",
          }}
        >
          <Container
            className="position-absolute p-0"
            style={{ left: "0", right: "0", top: "0", bottom: "0" }}
          >
            <Card.Body className="d-flex flex-column w-100 h-100 p-2 justify-content-between ">
              <Card.Title className="overflow-auto h-100 d-flex justify-content-center align-items-center">
                <h6 className="text-center">
                  {movie.Title} ({movie.Year})
                </h6>
              </Card.Title>
              <Container className="p-0">
                <Button
                  block
                  className="mb-0"
                  variant="primary"
                  onClick={() => history.push("/details/" + movie.imdbID)}
                >
                  Details
                </Button>
              </Container>
            </Card.Body>
          </Container>
        </Container>
      </Card>
    </Col>
  );
};
export default MovieListComponent;
