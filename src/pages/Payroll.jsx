import React from "react";
import { STAFFS } from "../data/staffs";
import { Link } from "react-router-dom";

import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

const Payroll = () => {
  const listSalary = STAFFS.map((obj) => ({
    ...obj,
    salary: 2000 * obj.salaryScale + obj.overTime * 100,
  }));

  return (
    <div className="row">
      <div className="row">
        <Breadcrumb className="nav-router">
          <BreadcrumbItem>
            <Link to="/trang-chu">Trang chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
        <hr />
      </div>
      {listSalary.map((staff, index) => {
        return (
          <div className="col-lg-4 col-sm-6 col-12 " key={index}>
            <Card
              className="card-payroll"
              style={{ backgroundImage: `url(/assets/images/logo1.png)` }}
            >
              <CardTitle>{staff.name}</CardTitle>
              <CardText>Mã Nhân Viên: {staff.id}</CardText>
              <CardText>Hệ Sô lương: {staff.salaryScale}</CardText>
              <CardText>Số ngày làm thêm {staff.overTime}</CardText>
              <CardTitle>Lương: {staff.salary}</CardTitle>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Payroll;
