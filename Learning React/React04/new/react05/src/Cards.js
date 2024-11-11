import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import lak from './Images/lak.png'; // Ensure the path is correct

function Cards() {
  return (
    <Container>
      <Row>

        <Col md={4}>

          <Card bg='warning'>
            
            <Card.Img src={lak} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>This is Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">This is Card Subtitle</Card.Subtitle>
              <Card.Text>
                This is Card Text
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <div className='mt-2'>
              <Button variant='primary'> Submit </Button>

              </div>
             
              </Card.ImgOverlay>
          </Card>
        </Col>

        <Col md={4}>
          <Card  bg='warning'>
            <Card.Img src={lak} alt="Card image" />
            <Card.Body>
              <Card.Title>This is Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">This is Card Subtitle</Card.Subtitle>
              <Card.Text>
                This is Card Text
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Button variant='primary'> Submit </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card bg='warning' >
            <Card.Header >This is Card Header</Card.Header>
            <Card.Img src={lak} alt="Card image" />
            <Card.Body>
              <Card.Title>This is Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">This is Card Subtitle</Card.Subtitle>
              <Card.Text>
                This is Card Text
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Button variant='primary'> Submit </Button>
            </Card.Body>
            <Card.Footer>
                This Card Footer
            </Card.Footer>
          </Card>
        </Col>

        
        
      </Row>
    </Container>
  );
}

export default Cards;
