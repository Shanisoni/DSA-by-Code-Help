import React from 'react'
import { Container, Row  , Col, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {
  return (

    <>

    <Container>

        <Row>

            <Col>

            <Navbar bg="dark" variant="dark">

                <Container>

                <Navbar.Brand >

                    My Website

                </Navbar.Brand>
                   
                </Container>

            </Navbar>

            </Col>

        </Row>

    </Container>
    </>

  )
}

export default NavBar