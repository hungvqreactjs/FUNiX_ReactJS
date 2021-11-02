import React from "react";
import { STAFFS, DEPARTMENTS } from "../data/staffs";
import Staff from "../components/Staff";

const Staffs = () => {
  return (
    <div className="row">
      {STAFFS.map((staff, index) => {
        return (
          <div className={`col-6 col-sm-4 col-lg-3`} key={index}>
            <Staff staff={staff}/>
          </div>
        );
      })}
    </div>
  );
};

export default Staffs;
