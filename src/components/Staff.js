import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Search from "./Search";

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
  const [column, setColumn] = useState(2);
  const [searchKey, setSearchKey] = useState("");
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchKey(value);
  };

  const listStaffs = props
    .filter((staff) => {
      if (searchKey == "") {
        return staff;
      } else if (staff.name.toLowerCase().includes(searchKey.toLowerCase())) {
        return staff;
      }
    })
    .map((staff) => {
      return (
        <div className={`col-6 col-sm-4 col-lg-${column}`} key={staff.id}>
          <Staff staff={staff} />
        </div>
      );
    });

  const fnDropDown = (e) => {
    setColumn(e.target.value);
    
  };

  return (
    <div className="container">
      <div className="row nav-menu">
        <div className="col-4">
          <Breadcrumb className="nav-router">
            <BreadcrumbItem>
              <Link to="/home">Trang chủ</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="nav-function col-6">
          <Search onChange={(e) => handleSearch(e)} />
          <Dropdown
            onClick={fnDropDown}
            name="Số cột"
            value1="2"
            label1="Mặc Định"
            value3="3"
            label3="4 cột"
            value4="4"
            label4="3 cột"
          />
        </div>

        <hr />
      </div>
      <div className="row">{listStaffs}</div> 
    </div>
  );
};

export default Staffs;
