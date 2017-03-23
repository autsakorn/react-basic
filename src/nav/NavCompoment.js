import React, { Component } from 'react';
import { Navbar,Brand,Toggle,Header,Collape,NavItem, NavDropdown, Nav, ButtonToolbar,Button,DropdownButton,MenuItem } from 'react-bootstrap';
class NavCompoment extends Component {
  constructor(props){
    super(props);
    this.state = {info:this.props.info};
  }
  handleSignOut(){
    localStorage.removeItem("case_email");
    localStorage.removeItem("case_token");
    location.reload();
  }
  render(){
    const navbarInstance = (
      <Navbar >
        <Navbar.Header>
          <Navbar.Brand>
            <span href="#">vSpace</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title={this.state.info.name} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} onClick={this.handleSignOut}>Sign Out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    return(
      <span className="dropdown">
        {navbarInstance}
      </span>
    )
  }
}

export default NavCompoment;
