import React, { useEffect } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";
import {
  addComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});

function Main(props) {
  useEffect(() => {
    props.fetchDishes();
    props.fetchComments();
    props.fetchPromos();
    props.fetchLeaders();
  }, []);

  console.log("props", props);

  const HomePage = () => {
    console.log("HOMEPAGE", props.dishes);
    return (
     <Home
        dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={props.dishes.isLoading}
        dishesErrMess={props.dishes.errMess}
        promotion={props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promoLoading={props.promotions.isLoading}
        promoErrMess={props.promotions.errMess}
        leader={props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leadersLoading={props.leaders.isLoading}
        leadersErrMess={props.leaders.errMess}
      /> 

  );
}; 

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          props.dishes.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        isLoading={props.dishes.isLoading}
        errMess={props.dishes.errMess}
        comments={props.comments.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
        commentsErrMess={props.comments.errMess}
        addComment={props.addComment}
      />
    );
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route
          exact
          path="/menu"
          component={() => <Menu dishes={props.dishes} />}
        />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route
          exact
          path="/contactus"
          component={() => (
            <Contact resetFeedbackForm={props.resetFeedbackForm} />
          )}
        />
        <Route
          exact
          path="/aboutus"
          component={() => <About leaders={props.leaders} />}
        />

        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
