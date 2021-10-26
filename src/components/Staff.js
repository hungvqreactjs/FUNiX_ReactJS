import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import InfoStaff from "./InfoStaff";
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
  const [staff, setStaff] = useState(null);

  const listStaffs = props.map((staff) => {
    return (
      <div className="col-12 col-md-5 m-1" key={staff.id}>
        <Staff staff={staff} onClick={() => setStaff(staff)} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
        </Breadcrumb>
            <hr/> 
      </div>
      <div className="row">{listStaffs}</div>
      {staff && (
        <div className="row">
          <InfoStaff staff={staff} />
        </div>
      )}
    </div>
  );
};

export default Staffs;
