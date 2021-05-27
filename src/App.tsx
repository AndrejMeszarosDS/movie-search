import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyNavBar from "./components/MyNavBar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Favorites from "./components/Favorites";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <Container
        fluid
        className="p-0 h-100 d-flex flex-column"
        style={{
          backgroundImage: "url(/images/background.jpg)",
          backgroundSize: "cover",
        }}
      >
        <MyNavBar />
        <Container fluid className="p-2 bg-primary d-block d-md-none">
          <SearchBar />
        </Container>
        <Switch>
          <Route path="/details/:imdbID" component={MovieDetails}></Route>
          <Route path="/search/:title/:page" component={MovieList}></Route>
          <Route path="/favorites" component={Favorites}></Route>
          <Route path="/" component={About}></Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
