import React, { Component } from "react";
import {
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
              <img src={staffs.image} alt="avatar" />
            </div>
            <div className="more-info">
              <h2>{staffs.name}</h2>
              <div className="coords">
                <span>Start Date:</span>
                <span>{dateFormat(staffs.startDate, "dd/mm/yyyy")}</span>
              </div>
              <div className="coords">
                <span>Over Time:</span>
                <span>{staffs.overTime}</span>
              </div>
              <div className="coords">
                <span>Annual Leave:</span>
                <span>{staffs.annualLeave}</span>
              </div>
            </div>
          </div>
          <div className="general">
            <div className="generalID">ID STAFF {staffs.id + 1} </div>
            <h1>{staffs.name}</h1>
            <p>DoB: {dateFormat(staffs.doB, "dd/mm/yyyy")}</p>
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
          <div className="inner pagination" onClick={() => this.clickInfoStaffs(staffs)}>
            <span class="badge page-item ">{staffs.id + 1}</span>{" "}
            {staffs.name}
          </div>
        </div>
      );
    });

    return (
      <div>
        <Navbar color="light" >
          <NavbarBrand >Ứng dụng quản lý nhân sự v1.0</NavbarBrand>

          <Nav className="mr-auto " navbar>
            <UncontrolledDropdown className="drop">
              <DropdownToggle nav caret>
                Số cột
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem value="6" onClick={this.inputData}>
                  2
                </DropdownItem>
                <DropdownItem value="4" onClick={this.inputData}>
                  3
                </DropdownItem>
                <DropdownItem value="3" onClick={this.inputData}>
                  4
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
        <br />
        <h2 className="textlist">DANH SÁCH NHÂN SỰ</h2>
        <div className="container">
          <div className="row">{nhanVien}</div>
        </div>
        {this.renderinfo(this.state.InfoStaffs)}
      </div>
    );
  }
}

export default List;
