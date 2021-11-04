import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const Staff = ({ staff, onClick }) => {
  return (
    <Card onClick={onClick} style={{backgroundImage: `url(/assets/images/logo1.png)`}}>
      <Link to={`/nhan-vien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <CardTitle>{staff.name}</CardTitle>
      </Link>
    </Card>
  );
};

export default Staff;
