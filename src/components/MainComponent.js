import React from "react";
//import "./App.css";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Home from "./HomeComponent";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

function Main(props) {
 
  console.log("ok",props)

  const HomePage = () => {
    return <Home   dish={DISHES.filter((dish) => dish.featured)[0]}
    promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
    leader={LEADERS.filter((leader) => leader.featured)[0]}/>;
  };

  const DishWithId = ({match}) => {
    return(
        <DishDetail dish={DISHES.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={COMMENTS.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={DISHES} />} />
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path='/contactus' component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
