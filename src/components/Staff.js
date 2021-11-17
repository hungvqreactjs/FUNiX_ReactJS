import React, {useEffect} from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { Loading, Error } from './Loading&Error'
import NewStaff from "./NewStaff";
import { baseUrl } from "../shared/baseUrl";
import { addStaffs } from "../redux/ActionCreators";



const Staff = ({ staff, dispatch }) => {

  const onDelete = () => {
    console.log(staff)
    fetch(baseUrl + 'staffs', {

      method: 'DELETE',
      
      body: JSON.stringify(staff),
      
      headers: {
      
      'Content-Type': 'application/json'
      
      },
      credentials: 'same-origin' 
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addStaffs(response)))
    .catch(error =>  { console.log('error', error.message);  });
  
   }

  return (
    <Card>
      <Button onClick={onDelete} className="delete"> <i className="fa fa-trash"></i></Button>
      <Link to={`/nhan-vien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name}/>
        <CardTitle>{staff.name}</CardTitle>
      </Link>
      
    </Card>
    
  );
};



const Staffs = ({ props, isLoading, ErrMess}) => {
  let location = useLocation();
  const listStaffs = props.map((staff) => {
      return (
        <div className="col-6 col-sm-4 col-lg-2" key={staff.id}>
          <Staff staff={staff} />
        </div>
      );
    });

    const AddPerson = (staff, dispatch) => {
     console.log("add",staff)

     fetch(baseUrl + 'staffs', {

      method: 'POST',
      
      body: JSON.stringify(staff),
      
      headers: {
      
      'Content-Type': 'application/json'
      
      },
      
      credentials: 'same-origin'
      
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addStaffs(response)))
    .catch(error =>  { console.log('error', error.message);  });

    };
  
    if (isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (ErrMess) {
      return(
          <div className="container">
              <div className="row"> 
                  <div className="col-12">
                  <Error/>
                  </div>
              </div>
          </div>
      );
  }
  else{
  return (
    <div className="container">
      {location.pathname === "/nhan-vien" ? <div className="row nav-menu">
        <div className="col-4">
          <Breadcrumb className="nav-router">
            <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="nav-function col-2">
        <NewStaff onAdd={AddPerson} />
   
        </div>
        <hr />
      </div> : ""}
      <div className="row">{listStaffs} </div> 
    </div>
  )};
};

export default Staffs;
