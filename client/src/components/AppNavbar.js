import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

export default class AppNavbar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar className="mb-5">
          <Container>
            <NavbarBrand href="/"> to-do </NavbarBrand>
            <Nav className="ml-auto" navbar></Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
