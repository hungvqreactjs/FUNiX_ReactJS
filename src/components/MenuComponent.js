import React from "react";
import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

const Menu = ({dishes}) => {

 console.log("dishes",dishes)
  const menu = dishes.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card
          className="row"
          key={dish.id}
        > <Link to={`/menu/${dish.id}`} >
          <CardImg className="col-4" src={dish.image} alt={dish.name} />
          <CardImgOverlay className="col-8">
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
          </Link>
        </Card>
      </div>
    );
  });

  if (dishes.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (dishes.errMess) {
    return(
        <div className="container">
            <div className="row"> 
                <div className="col-12">
                    <h4>{dishes.errMess}</h4>
                </div>
            </div>
        </div>
    );
}
else{
  return (
    <div className="container">
       <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
      <div className="row">{menu}</div>
      <div className="row">
        <div className="col-12 col-md-5 m-1"></div>
      </div>
    </div>
  );
};
}
export default Menu;
