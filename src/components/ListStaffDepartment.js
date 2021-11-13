import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { useParams } from "react-router-dom";
import Staffs from "./Staff";

const ListStaffDepartment = ({ props, department }) => {
  let { id } = useParams();

  var listStaffByDepartment = [];
  if (props.length > 0) {
    listStaffByDepartment = props.filter((item) => {
      return item.departmentId === id;
    });
  }

  var findDE = null;
  if (department.length > 0) findDE = department.find((x) => x.id === id);

  return (
    <div className="container">
      <div className="row">
        {department.length > 0 && <Breadcrumb className="nav-router">
          <BreadcrumbItem active>Phòng ban {findDE.name}</BreadcrumbItem>
        </Breadcrumb>}
        <hr />
      </div>
      {listStaffByDepartment.length > 0 && <Staffs props={listStaffByDepartment} />}
    </div>
  );
};
export default ListStaffDepartment;
