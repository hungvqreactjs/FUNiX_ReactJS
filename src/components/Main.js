import React, { useEffect } from "react";
import Staffs from "./Staff";
import Header from "./Header";
import InfoStaff from "./InfoStaff";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStaff,fetchDepartment} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";


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

console.log("ok",props)
  useEffect(() => {
    props.fetchStaff();
    props.fetchDepartment();
  }, []);


  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={props.location.key} classNames="page" timeout={300}>
          <Switch location={props.location}>
            <Route
              exact
              path="/nhan-vien"
              component={() => (
                <Staffs
                  props={props.staff.staffs}
                  isLoading={props.staff.isLoading}
                  ErrMess={props.staff.errMess}
                  NewStaffForm={props.NewStaffForm} 
                />
              )}
            />
            <Route
              path="/nhan-vien/:id"
              children={
                <InfoStaff
                  props={[...props.staff.staffs]}   
                  department={[...props.department.departments]}
                />
              }
            />
            <Redirect to="/nhan-vien" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
