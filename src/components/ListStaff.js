import React from "react";
import { Staff } from "./Staff";

const ListStaff = ({ listStaffs, onDelete }) => {
  return (
    <>
      {listStaffs.map((staff, index) => (
        <div className="col-6 col-sm-4 col-lg-2" key={index}>
          <Staff staff={staff} onDelete={onDelete} />
        </div>
      ))}
    </>
  );
};

export default ListStaff;
