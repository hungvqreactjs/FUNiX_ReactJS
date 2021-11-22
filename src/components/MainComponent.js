import React, {useEffect} from "react";
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
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),

  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

});


function Main(props) {
  useEffect(() => {
    props.fetchDishes();
  }, []);

  console.log('props',props)

  const HomePage = () => {
    return <Home   dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
    dishesLoading={props.dishes.isLoading}
    dishesErrMess={props.dishes.errMess}
    promotion={props.promotions.filter((promo) => promo.featured)[0]}
    leader={props.leaders.filter((leader) => leader.featured)[0]}/>;
  };

  const DishWithId = ({match}) => {
    return(
        <DishDetail dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        isLoading={props.dishes.isLoading}
        errMess={props.dishes.errMess}
          comments={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          addComment={props.addComment} />
    );
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={props.dishes} />} />
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={props.resetFeedbackForm}  />} />
        <Route exact path="/aboutus" component={() => <About leaders={props.leaders} />} />
        
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
