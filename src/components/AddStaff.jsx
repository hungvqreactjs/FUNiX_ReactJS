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
} from "reactstrap";

const AddStaff = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>
        <i class="fa fa-user-plus "></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Thêm nhân viên</ModalHeader>
        <ModalBody>
          <div className="row modal-add">
            <div className="col-12 col-md-9">
              <Form >
                <FormGroup row>
                  <Label htmlFor="firstname" md={5}>
                    Họ và tên
                  </Label>
                  <Col md={7}>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Tên ..."
                   
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
                      placeholder="ngày sinh"
                    
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
                      type="text"
                      id="salaryScale"
                      name="salaryScale"
                      placeholder="0"
                    
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="overTime" md={6}>
                    Sô ngày làm thêm
                  </Label>
                  <Col md={6}>
                    <Input
                      type="text"
                      id="overTime"
                      name="overTime"
                      placeholder="0"
                    
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="annualLeave" md={6}>
                  Số ngày nghỉ còn lại
                  </Label>
                  <Col md={6}>
                    <Input
                      type="text"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="0"
                    
                    />
                  </Col>
                </FormGroup>
        
              </Form>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Thêm
          </Button>{" "}
          <Button onClick={toggle}>hủy</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddStaff;
