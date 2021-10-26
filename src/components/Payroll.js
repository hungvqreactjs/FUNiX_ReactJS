import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

const Payroll =({props}) => {
  const payroll =  props.map((payroll) => {
    return (
      <div className="col-12 col-md-5 m-1" key={payroll.id}>
        <Card onClick={payroll.id}>
          <CardTitle>{payroll.name}</CardTitle>
          <CardText>Mã Nhân Viên: {payroll.id}</CardText>
          <CardText>Hệ Sô lương: {payroll.salaryScale}</CardText>
          <CardText>Số ngày làm thêm {payroll.overTime}</CardText>
          <CardText>Lương {2000*payroll.salaryScale + payroll.overTime*100}</CardText>
        </Card>
      </div>
    );
  });
  return(
      <div>
        {payroll}
      </div>
  )
}


export default Payroll;
