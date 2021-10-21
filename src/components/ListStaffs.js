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
  NavbarBrand,
  UncontrolledDropdown,
} from "reactstrap";
import dateFormat from "dateformat";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InfoStaffs: null,
      column: 6
    };
    this.inputData = this.inputData.bind(this);
  }
  clickInfoStaffs(staffs) {
    this.setState({ InfoStaffs: staffs });
  }
  
  inputData(event)
  {
    this.setState({
      column: event.target.value
    });
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
        <Card
          key={staffs.id}
          className={`col-lg-${this.state.column} col-12 col-sm-6`}
          onClick={() => this.clickInfoStaffs(staffs)}
        >
          {staffs.name}
        </Card>
      );
    });

    
    return (
      <div>
        <Navbar color="light">
          <NavbarBrand>Ứng dụng quản lý nhân viên</NavbarBrand>

          <Nav className="mr-auto " navbar>
            <UncontrolledDropdown className="drop">
              <DropdownToggle nav caret>
                Số cột
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem value='6' onClick={this.inputData}>2</DropdownItem>
                <DropdownItem value='3' onClick={this.inputData}>4</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
        <br />
        <div className="container">
          <div className="row">{nhanVien}</div>
        </div>
        {this.renderinfo(this.state.InfoStaffs)}
      </div>
    );
  }
}

export default List;
