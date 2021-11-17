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
import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => /^[0-9]+$/i.test(val);
const validName = (val) => /^[a-zA-Z]+$/i.test(val);
const minNumber = (len) => (val) => !val || val >= len;
const maxNumber = (len) => (val) => val && val <= len;


const StaffForm = ({onAdd}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const onSubmit = (values) => {
    onAdd(values);
    toggle();
  };

  return (
    <div>
      <Button onClick={toggle} className="add-staff">
        <i className="fa fa-user-plus fa-sm"></i> Thêm nhân viên
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <Form model="newstaff" onSubmit={(values) => onSubmit(values)}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <div className="row modal-add">
              <div className="col-12 col-md-9">
                <FormGroup row>
                  <Label htmlFor="firstname" md={4}>
                    Họ và tên
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".name"
                      id="name"
                      name="name"
                      placeholder="VD: Nguyễn Văn A"
                      className="form-control"
                      validators={{
                        required,
                        validName,
                        minLength: minLength(4),
                        maxLength: maxLength(20),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                        minLength: "Tên phải trên 4 ký tự",
                        maxLength: "Tên phải dưới 20 ký tự",
                        validName: "Tên không hợp lệ ",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="doB" md={4}>
                    Ngày sinh
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".doB"
                      type="date"
                      id="doB"
                      name="doB"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".doB"
                      show="touched"
                      messages={{
                        required: "Hãy nhập năm sinh",
                        
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="startDate" md={4}>
                    Ngày vào công ty
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".startDate"
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="form-control"
                      placeholder="DD/MM/YYYY"
                      //dateFormat="DD/MM/YYYY"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".startDate"
                      show="touched"
                      messages={{
                        required: "Hãy nhập ngày vào công ty",
                      
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="department" md={4}>
                    Phòng ban
                  </Label>
                  <Col md={8}>
                    <Control.select
                      model=".department"
                      name="department"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    > <option value="" selected disabled>Chọn phòng ban</option>
                      <option value="Dept01">Sale</option>
                      <option value="Dept02">HR</option>
                      <option value="Dept03">Marketing</option>
                      <option value="Dept04">IT</option>
                      <option value="Dept05">Finance</option>
                    </Control.select>
                    <Errors
                      className="text-danger"
                      model=".department"
                      show="touched"
                      messages={{
                        required: "Hãy chọn phòng ban",
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="salaryScale" md={4}>
                    Hệ số lương
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".salaryScale"
                      id="salaryScale"
                      name="salaryScale"
                      placeholder="0"
                      className="form-control"
                      validators={{
                        required,
                        isNumber,
                        minNumber: minNumber(1),
                        maxNumber: maxNumber(3)
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".salaryScale"
                      show="touched"
                      messages={{
                        isNumber: "Hệ số lương không hợp lệ ",
                        minNumber: "Hệ số lương phải trên 1 ",
                        maxNumber: "Hệ số lương phải dưới 3",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="overTime" md={4}>
                    Sô ngày làm thêm
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".overTime"
                      id="overTime"
                      name="overTime"
                      placeholder="0"
                      className="form-control"
                      validators={{
                        required,
                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".overTime"
                      show="touched"
                      messages={{
                        isNumber: "Số ngày làm thêm không hợp lệ ",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="annualLeave" md={4}>
                    Số ngày nghỉ còn lại
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".annualLeave"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="0"
                      className="form-control"
                      validators={{
                        required,
                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".annualLeave"
                      show="touched"
                      messages={{
                        isNumber: "Số ngày nghỉ không hợp lệ",      
                      }}
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
        </Form>
      </Modal>
    </div>
  );
};

export default StaffForm;
