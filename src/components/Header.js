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
      <NavbarBrand className="navbarlogo"><Link to='/home'><img src="assets/images/logo.png" style={{width:"40px"}}/></Link></NavbarBrand>
      <Navbar color="light" light expand="md" >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink to="/trang-chu" className="textnav"><i class="fa fa-home fa-lg"></i> Trang chủ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/nhan-vien" className="textnav"><i class="fa fa-user fa-lg"></i> Nhân Viên</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/phong-ban" className="textnav">Phòng Ban</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/bang-luong" className="textnav"><i class="fa fa-file-invoice-dollar fa-lg"></i> Bảng Lương</NavLink>
            </NavItem>     
          </Nav>    
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
