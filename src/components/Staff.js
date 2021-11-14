import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { Loading, Error } from './Loading&Error'
import { FadeTransform } from 'react-animation-components';

const Staff = ({ staff }) => {
  
  return (
    <FadeTransform in
    transformProps={{
        exitTransform: 'scale(0.5) translateY(-70%)'
    }}>
    <Card>
      <Link to={`/nhan-vien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <CardTitle>{staff.name}</CardTitle>
      </Link>
    </Card>
    </FadeTransform>
  );
};

const Staffs = ({ props, isLoading, ErrMess}) => {
  let location = useLocation();
  const listStaffs = props.map((staff) => {
      return (
        <div className="col-6 col-sm-4 col-lg-2" key={staff.id}>
          <Staff staff={staff} />
        </div>
      );
    });
    if (isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (ErrMess) {
      return(
          <div className="container">
              <div className="row"> 
                  <div className="col-12">
                  <Error/>
                  </div>
              </div>
          </div>
      );
  }
  else{
  return (
    <div className="container">
      {location.pathname === "/nhan-vien" ? <div className="row nav-menu">
        <div className="col-4">
          <Breadcrumb className="nav-router">
            <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <hr />
      </div> : ""}
      <div className="row">{listStaffs}</div> 
    </div>
  )};
};

export default Staffs;
