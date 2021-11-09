import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Payroll from "./pages/Payroll";
import Staffs from "./pages/Staffs";
import Departments from "./pages/Departments";
import StaffDetail from "./pages/StaffDetail";
import Layout from "./layout/Layout";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log("state",state)
  return {
    staff: state.staff,
    department: state.department
  
  }
}

function App(reduxstate) {
  
  console.log("state staff",reduxstate.staff)
  return (
   
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/trang-chu" component={HomePage} />
        <Route exact path="/nhan-vien" component={() => <Staffs props={reduxstate.staff} />}/>
        <Route path="/nhan-vien/:id" component={StaffDetail} /> 
        <Route exact path="/phong-ban" component={() => <Departments props={reduxstate.department} />} />
        <Route exact path="/bang-luong" component={() =>  <Payroll props={reduxstate.staff}/>} />
      </Switch>
    </Layout>
   
  );
}

export default withRouter(connect(mapStateToProps)(App));
