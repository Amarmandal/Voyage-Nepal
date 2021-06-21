import React from "react";

const OverviewCard = ({ title, info, borderStyle = "primary" }) => {
  const handleOnClick = () => {
    alert('Hello, Amar')
  }

  return (
    <div className={`card border-left-${borderStyle} shadow h-100 py-2`}
    style={{ cursor: 'pointer'}}
    onClick={handleOnClick}
    >
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col ms-2">
            <div
              className={`text-xs font-weight-bold text-${borderStyle} text-uppercase mb-1`}
            >
              {title}
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{info}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
