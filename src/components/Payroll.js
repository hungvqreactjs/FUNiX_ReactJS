import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Column from "./Column";
import Search from "./Search";



const Payroll = ({ props }) => {
  const payroll = props.map((payroll) => {
    return (
      <div className="col-lg-4 col-sm-6 col-12 " key={payroll.id}>
        <Card className="card-payroll"> 
          <CardTitle>{payroll.name}</CardTitle>
          <CardText>Mã Nhân Viên: {payroll.id}</CardText>
          <CardText>Hệ Sô lương: {payroll.salaryScale}</CardText>
          <CardText>Số ngày làm thêm {payroll.overTime}</CardText>
          <CardTitle>
            Lương {2000 * payroll.salaryScale + payroll.overTime * 100}
          </CardTitle>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
    <div className="row nav-menu">
      <div className="col-4">
      <Breadcrumb className="nav-router">
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
      </Breadcrumb>
      </div>
      <div className="nav-function col-6">
        <Search />
        <Column />
      </div>

      <hr />
      </div>
      <div className="row">{payroll}</div>
    </div>
  );
};

export default Payroll;
