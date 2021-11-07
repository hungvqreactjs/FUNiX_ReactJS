import React from "react";
import dateFormat from "dateformat";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const StaffDetail = () => {
  let location = useLocation();


  return (
    <div className="row">
      <Breadcrumb className="nav-router">
        <BreadcrumbItem>
          <Link to="/trang-chu">Trang chủ</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/nhan-vien">Nhân viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{location.staff.name}</BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <Card className="card-info" style={{backgroundImage: `url(/assets/images/logo1.png)`}}>
        <div className="row">
          <div className="col-lg-3 col-sm-4 col-12">
            <CardImg
              className=" img-info"
              width="100%"
              src={location.staff.image}
              alt={location.staff.name}
            />
          </div>
          <CardBody className="col-lg-9 col-sm-8 col-12">
            <CardTitle className="card-title-info">{location.staff.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(location.staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {location.staff.department.name}</CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(location.staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Số ngày làm thêm: {location.staff.overTime}</CardText>
            <CardText>Số ngày nghỉ còn lại: {location.staff.annualLeave}</CardText>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default StaffDetail;
