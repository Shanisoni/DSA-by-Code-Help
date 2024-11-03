import React from 'react'
import { Alert, Button , Row, Col , Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function GridBS() {
  return (
    <div>


        <Container fluid = 'md'  >

        <Row className='mt-2'>
            <Col md= {{ offset:6 , span : 3 }} >
            <div className='bg-success' p-4 >
                First Div
            </div>
            </Col>

            <Col>
               <div className='bg-primary' p-4 >
                Second Div
               </div>
            </Col>
            <Col  >
            <div className='bg-success' p-4 >
                First Div
            </div>
            </Col>

            <Col>
               <div className='bg-primary' p-4 >
                Second Div
               </div>
            </Col>
        </Row>

        <br/>

        <Row >
            <Col  >
            <div className='bg-success' p-4 >
                First Div
            </div>
            </Col>

            <Col>
               <div className='bg-primary' p-4 >
                Second Div
               </div>
            </Col>
            <Col  >
            <div className='bg-success' p-4 >
                First Div
            </div>
            </Col>

            <Col>
               <div className='bg-primary' p-4 >
                Second Div
               </div>
            </Col>

            <Col>
               <div className='bg-primary' p-4 >
                Second Div
               </div>
            </Col>
        </Row>

        <br/>


        <Row >
            <Col  >
            <div className='bg-success' p-4 >
                First Div
            </div>
            </Col>

            <Col>
               <div className='bg-primary' p-4 >
                Second Div
               </div>
            </Col>
            <Col  >
            <div className='bg-success' p-4 >
                First Div
            </div>
            </Col>

            <Col>
               <div className='bg-primary' p-4 >
                Second Div
               </div>
            </Col>

            <Col  >
            <div className='bg-success' p-4 >
                First Div
            </div>
            </Col>

            <Col>
               <div className='bg-primary' p-4 >
                Second Div
               </div>
            </Col>
            <Col  >
            <div className='bg-success' p-4 >
                First Div
            </div>
            </Col>

            <Col>
               <div className='bg-primary' p-4 >
                Second Div
               </div>
            </Col>
        </Row>




        </Container>

        

        {/* <Button variant = 'outline-danger' > Submit </Button>

        <Button variant = 'outline-dark'  > Submit </Button>

        <Button variant = 'outline-success'  > Submit </Button>

        <Button variant = 'outline- warning' > Submit </Button>
         */}
        
    </div>
  )
}

export default GridBS   