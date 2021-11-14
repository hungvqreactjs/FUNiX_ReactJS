import React from "react";

export const Loading = () => {
  return (
    <div className="col-12">
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};

export const Error = () => {
  return (
    <div className="col-12">
      <div className="spinner-grow text-danger" role="status">
      </div>
      <div className="text-danger">ERROR</div>
    </div>
  );
};
