import React from "react";
import { DEPARTMENTS } from "../data/staffs";
import { Link } from "react-router-dom";

import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

const Departments = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="row">
        <Breadcrumb className="nav-router">
          <BreadcrumbItem>
            <Link to="/trang-chu">Trang chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Phòng ban
          </BreadcrumbItem>
        </Breadcrumb>
        <hr />
      </div>
      {DEPARTMENTS.map((department, index) => {
        return (
          <div className="col-lg-4 col-sm-6 col-12" key={index}>
            <Card onClick={department.id} style={{backgroundImage: `url(/assets/images/logo1.png)`}}>
              <CardTitle>{department.name}</CardTitle>
              <CardText>Số nhân viên: {department.numberOfStaff}</CardText>
            </Card>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Departments;
