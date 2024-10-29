import React, { Component, createRef } from 'react'

export default class UncontrolledComponent extends Component {

    constructor(props) {
      super(props)
    
      this.nameRef = createRef();

      this.ageRef = createRef(); 
         
      
    }

    componentDidMount() {
        console.log(this.nameRef);
        console.log(this.ageRef);   
    }
    
  render() {
    return (
      <div>

        <form>
            <label htmlFor='' > Enter Your Name : </label> 
            <input type='text' placeholder='Name' ref={this.nameRef}/>

            <br/>
            <br/>
            
            <label htmlFor='' > Enter Your Age : </label> 
            <input type='number' placeholder='Age' ref={this.ageRef}/>

            <br/>
            

            <button type='submit' > Submit  </button>

        </form>
        
      </div>
    )
  }
}
