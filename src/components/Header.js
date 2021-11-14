import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink} from "react-router-dom"
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div  className="navbar">
      <NavbarBrand className="navbarlogo"><Link to='/trang-chu'><i className="fa fa-home fa-lg"></i></Link></NavbarBrand>
      <Navbar color="light" light expand="md" >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/nhan-vien" className="textnav"><i className="fa fa-user fa-lg"></i> Nhân Viên</NavLink>
            </NavItem>    
          </Nav>    
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
