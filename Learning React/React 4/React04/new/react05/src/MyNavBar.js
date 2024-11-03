import React from 'react'
import { Container, Row , Col, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyNavBar() {
  return (

    <>

    <Container>

        <Row>
            <Col>

            <Navbar bg='primary' >
                <Container>
                <Navbar.Brand>

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

export default MyNavBar