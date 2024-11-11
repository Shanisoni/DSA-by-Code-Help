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
            <Carousel fade>
              <Carousel.Item interval={15}>
                <img className="d-block w-100" src={sunset} alt="Sunset" />
                <Carousel.Caption>
                  <h3>
                    First Image
                  </h3>
                  <p>
                    This is the first image 
                  </p>
                </Carousel.Caption>
              </Carousel.Item >

              <Carousel.Item  interval={15}>
                <img className="d-block w-100" src={lake} alt="Lake" />
                <Carousel.Caption>
                  <h3>
                  Second
                  </h3>
                  <p>
                    This is the Second image 
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item  interval={15}>
                <img className="d-block w-100" src={sunset1} alt="Sunset 1" />
                <Carousel.Caption>
                  <h3>
                    Third Image
                  </h3>
                  <p>
                    This is the Third  image 
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Optional additional items */}
              <Carousel.Item  interval={15}>
                <img className="d-block w-100" src={sunset1} alt="Sunset 1" />
                <Carousel.Caption>
                  <h3>
                    Fourth Image
                  </h3>
                  <p>
                    This is the Fourth  image 
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item  interval={15}>
                <img className="d-block w-100" src={lake} alt="Lake" />
                <Carousel.Caption>
                  <h3>
                    Fifth Image
                  </h3>
                  <p>
                    This is the Fifth image 
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item  interval={15}>
                <img className="d-block w-100" src={sunset1} alt="Sunset 1" />
                <Carousel.Caption>
                  <h3>
                    First Image
                  </h3>
                  <p>
                    This is the first image 
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyCarousel;
