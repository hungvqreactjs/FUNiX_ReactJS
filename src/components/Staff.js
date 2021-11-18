import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { Loading, Error } from "./Loading&Error";
import StaffForm from "./StaffForm";
import { baseUrl } from "../shared/baseUrl";
import ListStaff from "./ListStaff";

export const Staff = ({ staff, onDelete }) => {

  return (
    <Card>
      <Button onClick={() => onDelete(staff.id)} className="delete">
        {" "}
        <i className="fa fa-trash"></i>
      </Button>
      <Link to={`/nhan-vien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <CardTitle>{staff.name}</CardTitle>
      </Link>
    </Card>
  );
};

const Staffs = ({ props, isLoading, ErrMess }) => {

  let location = useLocation();
  const [listStaffs, setListStaffs] = useState(props);

  
   const onDelete = async (id) => {
    const res = await fetch(`${baseUrl}staffs/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setListStaffs(listStaffs.filter((staff) => staff.id !== id))
      : alert('Đã xóa thành công không thế lặp lại thao tác')
  }
 

  const AddPerson = async (staff) => {
    const res = await fetch(`${baseUrl}staffs`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(staff),
    })

    const data = await res.json()
    setListStaffs(data);
  };

  


  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (ErrMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Error />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        {location.pathname === "/nhan-vien" ? (
          <div className="row nav-menu">
            <div className="col-4">
              <Breadcrumb className="nav-router">
                <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="nav-function col-2">
              <StaffForm onAdd={AddPerson} nameForm={<i class="fa fa-user-plus"></i>} nameButton="Thêm"/>
            </div>
            <hr />
          </div>
        ) : (
          ""
        )}
        <div className="row"><ListStaff listStaffs={listStaffs} onDelete={onDelete}/> </div>
      </div>
    );
  }
};

export default Staffs;
