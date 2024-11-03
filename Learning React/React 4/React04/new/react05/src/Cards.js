import React from 'react'
import { Card, Container , Row , Col } from 'react-bootstrap'
import lak from './Images/lak.png'

function Cards() {
  return (
    <div>
        
        <Container  >
            <Row>
                <Col md= {4} >  
                <Card>

                <Card.Img src= {lak}  height={200} width={200}/>
                <Card.Body>
                    <Card.Title>
                        This is Card Title
                    </Card.Title>
                    <Card.Subtitle>
                        This is Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                        This is Card Text
                    </Card.Text>
                </Card.Body>

                </Card>
               
                
                </Col>
            </Row>
        </Container>
        
        
    </div>
  )
}

export default Cards