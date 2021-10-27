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
import { Link, useRouteMatch } from "react-router-dom";
import { STAFFS } from "../shared/staffs";


const InfoStaff = () => {
  let match = useRouteMatch();

  var staff = STAFFS.filter(staff => {
    return staff.id == match.params.id;
  })
  staff = staff[0];

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
        <Card>
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
