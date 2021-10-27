import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Column = () => {
  return (
    <UncontrolledDropdown className="nav-cloumn">
      <DropdownToggle nav caret>
        Options
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Mặc định</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>4</DropdownItem>
        <DropdownItem>3</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Column;
