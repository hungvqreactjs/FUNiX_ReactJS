import React from "react";
import Staffs from "./Staffs";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import Departments from "./Departments"

function Main() {
  return (
    <div>
      <Staffs props={STAFFS} />
      <Departments props={DEPARTMENTS}/>
    </div>
  );
}

export default Main;
