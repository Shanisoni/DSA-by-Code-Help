import { Component , Row , Col } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import lak from './Images/lak.png'

function Carousel() {
  return (
    <div>
        <>
        <Component>
            <Row>
                <Col>
                <Carousel>
                    <Carousel.Item>
                        <img src={lak}  alt='Wait '/>
                    </Carousel.Item>

                </Carousel>

                </Col>

            </Row>

        </Component>


        </>
        
        
        
        
        
        
    </div>
  )
}

export default Carousel