import { Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const handleRequest = () => {
    history.push("/search/" + searchText + "/1");
  };

  const handleSearchInput = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleEnter = (event: any) => {
    if (event.charCode === 13) {
      event.preventDefault();
      handleRequest();
    }
  };

  return (
    <Form className="d-flex">
      <FormControl
        onChange={handleSearchInput}
        onKeyPress={handleEnter}
        value={searchText}
        type="text"
        placeholder="Search"
        className="mr-2"
      />
      <Button
        disabled={searchText === ""}
        onClick={handleRequest}
        variant="outline-light"
        type="button"
      >
        Search
      </Button>
    </Form>
  );
};
export default SearchBar;
