import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Loading, Error } from './Loading&Error'

const StaffsSalary = ({ props, isLoading, ErrMess }) => {
  const payRoll = props.map((payroll) => {
    return (
      <div className="col-lg-4 col-sm-6 col-12 " key={payroll.id}>
        <Card className="card-payroll">
          <CardTitle>{payroll.name}</CardTitle>
          <CardText>Mã Nhân Viên: {payroll.id}</CardText>
          <CardText>Hệ Sô lương: {payroll.salaryScale}</CardText>
          <CardText>Số ngày làm thêm {payroll.overTime}</CardText>
          <CardTitle>Lương: {payroll.salary}</CardTitle>
        </Card>
      </div>
    );
  });
console.log('loading',isLoading)
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
        <div className="row nav-menu">
          <div className="col-4">
            <Breadcrumb className="nav-router">
              <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <hr />
        </div>
        <div className="row">{payRoll}</div>
      </div>
    );
  }
};
export default StaffsSalary;
