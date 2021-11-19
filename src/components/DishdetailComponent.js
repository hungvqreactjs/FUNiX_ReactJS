import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Dishdetail = ({ dish,index }) => {

  console.log("dish",dish)
  return (
    <Card key={index}>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default Dishdetail;
