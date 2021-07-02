import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import { Table, Button, Container } from "reactstrap";
import {
  getNextStayPlace,
  getPreviousStayPlace,
} from "../actions/stayPlaceActions";
import { FaPen, FaTrashAlt } from "react-icons/fa";


const HotelTable = () => {
  const dispatch = useDispatch();

  const {
    lastObjectId,
    isEndOfHotelPage,
    isFirstPage,
    firstObjectId,
    hotels,
    loading,
  } = useSelector((state) => state.hotelList);

  const handleNextPage = () => {
    if (!isEndOfHotelPage) {
      dispatch(getNextStayPlace(lastObjectId));
    }
  };

  const handlePreviousPage = () => {
    dispatch(getPreviousStayPlace(firstObjectId));
  };

  return (
    <Container className="col-xl-10 col-lg-10 offset-1">
      <h2 className="h2 text-center mb-4">Hotels Detail</h2>
      <Table bordered>
        <thead>
          <tr className="table-dark">
            <th>ID.</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Stay Type</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
        {!loading && lastObjectId ? (
            hotels.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.rating}</td>
                <td>{item.stayType}</td>
                <td>
                  <span className="mx-2">
                    <FaTrashAlt
                      onClick={() => alert(item._id)}
                      className="text-danger"
                    ></FaTrashAlt>
                  </span>
                  <span className="float-end me-2">
                    <FaPen></FaPen>
                  </span>
                </td>
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
            disabled={isEndOfHotelPage ? true : null}
          >
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HotelTable;
