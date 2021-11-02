import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Dropdown = ({ onClick,name, value1, label1, value2, label2, value3, label3, value4, label4, className }) => {
  return (
    <UncontrolledDropdown className={className}>
      <DropdownToggle nav caret>
        {name}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem value={value1} onClick={onClick}>
          {label1}
        </DropdownItem>
        <DropdownItem value={value2} onClick={onClick}>
          {label2}
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem value={value3} onClick={onClick}>
          {label3}
        </DropdownItem>
        <DropdownItem value={value4} onClick={onClick}>
          {label4}
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Dropdown;
