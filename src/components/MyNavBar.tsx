import { Navbar, Nav, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";

const MyNavBar = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push("/");
  };

  const handleGoFavorites = () => {
    history.push("/favorites");
  };

  return (
    <Container fluid className="bg-primary p-0">
      <Container className="p-0">
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
          <Navbar.Brand
            style={{
              cursor: "pointer",
            }}
            onClick={() => handleGoHome()}
          >
            Movie search engine
          </Navbar.Brand>
          <FontAwesomeIcon
            icon={StarSolid}
            size="lg"
            color="yellow"
            onClick={() => handleGoFavorites()}
            style={{
              cursor: "pointer",
            }}
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="d-none">
            <Nav className="mr-auto">
              <Nav.Link
                style={{
                  cursor: "pointer",
                }}
                onClick={() => handleGoFavorites()}
                href="#"
              >
                My Favorites
              </Nav.Link>
            </Nav>
            <SearchBar />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
};
export default MyNavBar;
