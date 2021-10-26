import React from "react";
import Home from "./Home";
import Staffs from "./Staff";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import Departments from "./Departments";
import Payroll from "./Payroll";
import Header from "./Header";
import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
  const HomePage = () =>{
    return(
      <Home/>
    )
  }
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/trang-chu" component={HomePage} />
        <Route exact path="/nhan-vien" component={() => <Staffs props={STAFFS} />} />
        <Route exact path="/phong-ban" component={() => <Departments props={DEPARTMENTS} />} />
        <Route exact path="/bang-luong" component={() => <Payroll props={STAFFS} />} />
        <Redirect to="/trang-chu"/>
      </Switch>
      <Payroll props={STAFFS} />
    </div>
  );
}

export default Main;
