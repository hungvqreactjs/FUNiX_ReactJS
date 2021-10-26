import React from "react";
import { Card, CardTitle } from "reactstrap";

const Departments =({props}) => {
  const departments =  props.map((department) => {
    return (
      <div className="col-12 col-md-5 m-1" key={department.id}>
        <Card onClick={department.id}>
          <CardTitle>{department.name}</CardTitle>
        </Card>
      </div>
    );
  });
  return(
      <div>
        {departments}
      </div>
  )
}


export default Departments;
