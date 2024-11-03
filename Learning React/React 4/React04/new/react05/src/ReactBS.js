import React, { useState } from 'react'
import { Alert, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function ReactBS() {

    const [show , setShow] = useState(true);

    if( show) {

        return (
            <div>
                <Alert variant='primary'  onClose={ () =>  setShow(false)}  dismissible>
                    
                   
                    <Alert variant='danger'>
                    This is a primary alert—check it out!
                    <Alert.Link href="Google.com">An example link</Alert.Link>
        
                    </Alert>
                    
        
                </Alert>
        
                <Button  variant='danger'   size='lg' > Submit </Button>
                <Button  variant='danger' > Submit </Button>
                <Button variant='danger' size='sm' > Submit </Button>
        
        
            </div>
          )
        }

    }
  

export default ReactBS