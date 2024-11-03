import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        My Website
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;
