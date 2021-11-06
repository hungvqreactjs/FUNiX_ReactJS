/* eslint-disable array-callback-return */
import React, { useState, useRef } from "react";
import { STAFFS } from "../data/staffs";
import Staff from "../components/Staff";
import InputSearch from "../components/InputSearch";
import AddStaff from "../components/AddStaff";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const Staffs = () => {
  const inputRef = useRef(null);
  const [searchKey, setSearchKey] = useState("");
  const [listStaff, setListStaff] = useState(STAFFS);

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchKey(inputRef.current.value);
  };

  const AddPerson = (staff) => {
    console.log(staff);
    const id = Math.floor(Math.random() * 100) + 1;
    const newStaff = {id, ...staff};
    setListStaff([...listStaff, newStaff]);
  };

  return (
    <div className="row">
      <div className="row nav-menu">
        <div className="col-4">
          <Breadcrumb className="nav-router">
            <BreadcrumbItem>
              <Link to="/trang-chu">Trang chủ</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="nav-function col-3">
          <AddStaff onAdd={AddPerson} />
          <InputSearch onSubmit={submitHandler} refName={inputRef} />
        </div>
        <hr />
      </div>
      {listStaff.filter((staff) => {
        if (searchKey === "") {
          return staff;
        } else if (staff.name.toLowerCase().includes(searchKey.toLowerCase())) {
          return staff;
        }
      }).map((staff, index) => {
        return (
          <div className={`col-6 col-sm-4 col-lg-2`} key={index}>
            <Staff staff={staff}/>
          </div>
        );
      })}
    </div>
  );
};

export default Staffs;
