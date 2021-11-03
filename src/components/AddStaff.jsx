
import React, {useState} from "react";
import { Modal,ModalHeader,ModalBody,ModalFooter, Button } from "reactstrap";

const AddStaff = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <div>
  <Button
    onClick={toggle}
  >
   <i class="fa fa-user-plus "></i>
  </Button>
  <Modal
    isOpen ={modal} toggle={toggle}
  >
    <ModalHeader>
      Thêm nhân viên
    </ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={function noRefCheck(){}}
      >
        Thêm
      </Button>
      {' '}
      <Button onClick={toggle}>
        hủy
      </Button>
    </ModalFooter>
  </Modal>
</div>
  )}

export default AddStaff