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
import { Link, useParams } from "react-router-dom";

const InfoStaff = ({ props, department }) => {
  let { id } = useParams();

  var staff = null;
  var findDE = null;

  if (props.length > 0 && department.length > 0) {
    staff = props.filter((staff) => {
      return staff.id === Number(id);
    });
    staff = staff[0];
    findDE = department.find((x) => x.id === staff.departmentId).name;
  }

  return (
    <div className="container">
    
      {staff && (
        <>
          <div className="row">
            <Breadcrumb className="nav-router">
              <BreadcrumbItem>
                <Link to="/nhan-vien">Nhân Viên</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
            </Breadcrumb>
            <hr />
          </div>
          <Card className="card-info">
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
                <CardText>Phòng ban: {findDE}</CardText>
                <CardText>
                  Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                </CardText>
                <CardText>
                  Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
              </CardBody>
            </div>
          </Card>
        </>
      )}
    </div>
    
  );
};

export default InfoStaff;
