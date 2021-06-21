import React from "react";
import OverviewCard from "./OverviewCard";
import { useSelector } from "react-redux";
import Loader from "./Loader";
// import PlaceForm from "./PlaceForm";

const Dashboard = () => {
  const { loading, countData, success } = useSelector(
    (state) => state.docsCount
  );

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <OverviewCard
            title="registered users"
            info={
              !loading && success && countData.data?.userCount
                ? countData.data.userCount
                : <Loader padding="5px" loaderText={null} />
            }
            borderStyle="primary"
          />
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <OverviewCard
            title="total places"
            info={
              !loading && success && countData.data?.placeCount
                ? countData.data.placeCount
                : <Loader padding="5px" loaderText={null} />
            }
            borderStyle="success"
          />
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <OverviewCard
            title="total categories"
            info={
              !loading && success && countData.data?.categoryCount
                ? countData.data.categoryCount
                : <Loader padding="5px" loaderText={null} />
            }
            borderStyle="info"
          />
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <OverviewCard
            title="Hotel and Restaurants"
            info={
              !loading && success && countData.data?.hotelCount
                ? countData.data.hotelCount
                : <Loader padding="5px" loaderText={null} />
            }
            borderStyle="warning"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-xl-7 col-lg-7"></div>
      </div>
    </>
  );
};

export default Dashboard;
