import React from "react";
import { Input, InputGroup, Button, InputGroupAddon } from "reactstrap";

const Search = () => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="tên, mã nhân viên ..." />
        <InputGroupAddon addonType="append">
        <Button color="secondary"><span className="fas fa-search"></span></Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Search;
