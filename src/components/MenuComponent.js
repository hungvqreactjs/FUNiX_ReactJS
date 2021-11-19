import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const Menu = ({dishes}) => {

  console.log("dishes",dishes)
  const menu = dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card
          className="row"
          key={dish.id}
        >
          <CardImg className="col-4" src={dish.image} alt={dish.name} />
          <CardImgOverlay className="col-8">
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        <div className="col-12 col-md-5 m-1"></div>
      </div>
    </div>
  );
};

export default Menu;
