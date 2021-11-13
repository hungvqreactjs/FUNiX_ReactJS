import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Loading, Error } from "./Loading&Error";
import { Link } from "react-router-dom";

const Departments = ({ props, isLoading, ErrMess }) => {
  const departments = props.map((department) => {
    return (
      <div className="col-lg-4 col-sm-6 col-12" key={department.id}>
        <Card>
          <Link to={`/phong-ban/${department.id}`}>
            <CardTitle>{department.name}</CardTitle>
            <CardText>Số nhân viên: {department.numberOfStaff}</CardText>
          </Link>
        </Card>
      </div>
    );
  });

  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (ErrMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Error />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb className="nav-router">
            <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
          </Breadcrumb>
          <hr />
        </div>
        <div className="row">{departments}</div>
      </div>
    );
  }
};

export default Departments;
