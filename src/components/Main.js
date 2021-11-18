import React, { useEffect } from "react";
import Staffs from "./Staff";
import Header from "./Header";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStaff} from "../redux/ActionCreators";



const mapStateToProps = (state) => {
  return {
    staff: state.staff,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStaff: () => {
    dispatch(fetchStaff());
  },
});

function Main(props) {

  useEffect(() => {
    props.fetchStaff();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  NewStaffForm={props.NewStaffForm} 
                />
              )}
            />
           
          </Switch>
       
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
