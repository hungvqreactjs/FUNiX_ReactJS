import React from "react";
import {
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";


const Search = ({onChange }) => {
 
  return (
    
      <InputGroup size="sm">
        <Input
          placeholder="Tìm kiếm theo tên nhân viên..."
          onChange={onChange}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText color="secondary">
            <span className="fa fa-search fa-lg"></span>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    
  );
};

export default Search;
