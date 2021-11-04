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


const AddStaff = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [form, setForm] = useState({
    id: 15,
    name: "",
    doB: "",
    startDate: "",
    department: "",
    salaryScale: "",
    overTime: "",
    annualLeave: "",
    image: "/assets/images/alberto.png",
  });
  const [error, setError] = useState({
    name: "",
    doB: "",
    startDate: "",
    department: "",
    salaryScale: "",
    overTime: "",
    annualLeave: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const onBlur = (e) => {
    e.preventDefault();
     
     if (form.name.length && form.name.length < 4) {
      setError(() => ({
        name: "Tên phải trên 4 ký tự",
      }));
    } else if (form.name.length && form.name.length > 20) {
      setError(() => ({
        name: "Tên phải dưới 20 ký tự",
      }));
    } else {
      setError(() => ({
        name: "",
      }));
    }

    if (form.salaryScale >3){
      setError(() => ({
        salaryScale: "Hệ số lương không vượt quá 3",
      }));
    }
  };

  const data = form;
  const showData = (e) => {

    console.log("name", data);

    e.preventDefault();

    if (form.name.length === 0) {
      setError(() => ({
        name: "Hãy nhập tên",
      }));
    }  
    if (form.salaryScale === ""){
      setError(() => ({
        salaryScale: "Hãy nhập hệ số lương",
      }));
    } 
    if (form.overTime === ""){
      setError(() => ({
        overTime: "Hãy nhập số ngày làm thêm",
      }));
    } 
    if (form.annualLeave ===""){
      setError(() => ({
        annualLeave: "Hãy nhập hệ số ngày nghỉ còn lại",
      }));
    } 
   
  };

  const onSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <div>
      <Button onClick={toggle} className="add-staff">
        <i class="fa fa-user-plus fa-sm"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Thêm nhân viên</ModalHeader>
        <ModalBody>
          <div className="row modal-add">
            <div className="col-12 col-md-9">
              <Form
                onSubmit={onSubmit}
                value={form.id}
                onChange={{ onSubmit } === form.id + 1}
              >
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
                      value={form.name}
                      invalid={error.name !== ""}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    <FormFeedback className="error-form">
                      {error.name}
                    </FormFeedback>
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
                      placeholder="ngày sinh"
                      value={form.doB}
                      onChange={onChange}
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
                      value={form.startDate}
                      onChange={onChange}
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
                      value={form.department}
                      onChange={onChange}
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
                      value={form.salaryScale}
                      invalid={!!error.salaryScale }
                      onChange={onChange}
                      onBlur={onBlur}
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
                      value={form.overTime}
                      invalid={!!error.overTime }
                      onChange={onChange}
                      onBlur={onBlur}
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
                      value={form.annualLeave}
                      invalid={!!error.annualLeave }
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    <FormFeedback className="error-form">
                      {error.annualLeave}
                    </FormFeedback>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={showData}>
            Thêm
          </Button>{" "}
          <Button onClick={toggle}>Hủy</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddStaff;
