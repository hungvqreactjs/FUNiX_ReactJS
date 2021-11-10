import React from "react";
import Home from "./Home";
import Staffs from "./Staff";
import Departments from "./Departments";
import Payroll from "./Payroll";
import Header from "./Header";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import InfoStaff from "./InfoStaff";
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    staff: state.staff,
    department: state.department,
  }
}


function Main(props) {
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
        <Route exact path="/nhan-vien" component={() => <Staffs props={props.staff} />} />
        <Route path="/nhan-vien/:id" component={InfoStaff} /> 
        <Route exact path="/phong-ban" component={() => <Departments props={props.department} />} />
        <Route exact path="/bang-luong" component={() => <Payroll props={props.staff} />} />
        <Redirect to="/trang-chu"/>
      </Switch>
    </div>
  );
}


export default withRouter(connect(mapStateToProps)(Main));
