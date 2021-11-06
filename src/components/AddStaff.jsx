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
  FormFeedback
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddStaff = ({ onAdd }) => {
  const today = new Date();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const formik = useFormik({
    initialValues: {
      name: "",
      doB: "",
      startDate: "",
      department: "Sale",
      salaryScale: "",
      overTime: "",
      annualLeave: "",
      image: "/assets/images/ddg1.jpg",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "Tên phải trên 4 ký tự")
        .max(20, "Tên phải dưới 20 ký tự")
        .matches(
          /^[a-zA-Z]+$/,
          "Tên không hợp lệ"
        )
        .required("Hãy nhập tên"),
      doB: Yup.date().max(2004, "Tuổi phải trên hoặc bằng 18").required("Hãy nhập ngày sinh"),
      startDate: Yup.date().max(today, "Ngày vào công ty không thể lớn hơn ngày hiện tại").required("Hãy nhập ngày vào công ty"),
      salaryScale: Yup.number()
        .min(1, "Hệ số lương phải trên 1")
        .max(3, "Hệ số lương phải dưới 3")
        .required("Hãy nhập hệ số lương"),
      overTime: Yup.number()
        .min(0, "Sô ngày không phải số âm")
        .required("Hãy nhập số ngày làm thêm"),
      annualLeave: Yup.number()
        .min(0, "Sô ngày không phải số âm")
        .required("Hãy nhập số ngày nghỉ còn lại"),
    }),
    onSubmit: (values) => {
      onAdd(values);
      formik.resetForm();
      toggle();
    },
  });

  return (
    <div>
      <Button onClick={toggle} className="add-staff">
        <i className="fa fa-user-plus fa-sm"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <Form onSubmit={formik.handleSubmit}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <div className="row modal-add">
              <div className="col-12 col-md-9">
                <FormGroup row>
                  <Label htmlFor="firstname" md={4}>
                    Họ và tên
                  </Label>
                  <Col md={8}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="VD: Nguyễn Văn A"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      {...formik.errors.name && formik.touched.name ? {invalid:"true"} : {...!formik.errors.name && formik.values.name ? {valid: "true"} : null }}
                      />
                      {formik.errors.name && formik.touched.name && (
                        <FormFeedback>{formik.errors.name}</FormFeedback>
                      )}
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="doB" md={4}>
                    Ngày sinh
                  </Label>
                  <Col md={8}>
                    <Input
                      type="date"
                      id="doB"
                      name="doB"
                      value={formik.values.doB}
                      placeholder="ngày sinh"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      {...formik.errors.doB && formik.touched.doB ? {invalid:"true"} : {...!formik.errors.doB && formik.values.doB ? {valid: "true"} : null }}
                      />
                      {formik.errors.doB && formik.touched.doB && (
                        <FormFeedback>{formik.errors.doB}</FormFeedback>
                      )}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="startDate" md={4}>
                    Ngày vào công ty
                  </Label>
                  <Col md={8}>
                    <Input
                      type="date"
                      id="startDate"
                      name="startDate"
                      placeholder="Ngày vào công ty"
                      value={formik.values.startDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      {...formik.errors.startDate && formik.touched.startDate ? {invalid:"true"} : {...!formik.errors.startDate && formik.values.startDate ? {valid: "true"} : null }}
                      />
                      {formik.errors.startDate && formik.touched.startDate && (
                        <FormFeedback>{formik.errors.startDate}</FormFeedback>
                      )}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="department" md={4}>
                    Phòng ban
                  </Label>
                  <Col md={8}>
                    <Input
                      type="select"
                      name="department"
                      value={formik.values.department}
                      onChange={formik.handleChange}
                    >
                      <option value="1">Sale</option>
                      <option value="HR" >HR</option>
                      <option value="Marketing" >Marketing</option>
                      <option value="IT">IT</option>
                      <option value="Finance">Finance</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="salaryScale" md={4}>
                    Hệ số lương
                  </Label>
                  <Col md={8}>
                    <Input
                      type="number"
                      id="salaryScale"
                      name="salaryScale"
                      min="0"
                      placeholder="0"
                      value={formik.values.salaryScale}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      {...formik.errors.salaryScale && formik.touched.salaryScale ? {invalid:"true"} : {...!formik.errors.salaryScale && formik.values.salaryScale ? {valid: "true"} : null }}
                      />
                      {formik.errors.salaryScale && formik.touched.salaryScale && (
                        <FormFeedback>{formik.errors.salaryScale}</FormFeedback>
                      )}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="overTime" md={4}>
                    Sô ngày làm thêm
                  </Label>
                  <Col md={8}>
                    <Input
                      type="number"
                      id="overTime"
                      name="overTime"
                      min="0"
                      placeholder="0"
                      value={formik.values.overTime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      {...formik.errors.overTime && formik.touched.overTime ? {invalid:"true"} : {...!formik.errors.overTime && formik.values.overTime ? {valid: "true"} : null }}
                      />
                      {formik.errors.overTime && formik.touched.overTime && (
                        <FormFeedback>{formik.errors.overTime}</FormFeedback>
                      )}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="annualLeave" md={4}>
                    Số ngày nghỉ còn lại
                  </Label>
                  <Col md={8}>
                    <Input
                      type="number"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="0"
                      value={formik.values.annualLeave}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      {...formik.errors.annualLeave && formik.touched.annualLeave ? {invalid:"true"} : {...!formik.errors.annualLeave && formik.values.annualLeave ? {valid: "true"} : null }}
                      />
                      {formik.errors.annualLeave && formik.touched.annualLeave && (
                        <FormFeedback>{formik.errors.annualLeave}</FormFeedback>
                      )}
                  </Col>
                </FormGroup>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Thêm
            </Button>{" "}
            <Button onClick={() => {toggle(); formik.resetForm()}}>Hủy</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default AddStaff;
