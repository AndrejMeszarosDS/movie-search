import { Container, Jumbotron } from "react-bootstrap";

const About = () => {
  return (
    <Container className="p-0" style={{ height: "calc(100% - 56px - 56px" }}>
      <Container
        className="p-0 m-2 d-flex flex-row flex-wrap justify-content-center align-items-center"
        style={{
          overflowY: "auto",
          height: "calc(100% - 16px",
          width: "calc(100% - 16px",
        }}
      >
        <Jumbotron className="m-0">
          <h1>Welcome !</h1>
          <p className="text-justify">
            This is a simple movie search engine. Type the movie title in the
            seacrh field and hit enter or press Seach button. The list of movies
            found will appear. By clicking on Details button You get the details
            page. You can click on star icon to set this movie as Your favorit.
            The list of your favorite movies is also available with the My
            Favorites navigation click.
          </p>
        </Jumbotron>
      </Container>
    </Container>
  );
};
export default About;
