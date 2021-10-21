import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  Nav,
  NavbarText,
  NavbarBrand,
  UncontrolledDropdown,

} from "reactstrap";
import dateFormat from "dateformat";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InfoStaffs: null,
    };
  }
  clickInfoStaffs(staffs) {
    this.setState({ InfoStaffs: staffs });
  }

  renderinfo(staffs) {
    if (staffs != null)
      return (
        <Card>
          <CardBody>
            <CardTitle tag="h5">{staffs.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(staffs.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staffs.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {staffs.department.name}</CardText>
            <CardText>Số ngày làm thêm: {staffs.overTime}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staffs.annualLeave}</CardText>
          </CardBody>
        </Card>
      );
  }

  render() {
    const nhanVien = this.props.STAFFS.map((staffs) => {
      return (
        <div key={staffs.id}>
          <Card
            className="col-sm-12 col-md-12"
            onClick={() => this.clickInfoStaffs(staffs)}
          >
            <div>{staffs.name}</div>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <Navbar color="light" light expand="md" className="bg-info clearfix" >
          <NavbarBrand >reactstrap</NavbarBrand>
          <NavbarText>Simple Text</NavbarText>
       
            <Nav className="mr-auto" navbar>

              <UncontrolledDropdown  className="float-right">
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem>Option 3</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        </Navbar>
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-6 ">{nhanVien}</div>
          </div>

          {this.renderinfo(this.state.InfoStaffs)}
        </div>
      </div>
    );
  }
}

export default List;
