import React from "react";
import dateFormat from "dateformat";
import {
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

const InfoStaff = ({ staff, onClick }) => {
  return (
      <Card  onClick={() => onClick(staff.id)}>
        <CardBody>
          <CardTitle tag="h5">{staff.name}</CardTitle>
          <CardText>
           Phòng ban: {staff.department.name}
          </CardText>
          <CardText>
            Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </CardText>
          <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
          <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
        </CardBody>
      </Card> 
  );
};

export default InfoStaff;
