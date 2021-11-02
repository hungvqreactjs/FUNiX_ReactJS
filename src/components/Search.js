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
          placeholder="search ..."
          onChange={onChange}
        />
        <InputGroupAddon addonType="append" className="dropdown1">
          <InputGroupText color="secondary">
            <span className="fa fa-search fa-lg "></span>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    
  );
};

export default Search;
