import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderCard({ item, isLoading, errMess }) {
  console.log("item", item);
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card>
        {item && <CardImg src={baseUrl + item.image} alt={item.name} />}
        <CardBody>
          {item && <CardTitle>{item.name}</CardTitle>}
          {item && <CardSubtitle>{item.designation}</CardSubtitle>}
          {item && <CardText>{item.description}</CardText>}
        </CardBody>
      </Card>
    );
}

function Home(props) {
  return (
    <div className="container">
      {props && props.dish ? (
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.dish}
              isLoading={props.dishesLoading}
              errMess={props.dishesErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.promotion}
              isLoading={props.promoLoading}
              errMess={props.promoErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.leader}
              isLoading={props.leaderLoading}
              errMess={props.leaderErrMess}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Home;
