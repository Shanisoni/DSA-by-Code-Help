import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyCarousel() {
  return (
    <>

<Container>
  <Row>
    <Col>
    <Carousel>
      <Carousel.Item>

        <img src='Images/images.jpg' alt='This is alt text ' />

      </Carousel.Item>


    </Carousel>
    </Col>

  </Row>

</Container>
    </>
   
  )
}

export default MyCarousel












// import {  Row , Col,  } from 'react-bootstrap'
// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import lak from './Images/lak.png'

// function Carousel() {
//   return (
//     <div>
//         <>
//         <Component>
//             <Row>
//                 <Col>
//                 <Carousel>
//                     <Carousel.Item>
//                         <img src={lak}  alt='Wait '/>
//                         <img src= ' Images/lake.jpg'  alt='Wait '/>
//                     </Carousel.Item>

//                 </Carousel>

//                 </Col>

//             </Row>

//         </Component>


//         </>
        
        
        
        
        
        
//     </div>
//   )
// }

// export default Carousel