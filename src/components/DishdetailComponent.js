import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const DishDetail = ({ dish, comments }) => {

  const RenderDish = (dish) => {

    return (
      <div className=" col-12 col-md-5 m-1">
      <Card key={dish.dish.id}>
        <CardImg top src={dish.dish.image} alt={dish.dish.name} />
        <CardBody>
          <CardTitle>{dish.dish.name}</CardTitle>
          <CardText>{dish.dish.description}</CardText>
        </CardBody>
      </Card>
      </div>
    );
  };
  const RenderComments = (comments) => {

    if (comments != null)
      return (
        <div className=" col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>{comment.author}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    else return <div></div>;
  };

  return (
    <div>
           <div className="container">
           <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row">
      <RenderDish dish={dish} />
      <RenderComments comments={comments} />
      </div>
      </div>
    </div>
  );
};

export default DishDetail;
