import React from "react";
//import "./App.css";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Home from "./HomeComponent";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

function Main() {
  let match = useRouteMatch();

  const HomePage = () => {
    return <Home />;
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={DISHES} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
