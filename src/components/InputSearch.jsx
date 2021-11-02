import React from "react";
import { Form, Input, InputGroup, Button } from "reactstrap";

const InputSearch = ({ onSubmit, refName }) => {
    
  return (
   
    <Form onSubmit={onSubmit}>
      <InputGroup size="sm">
        <Input type="text" id="search" placeholder="Tìm kiếm..." innerRef={refName} />
        <Button type="submit" className="dropdown1" >
        <span className="fa fa-search fa-lg"></span>
        </Button>
      </InputGroup>
    </Form>

  );
};

export default InputSearch;
