import React, { useState } from "react";
import InfoStaff from "./InfoStaff";
import Staff from "./Staff";

const Staffs = ({ props }) => {
  const [staff, setStaff] = useState(null);

  const listStaffs = props.map((staff) => {
    return (
      <div className="col-12 col-md-5 m-1" key={staff.id}>
        <Staff staff={staff} onClick={() => setStaff(staff)} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{listStaffs}</div>
      {staff && (
        <div className="row">
          <InfoStaff staff={staff} />
        </div>
      )}
    </div>
  );
};

export default Staffs;
