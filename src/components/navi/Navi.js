import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import {Link} from 'react-router-dom';

function Navi (args) {
  const [isOpen, setIsOpen] = useState (false);

  const toggle = () => setIsOpen (!isOpen);

  return (
    <div>
      <Navbar {...args} color="dark" dark expand="md">
        <NavbarBrand><Link to="/">Northwind</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary />
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
