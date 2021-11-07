import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Col,
  Button,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const AddStaff = ({ onAdd }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const onSubmit = (values) => {
    //values.preventDefault();
    onAdd(values);
    console.log("add ", onAdd);
    toggle();
  };

  return (
    <div>
      <Button onClick={toggle} className="add-staff">
        <i class="fa fa-user-plus fa-sm"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <LocalForm onSubmit={(values) => onSubmit(values)}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <div className="row modal-add">
              <div className="col-12 col-md-9">
                <FormGroup row>
                  <Label htmlFor="firstname" md={5}>
                    Họ và tên
                  </Label>
                  <Col md={7}>
                    <Control.text
                      model=".name"
                      id="name"
                      name="name"
                      placeholder="VD: Nguyễn Văn A"
                      className="form-control"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="doB" md={5}>
                    Ngày sinh
                  </Label>
                  <Col md={7}>
                    <Control.text
                      model=".doB"
                      type="date"
                      id="doB"
                      name="doB"
                      placeholder="ngày sinh"
                      className="form-control"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="startDate" md={5}>
                    Ngày vào công ty
                  </Label>
                  <Col md={7}>
                    <Control.text
                      model=".startDate"
                      type="date"
                      id="startDate"
                      name="startDate"
                      placeholder="Ngày vào công ty"
                      className="form-control"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="department" md={6}>
                    Phòng ban
                  </Label>
                  <Col md={6}>
                    <Control.select
                      model=".department"
                      name="department"
                      className="form-control"
                    >
                      <option>Sale</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>IT</option>
                      <option>Finance</option>
                      Finance
                    </Control.select>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="salaryScale" md={6}>
                    Hệ số lương
                  </Label>
                  <Col md={6}>
                    <Control.text
                      model=".salaryScale"
                      id="salaryScale"
                      name="salaryScale"
                      min="0"
                      placeholder="0"
                      className="form-control"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="overTime" md={6}>
                    Sô ngày làm thêm
                  </Label>
                  <Col md={6}>
                    <Control.text
                      model=".overTime"
                      id="overTime"
                      name="overTime"
                      min="0"
                      placeholder="0"
                      className="form-control"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="annualLeave" md={6}>
                    Số ngày nghỉ còn lại
                  </Label>
                  <Col md={6}>
                    <Control.text
                      model=".annualLeave"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="0"
                      className="form-control"
                    />
                  </Col>
                </FormGroup>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              Thêm
            </Button>{" "}
            <Button onClick={toggle}>Hủy</Button>
          </ModalFooter>
        </LocalForm>
      </Modal>
    </div>
  );
};

export default AddStaff;
