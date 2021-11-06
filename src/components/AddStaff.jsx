import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddStaff = ({ onAdd }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [form, setForm] = useState({
    name: "",
    doB: "",
    startDate: "",
    department: "",
    salaryScale: "",
    overTime: "",
    annualLeave: "",
    image: '/assets/images/ddg1.jpg',
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      doB: "",
      startDate: "",
      department: "",
      salaryScale: "",
      overTime: "",
      annualLeave: "",
      image: "/assets/images/alberto.png",
    }
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const data = form;

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(data);
    setForm({
      name: "",
      doB: "",
      startDate: "",
      department: "",
      salaryScale: "",
      overTime: "",
      annualLeave: "",
      image: "/assets/images/alberto.png",
    });
    toggle();
  };

  return (
    <div>
      <Button onClick={toggle} className="add-staff">
        <i className="fa fa-user-plus fa-sm"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <Form onSubmit={onSubmit}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <div className="row modal-add">
              <div className="col-12 col-md-9">
                <FormGroup row>
                  <Label htmlFor="firstname" md={5}>
                    Họ và tên
                  </Label>
                  <Col md={7}>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="VD: Nguyễn Văn A"
                      value={formik.values.name}
                      onChange={formik.handleChange} 
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="doB" md={5}>
                    Ngày sinh
                  </Label>
                  <Col md={7}>
                    <Input
                      type="date"
                      id="doB"
                      name="doB"
                      value={formik.values.doB}
                      placeholder="ngày sinh"
                      onChange={formik.handleChange} 
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="startDate" md={5}>
                    Ngày vào công ty
                  </Label>
                  <Col md={7}>
                    <Input
                      type="date"
                      id="startDate"
                      name="startDate"
                      placeholder="Ngày vào công ty"
                      value={formik.values.startDate}
                      onChange={formik.handleChange} 
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="department" md={6}>
                    Phòng ban
                  </Label>
                  <Col md={6}>
                    <Input
                      type="select"
                      name="department"
                      value={formik.values.department}
                      onChange={formik.handleChange} 
                    >
                      <option>Sale</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>IT</option>
                      <option>Finance</option>
                      Finance
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="salaryScale" md={6}>
                    Hệ số lương
                  </Label>
                  <Col md={6}>
                    <Input
                      type="number"
                      id="salaryScale"
                      name="salaryScale"
                      min="0"
                      placeholder="0"
                      value={formik.values.salaryScale}
                      onChange={formik.handleChange} 
                    />
                    <FormFeedback className="error-form">
                      {error.salaryScale}
                    </FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="overTime" md={6}>
                    Sô ngày làm thêm
                  </Label>
                  <Col md={6}>
                    <Input
                      type="number"
                      id="overTime"
                      name="overTime"
                      min="0"
                      placeholder="0"
                      value={formik.values.overTime}
                      onChange={formik.handleChange} 
                    />
                    <FormFeedback className="error-form">
                      {error.overTime}
                    </FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="annualLeave" md={6}>
                    Số ngày nghỉ còn lại
                  </Label>
                  <Col md={6}>
                    <Input
                      type="number"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="0"
                      value={formik.values.annualLeave}
                      onChange={formik.handleChange} 
                    />
                    <FormFeedback className="error-form">
                      {error.annualLeave}
                    </FormFeedback>
                  </Col>
                </FormGroup>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Thêm
            </Button>{" "}
            <Button onClick={toggle}>Hủy</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default AddStaff;
