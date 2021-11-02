import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Link to="/trang-chu">
        <img
          src="assets/images/logo.png"
          style={{ width: "50px" }}
          alt="logo"
        />
      </Link>
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/trang-chu" className="textnav">
                <i className="fa fa-home fa-lg"></i> Trang chủ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/nhan-vien" className="textnav">
                <i className="fa fa-user fa-lg"></i> Nhân viên
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/phong-ban" className="textnav">
                Phòng ban
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/bang-luong" className="textnav">
                <i className="fa fa-file-invoice-dollar fa-lg"></i> Bảng lương
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
