import React from "react";
import { Table, Container, Button } from "reactstrap";
import "./ReviewTable.css";

const ReviewTable = () => {
  return (
    <Container fluid className="col-xl-10 col-lg-10 offset-1">
      <Table bordered>
        <thead>
          <tr className="table-dark">
            <th>Review Id.</th>
            <th>User Id</th>
            <th>Review Text</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456</td>
            <td>245345345</td>
            <td id="review-text">Great Place lorem.</td>
            <td id="review-action">
                <Button
                color="danger"
                className="float-start"
                onClick={() => alert('Review Rejected')}
                >
                    Reject
                </Button>
                <Button
                color="success"
                className="float-end"
                onClick={() => alert('Review Approved')}
                >
                    Approve
                </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="row mt-4">
        <div className="">
          <Button
            id="prev-btn"
            color="primary"
            outline
          >
            Previous
          </Button>
          <Button
            id="next-btn"
            color="info"
            className="float-end"
          >
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ReviewTable;
