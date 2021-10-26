import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { NavLink} from "react-router-dom"
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand ><Link to='/home'><img src="../assets/imgges/logo.jpg"/></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/nhan-vien">Nhân Viên</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/phong-ban">Phòng Ban</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/bang-luong"> Bảng Lương</NavLink>
            </NavItem>     
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
