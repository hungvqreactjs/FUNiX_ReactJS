import React, { useEffect } from "react";
import Staffs from "./Staff";
import Departments from "./Departments";
import Payroll from "./Payroll";
import Header from "./Header";
import InfoStaff from "./InfoStaff";
import ListStaffDepartment from "./ListStaffDepartment";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStaff, fetchDepartment } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    staff: state.staff,
    department: state.department,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStaff: () => {
    dispatch(fetchStaff());
  },
  fetchDepartment: () => {
    dispatch(fetchDepartment());
  },
});

function Main(props) {
  useEffect(() => {
    props.fetchStaff();
    props.fetchDepartment();
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/nhan-vien"
          component={() => (
            <Staffs
              props={props.staff.staffs}
              isLoading={props.staff.isLoading}
              ErrMess={props.staff.errMess}
            />
          )}
        />
        <Route
          path="/nhan-vien/:id"
          children={<InfoStaff props={[...props.staff.staffs]} department={[...props.department.departments]} />}
        />
        <Route
          exact
          path="/phong-ban"
          component={() => (
            <Departments
              props={props.department.departments}
              isLoading={props.department.isLoading}
              ErrMess={props.department.errMess}
            />
          )}
        />
        <Route
          path="/phong-ban/:id"
          children={<ListStaffDepartment props={[...props.staff.staffs]} department={[...props.department.departments]} />}
        />
        <Route
          exact
          path="/bang-luong"
          component={() => <Payroll props={props.staff.staffs} />}
        />
        <Redirect to="/nhan-vien" />
      </Switch>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
