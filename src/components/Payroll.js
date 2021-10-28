import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Column from "./Column";
import Search from "./Search";

const Payroll = ({ props }) => {
  // Tính lương
  const countSalary = props.map((obj) => ({
    ...obj,
    salary: 2000 * obj.salaryScale + obj.overTime * 100,
  }));
  // Lương từ thấp đên cao
  const lowToHigh = countSalary.sort((a, b) =>
    a.salary > b.salary ? 1 : b.salary > a.salary ? -1 : 0
  );
  // Lương từ cao đến thấp
  const highToLow = countSalary.sort((a, b) =>
    a.salary < b.salary ? 1 : b.salary < a.salary ? -1 : 0
  );
  const [searchKey, setSearchKey] = useState("");
  const [salaryColumn, setsalaryColumn] = useState(countSalary);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchKey(value);
  };

  const salaryDropDown = (e) => {
    setsalaryColumn(e.target.value);
  };

  const payroll = salaryColumn
    .filter((payroll) => {
      if (searchKey == "") {
        return payroll;
      } else if (payroll.name.toLowerCase().includes(searchKey.toLowerCase())) {
        return payroll;
      }
    })
    .map((payroll) => {
      return (
        <div className="col-lg-4 col-sm-6 col-12 " key={payroll.id}>
          <Card className="card-payroll">
            <CardTitle>{payroll.name}</CardTitle>
            <CardText>Mã Nhân Viên: {payroll.id}</CardText>
            <CardText>Hệ Sô lương: {payroll.salaryScale}</CardText>
            <CardText>Số ngày làm thêm {payroll.overTime}</CardText>
            <CardTitle>Lương: {payroll.salary}</CardTitle>
          </Card>
        </div>
      );
    });
  console.log(payroll);
  return (
    <div className="container">
      <div className="row nav-menu">
        <div className="col-4">
          <Breadcrumb className="nav-router">
            <BreadcrumbItem>
              <Link to="/home">Trang chủ</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="nav-function col-6">
          <Search onChange={(e) => handleSearch(e)} />
          <Column
            onClick={salaryDropDown}
            name="Sắp xêp theo lương"
            label1="Mặc Định theo STT"
            value1={props}
            label2="Thâp đến cao"
            value2={lowToHigh}
            label3="Cao đến thấp"
            value3={highToLow}
          />
        </div>

        <hr />
      </div>
      <div className="row">{payroll}</div>
    </div>
  );
};

export default Payroll;
