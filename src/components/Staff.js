import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Staff = ({ staff, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Link to={`/nhan-vien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <CardTitle>{staff.name}</CardTitle>
      </Link>
    </Card>
  );
};

const Staffs = ({ props }) => {
 
  const listStaffs = props.map((staff) => {
      return (
        <div className="col-6 col-sm-4 col-lg-2" key={staff.id}>
          <Staff staff={staff} />
        </div>
      );
    });

  return (
    <div className="container">
      <div className="row nav-menu">
        <div className="col-4">
          <Breadcrumb className="nav-router">
            <BreadcrumbItem>
              <Link to="/trang-chu">Trang chủ</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <hr />
      </div>
      <div className="row">{listStaffs}</div> 
    </div>
  );
};

export default Staffs;
