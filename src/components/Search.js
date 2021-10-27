import React from "react";
import { Input, InputGroup, Button, InputGroupAddon } from "reactstrap";

const Search = () => {
  return (

      <InputGroup>
        <Input placeholder="tên, mã nhân viên ..." />
        <InputGroupAddon addonType="append">
        <Button color="secondary"><span className="fa fa-search"></span></Button>
        </InputGroupAddon>
      </InputGroup>
   
  );
};

export default Search;
