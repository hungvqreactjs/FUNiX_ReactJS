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
      column: 6,
    };
    this.inputData = this.inputData.bind(this);
  }
  clickInfoStaffs(staffs) {
    this.setState({ InfoStaffs: staffs });
  }

  inputData(event) {
    this.setState({
      column: event.target.value,
    });
  }

  renderinfo(staffs) {
    if (staffs != null)
      return (
          <div className="card">
            <div className="additional">
              <div className="user-card">
                <div className="points center">{staffs.department.name}</div>
                <img src="./avatar.png" alt="" />
              </div>
              <div className="more-info">
                <h2>{staffs.name}</h2>
                <div className="coords">
                  <span>Ngày vào công ty:</span>
                  <span>{dateFormat(staffs.startDate, "dd/mm/yyyy")}</span>
                </div>
                <div className="coords">
                  <span>Số ngày làm thêm:</span>
                  <span>{staffs.overTime}</span>
                </div>
                <div className="coords">
                  <span>Số ngày nghỉ còn lại:</span>
                  <span>{staffs.annualLeave}</span>
                </div>
              </div>
            </div>
            <div className="general">
              <h2>{staffs.name}</h2>
              <p>Ngày sinh: {dateFormat(staffs.doB, "dd/mm/yyyy")}</p>
            </div>
          </div>

      );
  }

  render() {
    const nhanVien = this.props.STAFFS.map((staffs) => {
      return (
        <div
          key={staffs.id}
          className={`col-lg-${this.state.column} col-12 col-sm-6 staff`}
        >
          <div className="inner" onClick={() => this.clickInfoStaffs(staffs)}>
          {staffs.name}
          </div>
        </div>
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
                <DropdownItem value="6" onClick={this.inputData}>
                  2
                </DropdownItem>
                <DropdownItem value="3" onClick={this.inputData}>
                  4
                </DropdownItem>
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
