import React from "react";
import dateFormat from "dateformat";
import { STAFFS } from "../data/staffs";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link, useRouteMatch } from "react-router-dom";

const StaffDetail = () => {
  let match = useRouteMatch();

  var staff = STAFFS.filter((staff) => {
    return staff.id === Number(match.params.id);
  });
  staff = staff[0];

  return (
    <div className="row">
      <Breadcrumb className="nav-router">
        <BreadcrumbItem>
          <Link to="/trang-chu">Trang chủ</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/nhan-vien">Nhân viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <Card className="card-info" style={{backgroundImage: `url(/assets/images/logo1.png)`}}>
        <div className="row">
          <div className="col-lg-3 col-sm-4 col-12">
            <CardImg
              className=" img-info"
              width="100%"
              src={staff.image}
              alt={staff.name}
            />
          </div>
          <CardBody className="col-lg-9 col-sm-8 col-12">
            <CardTitle className="card-title-info">{staff.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {staff.department.name}</CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default StaffDetail;
