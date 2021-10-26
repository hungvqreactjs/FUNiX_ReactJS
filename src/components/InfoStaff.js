import React from "react";
import dateFormat from "dateformat";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const InfoStaff = ({ staff, onClick }) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/home">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
        </Breadcrumb>
        <hr />
      </div>
      <div className="row">
        <Card onClick={() => onClick(staff.id)}>
          <CardBody>
            <CardTitle tag="h5">{staff.name}</CardTitle>
            <CardText>Phòng ban: {staff.department.name}</CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default InfoStaff;
