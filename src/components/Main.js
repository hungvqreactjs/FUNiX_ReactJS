import React from "react";
import Staffs from "./Staffs";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import Departments from "./Departments"
import Payroll from "./Payroll";

function Main() {
  return (
    <div>
      <Staffs props={STAFFS} />
      <Departments props={DEPARTMENTS}/>
      <Payroll props={STAFFS} />
    </div>
  );
}

export default Main;
