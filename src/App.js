import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Payroll from "./pages/Payroll";
import Staffs from "./pages/Staffs";
import Departments from "./pages/Departments";
import StaffDetail from "./pages/StaffDetail";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/trang-chu" component={HomePage} />
        <Route exact path="/nhan-vien" component={Staffs} />
        <Route path="/nhan-vien/:id" component={StaffDetail} /> 
        <Route exact path="/phong-ban" component={Departments} />
        <Route exact path="/bang-luong" component={Payroll} />
        
      </Switch>
    </Layout>
  );
}

export default App;
