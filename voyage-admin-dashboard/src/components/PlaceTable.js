import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Container } from "reactstrap";
import { getNextPlaces, getPreviousPlaces } from "../actions/placeActions";
import Loader from "../components/Loader";


const PlaceTable = () => {
  const dispatch = useDispatch();

  const {
    lastObjectId,
    isEndOfPlacePage,
    isFirstPage,
    firstObjectId,
    places,
    loading,
  } = useSelector((state) => state.placeList);

  const handleNextPage = () => {
    if (!isEndOfPlacePage) {
      dispatch(getNextPlaces(lastObjectId));
    }
  };

  const handlePreviousPage = () => {
    dispatch(getPreviousPlaces(firstObjectId));
  };

  return (
    <Container className="col-xl-10 col-lg-10 offset-1">
      <h2 className="h2 text-center mb-4">Places Detail</h2>
      <Table bordered hover>
        <thead>
          <tr className="table-dark">
            <th>ID.</th>
            <th>Name</th>
            <th>Nearby Hotels</th>
            <th>Location</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {!loading && lastObjectId ? (
            places.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.stayPlace.length}</td>
                <td>{item.location}</td>
                <td>{item.ratings}</td>
              </tr>
            ))
          ) : (
            <Loader padding="20px" loaderText="" />
          )}
        </tbody>
      </Table>

      <div className="row mt-4">
        <div className="">
          <Button
            id="prev-btn"
            color="primary"
            outline
            onClick={handlePreviousPage}
            disabled={isFirstPage ? true : null}
          >
            Previous
          </Button>
          <Button
            id="next-btn"
            color="info"
            className="float-end"
            onClick={handleNextPage}
            disabled={isEndOfPlacePage ? true : null}
          >
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default PlaceTable;
