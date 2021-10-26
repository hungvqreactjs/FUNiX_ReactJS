import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Payroll = ({ props }) => {
  const payroll = props.map((payroll) => {
    return (
      <div className="col-12 col-md-5 m-1" key={payroll.id}>
        <Card onClick={payroll.id}>
          <CardTitle>{payroll.name}</CardTitle>
          <CardText>Mã Nhân Viên: {payroll.id}</CardText>
          <CardText>Hệ Sô lương: {payroll.salaryScale}</CardText>
          <CardText>Số ngày làm thêm {payroll.overTime}</CardText>
          <CardText>
            Lương {2000 * payroll.salaryScale + payroll.overTime * 100}
          </CardText>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
        <hr />
      </div>
      <div className="row">{payroll}</div>
    </div>
  );
};

export default Payroll;
