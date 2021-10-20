import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

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
            <CardTitle>{staffs.name}</CardTitle>
            <CardText>{staffs.description}</CardText>
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
      <div className="container">
        <div className="row">{nhanVien}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderinfo(this.state.InfoStaffs)}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
