import React, { useState, useEffect } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Search from "./Search";

const Payroll = ({ props }) => {
  // Tính lương
  const listSalary = props.map((obj) => ({
    ...obj,
    salary: 2000 * obj.salaryScale + obj.overTime * 100,
  }));

  const [searchKey, setSearchKey] = useState("");
  const [salaryColumn, setSalaryColumn] = useState(listSalary);
  const [stateSalary, setStateSalary] = useState([]);

  const handleSearch = (e) => {
    console.log(e);
    const value = e.target.value;
    setSearchKey(value);
  };

  const salaryDropDown = (e) => {
    if (e.target.value === "1") {
      // mã NV tăng dần
      setSalaryColumn(
        listSalary.sort((a, b) => {
          return parseInt(a.id) - parseInt(b.id);
        })
      );
    
      console.log(" 1", salaryColumn);
    } else if (e.target.value === "2") {
      // mã NV giảm dần
      setSalaryColumn(
        listSalary.sort((a, b) => {
          return parseInt(b.id) - parseInt(a.id);
        })
      );
     
      console.log("2", salaryColumn);
    } else if (e.target.value === "3") {
      // Lương từ thấp đên cao
      setSalaryColumn(
        listSalary.sort((a, b) => {
          return parseInt(a.salary) - parseInt(b.salary);
        })
      );
      console.log("3", salaryColumn);
      
    } else if (e.target.value === "4") {
      // Lương từ cao đến thấp
      setSalaryColumn(
        listSalary.sort((a, b) => {
          return parseInt(b.salary) - parseInt(a.salary);
        })
      );
     
      console.log("4", salaryColumn);
    }
    
  };

  useEffect(() => {
    reRenderList();
  })

  function reRenderList() {
    console.log("render", salaryColumn);
    const payRoll = salaryColumn
      .filter((payroll) => {
        if (searchKey == "") {
          return payroll;
        } else if (
          payroll.name.toLowerCase().includes(searchKey.toLowerCase())
        ) {
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

    setStateSalary(payRoll);
  }
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
          <Dropdown
         
            onClick={salaryDropDown}
            name="Sắp xêp "
            label1="Mã NV tăng dần"
            value1={1}
            label2="Mã NV giảm dần"
            value2={2}
            label3="Lương NV từ Thấp đến Cao"
            value3={3}
            label4="Lương NV từ Cao đến thấp"
            value4={4}
          />
        </div>
        <hr />
      </div>
      <div className="row">{stateSalary}</div>
    </div>
  );
};

export default Payroll;
