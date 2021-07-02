import React from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { Table } from "reactstrap";

const HotelTable = () => {

  return (
    <Table bordered hover>
      <thead>
        <tr className="table-dark">
          <th>ID.</th>
          <th>Name</th>
          <th>Rating</th>
          <th>Stay Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>One</td>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
        </tr>
        <tr>
            <td>One</td>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
        </tr>
        <tr>
            <td>One</td>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
        </tr>
        <tr>
            <td>One</td>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
        </tr>
        <tr>
            <td>One</td>
            <td>Two</td>
            <td>Three</td>
            <td>Four</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default HotelTable;
