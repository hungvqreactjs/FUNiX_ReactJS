import React from "react";
//import "./App.css";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from './ContactComponent';
import About from "./AboutComponent";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}



function Main(props) {

  console.log("main",props)
 
  const HomePage = () => {
    return <Home   dish={props.dishes.filter((dish) => dish.featured)[0]}
    promotion={props.promotions.filter((promo) => promo.featured)[0]}
    leader={props.leaders.filter((leader) => leader.featured)[0]}/>;
  };

  const DishWithId = ({match}) => {
    return(
        <DishDetail dish={props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={props.dishes} />} />
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path='/contactus' component={Contact} />
        <Route exact path="/aboutus" component={() => <About leaders={props.leaders} />} />
        
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(Main));
