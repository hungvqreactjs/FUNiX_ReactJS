import React from "react";
import { Form, Input, InputGroup, Button } from "reactstrap";

const InputSearch = ({ onSubmit, refName }) => {
    
  return (
   
    <Form onSubmit={onSubmit}>
      <InputGroup size="sm">
        <Input type="text" placeholder="Tìm kiếm..." innerRef={refName} />
        <Button className="dropdown1" >
        <span className="fa fa-search fa-lg"></span>
        </Button>
      </InputGroup>
    </Form>

  );
};

export default InputSearch;
