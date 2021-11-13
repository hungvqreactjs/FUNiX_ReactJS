import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import Staffs from "./Staff";

const ListStaffDepartment = ({ props, department }) => {
  let { id } = useParams();
  const listStaffByDepartment = props.filter((item) => {
    return item.departmentId === id;
  });

  console.log(props);
  var findDE = null;
  if (props != null)
    findDE = department.find((x) => x.id === "Dept02");

  return (
    <div className="container">
      <div className="row">
          <Breadcrumb className="nav-router">
            <BreadcrumbItem active>Phòng ban {findDE.name}</BreadcrumbItem>
          </Breadcrumb>
          <hr />
        </div>
      <Staffs props={listStaffByDepartment} />
    </div>
  );
};
export default ListStaffDepartment;
