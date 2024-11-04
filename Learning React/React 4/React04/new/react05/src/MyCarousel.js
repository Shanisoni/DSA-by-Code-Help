import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sunset from './Images/sunset.jpg';
import lake from './Images/lake.jpg';
import sunset1 from './Images/sunset1.jpg';

function MyCarousel() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={sunset} alt="Sunset" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={lake} alt="Lake" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={sunset1} alt="Sunset 1" />
              </Carousel.Item>

              {/* Optional additional items */}
              <Carousel.Item>
                <img className="d-block w-100" src={sunset1} alt="Sunset 1" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={lake} alt="Lake" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={sunset1} alt="Sunset 1" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyCarousel;
