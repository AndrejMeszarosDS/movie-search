import { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  getMovieListCountSelector,
  getMovieListSearchTextSelector,
  getMovieListPageActualSelector,
} from "../store/movieList/selectors";
import { useHistory } from "react-router-dom";

const MyPagination = () => {
  const [pageItems, setPageItems] = useState<number[]>([]);
  const history = useHistory();
  const movieListCount = useSelector(getMovieListCountSelector);
  const movieSearchText = useSelector(getMovieListSearchTextSelector);
  const moviePageActual = useSelector(getMovieListPageActualSelector);

  let pageCount: number = Math.ceil(movieListCount / 10);
  let pageActual: number = moviePageActual;

  useEffect(() => {
    let pageStartItem: number = 1;
    let pageItemNumber = pageCount;
    if (pageItemNumber > 5) pageItemNumber = 5;

    if (pageCount > 5) {
      if (pageActual < 4) {
        pageStartItem = 1;
      } else if (pageCount - pageActual < 3) {
        pageStartItem = pageCount - 4;
      } else {
        pageStartItem = pageActual - 2;
      }
    }

    let tempPageItems = [];
    var i: number;
    for (i = 0; i < pageItemNumber; i++) {
      tempPageItems.push(i + pageStartItem);
    }
    setPageItems(tempPageItems);
  }, [pageActual, pageCount]);

  return pageCount === 0 ? null : (
    <Container className="w-100 m-0 p-0 d-flex justify-content-center align-items-center">
      <Pagination>
        {pageCount > 1 ? (
          <Pagination.Prev
            disabled={pageActual === 1}
            onClick={() =>
              history.push(
                "/search/" + movieSearchText + "/" + (pageActual - 1)
              )
            }
          />
        ) : null}
        {pageItems.map((pageNumber) => (
          <Pagination.Item
            active={pageActual === pageNumber}
            key={pageNumber}
            onClick={() =>
              history.push("/search/" + movieSearchText + "/" + pageNumber)
            }
          >
            {pageNumber}
          </Pagination.Item>
        ))}
        {pageCount > 1 ? (
          <Pagination.Next
            disabled={pageActual === pageCount}
            onClick={() =>
              history.push(
                "/search/" + movieSearchText + "/" + (pageActual + 1)
              )
            }
          />
        ) : null}
      </Pagination>
    </Container>
  );
};
export default MyPagination;
