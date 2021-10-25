import React from "react";
import Staffs from "./Staffs";
import { STAFFS } from "../shared/staffs";

function Main() {
  return (
    <>
      <Staffs props={STAFFS} />
    </>
  );
}

export default Main;
