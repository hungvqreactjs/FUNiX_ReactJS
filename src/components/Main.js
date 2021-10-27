import React from "react";
import Home from "./Home";
import Staffs from "./Staff";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import Departments from "./Departments";
import Payroll from "./Payroll";
import Header from "./Header";
import { Switch, Route, Redirect } from "react-router-dom";
import InfoStaff from "./InfoStaff";

function Main() {
  const HomePage = () =>{
    return(
      <Home/>
    )
  }

/*const StaffById = ({match}) => {
  return(
    <InfoStaff staff ={STAFFS.filter((staff) => staff.id)} />
  )
}*/

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/trang-chu" component={HomePage} />
        <Route exact path="/nhan-vien" component={() => <Staffs props={STAFFS} />} />
        <Route path="/nhan-vien/:id" component={InfoStaff} /> 
        <Route exact path="/phong-ban" component={() => <Departments props={DEPARTMENTS} />} />
        <Route exact path="/bang-luong" component={() => <Payroll props={STAFFS} />} />
        <Redirect to="/trang-chu"/>
      </Switch>
    </div>
  );
}

export default Main;
