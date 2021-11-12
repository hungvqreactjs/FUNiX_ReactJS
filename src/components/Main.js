import React, {useEffect} from "react";
import Staffs from "./Staff";
import Departments from "./Departments";
import Payroll from "./Payroll";
import Header from "./Header";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import InfoStaff from "./InfoStaff";
import { connect } from 'react-redux';
import { fetchStaff } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    staff: state.staff,
    department: state.department,
  }
}

const mapDispatchToProps = (dispatch) => ({

  fetchStaff: () => { dispatch(fetchStaff())}
})

function Main(props) {

  useEffect(() => {
    props.fetchStaff();
  },[]);


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/nhan-vien" component={() => <Staffs props={props.staff.staffs} />} />
        <Route path="/nhan-vien/:id" component={InfoStaff} /> 
        <Route exact path="/phong-ban" component={() => <Departments props={props.department} />} />
        <Route exact path="/bang-luong" component={() => <Payroll props={props.staff.staffs} />} />
        <Redirect to="/trang-chu"/>
      </Switch>
    </div>
  );
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
