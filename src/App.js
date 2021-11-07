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
  return {
    staff: state.staff,
  
  }
}

function App() {
  

  return (
   
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/trang-chu" component={HomePage} />
        <Route exact path="/nhan-vien" component={Staffs}/>
      
        <Route path="/nhan-vien/:id" component={StaffDetail} /> 
        <Route exact path="/phong-ban" component={Departments} />
        <Route exact path="/bang-luong" component={Payroll} />
      </Switch>
    </Layout>
   
  );
}

export default withRouter(connect(mapStateToProps)(App));
