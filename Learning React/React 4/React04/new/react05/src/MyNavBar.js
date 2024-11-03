import React from 'react'
import { Container, Row , Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import lak from './Images/lak.png'

function MyNavBar() {
  return (

    <>

    <Container>

        <Row>
            <Col>

            <Navbar bg='dark' expand = 'sm' variant='dark' fixed='top' >
                <Container>
                <Navbar.Brand>
                  <img 
                  // src={lak}  
                  src = 'favicon.ico'
                  
                  width="30" height="30" className="d-inline-block align-top" alt=""    /> &nbsp;

                    The Deep Green

                </Navbar.Brand>

                <Navbar.Toggle aria-controls='my-nav' />

                <Navbar.Collapse id = 'my-nav'>

                <Nav className=' fw-bold  me-auto color-red'>
                  <Nav.Link href='# ' > Home </Nav.Link>
                  <Nav.Link href='# ' > About </Nav.Link>
                  <Nav.Link href='# ' > Contact </Nav.Link>
                  <Nav.Link href='# ' > Help </Nav.Link>
                  <NavDropdown title = 'Services' id='basic' >
                    <NavDropdown.Header>Type-1</NavDropdown.Header>
                    <NavDropdown.Item href='#' > Services 1 </NavDropdown.Item>
                    <NavDropdown.Item href='#' > Services 2 </NavDropdown.Item>
                    <NavDropdown.Divider/> 
                    <NavDropdown.Header>Type-2</NavDropdown.Header>
                    <NavDropdown.Item href='#' > Services 3</NavDropdown.Item>
                    <NavDropdown.Item href='#' > Services 4</NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Navbar.Text bg-dark>
                  <h6 className='color-white'>  Signed in as:</h6> <a href='#' > Shani Soni </a>
                </Navbar.Text>

                </Navbar.Collapse>
                
                   
                </Container>
            </Navbar>

            </Col>
        </Row>

        <Row>
          <Col>
         
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          

          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          

          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          <h1> This is a random tag This is a random tag This is a random tag This is a random tag This is a random tag</h1>
          

          </Col>
        </Row>

    </Container>
    
    
    
    </>
    
  )
}

export default MyNavBar